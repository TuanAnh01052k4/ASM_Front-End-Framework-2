export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}
export type FormData = Pick<IProduct,'name' | 'image' | 'price' | 'category'>