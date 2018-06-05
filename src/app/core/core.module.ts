import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  declarations: [
    LoginComponent,
    NavbarComponent,
    LayoutComponent
  ],
  providers: [AuthService, AuthGuard]
})
export class CoreModule { }
