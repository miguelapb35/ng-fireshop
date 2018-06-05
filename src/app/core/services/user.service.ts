import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    this.checkCurrent();
  }

  public getCurrent() {
    if(!this.isExpired()){
      return <User>JSON.parse(sessionStorage.getItem('userDetails'));
    }
    this.checkCurrent();
    return null;
  }


  public setCurrent(user : User) {
    const expireDate = new Date(Date.now());
    sessionStorage.setItem('userDetails', JSON.stringify(user));
    sessionStorage.setItem('userExpire', expireDate.setDate(expireDate.getDate() + 1).toString());
  }

  public unsetCurrent() {
    sessionStorage.removeItem('userDetails');
    sessionStorage.removeItem('userExpire');
  }

  private isExpired() {
    if(sessionStorage.getItem('userDetails') && sessionStorage.getItem('userExpire')) {
      if(JSON.parse(sessionStorage.getItem('userExpire')) - Date.now().valueOf() > 0) {
        return false;
      }
    }
    return true;
  }

  private checkCurrent() {
    if(this.isExpired()) {
      this.unsetCurrent();
    }
  }

}


