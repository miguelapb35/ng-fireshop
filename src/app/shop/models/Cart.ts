import { Product } from "./Product";
import { CartProduct } from "./CartProduct";

export interface Cart {
    total_price: number;
    products: any;
}