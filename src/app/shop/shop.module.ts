import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { AuthService } from '../core/services/auth.service';
import { AuthGuard } from '../core/guards/auth.guard';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  imports: [
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: ProductsListComponent },
      { path: 'product/:product_id', component: ProductComponent }
    ])
  ],
  declarations: [
    ProductsListComponent, 
    ProductComponent
  ],
  exports: [
    ProductsListComponent
  ],
  providers: [AuthService, AuthGuard]
})
export class ShopModule { }
