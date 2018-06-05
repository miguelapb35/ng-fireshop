import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { CoreModule } from './core/core.module';

import { environment } from '../environments/environment';
import { LayoutComponent } from './core/components/layout/layout.component';

import { AuthService } from './core/services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([]),
  ],
  providers: [AngularFireAuth, AngularFirestore, AuthService],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
