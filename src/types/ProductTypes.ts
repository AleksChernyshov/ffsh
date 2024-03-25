
export type Format = {
  size: string,
  price: number
}

export type Extra = {
  name: string,
  price: number,
  added: boolean
}

export type Product = {
  id: string;
  name: string;
  format: Format[]
  extras: Extra[]
  chips: string[]
  description: string;
  category: string;
  img: string;
}