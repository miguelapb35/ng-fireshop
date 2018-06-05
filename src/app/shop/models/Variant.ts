export interface Variant {
    id: string;
    price: number;
    stock: number;
    color: string;
    size: string;
    description?: string;
    images?: Array<string>;
}