import { Basket } from "./Basket";

export type Order = {
  orderId: string,
  paymentMethod: number,
  orderedProducts: Basket[], 
}