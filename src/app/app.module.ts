import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';

import { LayoutComponent } from './core/components/layout/layout.component';
import { environment } from '../environments/environment';
import { ShopModule } from './shop/shop.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    MaterialModule,
    ShopModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([]),
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
