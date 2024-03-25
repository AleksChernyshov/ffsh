import { Extra, Format, Product } from './ProductTypes';

export type Basket = {
  item: Product,
  quantity: number,
  position: string, 
  category: string,
  format: Format,
  extras: Extra[]
}