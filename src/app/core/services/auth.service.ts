import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { ErrorService } from './error.service';
import { UserService } from './user.service';

import { User as FirebaseUser } from '@firebase/auth-types';
import { User } from '../models/User';




@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private afStore : AngularFirestore, 
    private afAuth: AngularFireAuth, 
    private error : ErrorService, 
    private user : UserService,
    public router: Router, 
  ) {
    this.setAuthErrorCodes();
  }

  public isLogged() {
    return (this.user.getCurrent()) ? true : false;
  }

  public getUser(data ?: string) {
    return (data) ? this.user.getCurrent()[data] : <User> this.user.getCurrent();
  }

  public login(email : string, password : string, redirect?: boolean) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => { 
      this.afStore.collection('users').doc(this.afAuth.auth.currentUser.uid).valueChanges().subscribe((user : User) => { 
        this.user.setCurrent(user);
        if(redirect){ this.router.navigate(['/']).then(() => location.reload()); }
      });
    }).catch((error) => window.confirm(this.error.getErrorByCode(error.code)));
  }

  public register(email : string, password : string, user : User) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((firebaseUser : FirebaseUser) => {
      user.id = this.afAuth.auth.currentUser.uid;
      this.afStore.collection('users').doc(user.id).set(user).then((result) => { 
        this.user.setCurrent(user);
        this.router.navigate(['/']).then(() => location.reload());
      });
    }).catch((error) => window.confirm(this.error.getErrorByCode(error.code)));
  }

  public logout() {
    this.user.unsetCurrent();
    this.router.navigate(['/']).then(() => location.reload());
  }

  private setAuthErrorCodes() {
    this.error.addErrorCode('auth/invalid-email', 'Invalid email address!');
    this.error.addErrorCode('auth/user-disabled', 'User is disabled [banned]');
    this.error.addErrorCode('auth/user-not-found', 'User not found!');
    this.error.addErrorCode('auth/wrong-password', 'Wrong password!');
    this.error.addErrorCode('auth/email-already-in-use', 'Email is already exists!');
    this.error.addErrorCode('auth/invalid-email', 'Given email is invalid!');
    this.error.addErrorCode('auth/operation-not-allowed', 'Operation is not allowed!');
  }

}
