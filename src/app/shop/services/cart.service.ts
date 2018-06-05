import { Injectable } from '@angular/core';

import { Cart } from '../models/Cart';
import { Product } from '../models/Product';
import { CartProduct } from '../models/CartProduct';
import {current} from 'codelyzer/util/syntaxKind';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    this.initCart();
  }

  public add(product : Product) {
    const currentCart = this.getFromStorage();
    if(product.stock > 0) {
      if (currentCart.products[product.id]) {
        if (currentCart.products[product.id].quantity < product.stock) {
          currentCart.products[product.id].quantity += 1;
          currentCart.total_price += product.price;
          this.setToStorage(currentCart);
          return true;
        }
        return true;
      }
      currentCart.products[product.id] = {quantity: 1, product: product};
      currentCart.total_price += product.price;
      this.setToStorage(currentCart);
      return true;
    }
    return false;
  }

  public remove(product : Product) {
    const currentCart = this.getAll();
    if(currentCart.products[product.id]) {
      (currentCart.products[product.id].quantity !== 1) ?
        currentCart.products[product.id].quantity -= 1 :
        delete(currentCart.products[product.id]);

      (currentCart.total_price - product.price >= 0) ?
        currentCart.total_price -= product.price :
        currentCart.total_price = 0;
      this.setToStorage(currentCart);
    }
  }

  public getAll() {
    return <Cart> this.getFromStorage();
  }

  public getAllParsed() {
    const cartArray = [];
    const cartProducts = this.getFromStorage().products;
    for (let cartProductKey in cartProducts) {
      if(cartProducts.hasOwnProperty(cartProductKey)) {
        cartArray.push(cartProducts[cartProductKey]);
      }
    }
    console.log(cartArray);
    return cartArray;
  }


  public get(productId : string) {
    const currentCart = this.getFromStorage();
    if(currentCart.products[productId]) {
      return <CartProduct> currentCart.products[productId];
    }
    return null;
  }

  public count() {
    let items = 0;
    const currentCart = this.getFromStorage();
    for (const product in currentCart.products) {
      items += currentCart.products[product].quantity;
    }
    return items;
  }

  private getFromStorage() {
    if(sessionStorage.getItem('cartItems')){
      return <Cart>JSON.parse(sessionStorage.getItem('cartItems'));
    }
  }

  private setToStorage(currentCart : Cart) {
    if(this.getFromStorage()) {
      sessionStorage.removeItem('cartItems');
    }
    sessionStorage.setItem('cartItems', JSON.stringify(currentCart));
  }

  private initCart() {
    if(!this.getAll()) {
      this.setToStorage({ total_price: 0, products: {}});
    }
  }


}
