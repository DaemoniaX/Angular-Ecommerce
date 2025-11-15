import { Product } from './products.model';

export interface CartItem extends Product {
  quantity: number;
}