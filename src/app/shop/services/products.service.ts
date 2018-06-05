import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products : Product[];

  constructor(private afStore : AngularFirestore) {
    this.updateProducts();
  }

  public getProducts() {
    return <Product[]> this._products;
  }

  public updateProducts() {
    this.afStore.collection('products').valueChanges().subscribe((products : Array<Product>) => {
      this.setProducts(products);
    });
  }

  private setProducts(products : Array<Product>) {
    this._products = products;
  }
}
