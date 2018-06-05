import { Variant } from './Variant';

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    thumbnail?: string;
    variants?: Array<Variant>
}
