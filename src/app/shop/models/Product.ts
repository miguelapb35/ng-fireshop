import { Variant } from './Variant'; 

export interface Product {
    id: string;
    name: string;
    description: string;
    thumbnail?: string;
    variants?: Array<Variant>
}