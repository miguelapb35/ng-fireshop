import { Component } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

import { Product } from '../../models/Product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  constructor(public products : ProductsService, public cart : CartService) {
    this.products.updateProducts();
  }

  addToCart(product : Product) {
    this.cart.add(product);
  }

  removeFromCart(product : Product) {
    this.cart.remove(product);
  }

  getProductCountFromCart(product : Product) {
    return (this.cart.get(product.id)) ? this.cart.get(product.id).quantity : 0;
  }

}