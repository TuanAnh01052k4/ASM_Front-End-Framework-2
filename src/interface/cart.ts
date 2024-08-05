export interface ICart {
  id: number | string;
  userId: number | string;
  products: [
    {
      ProductId: number | string;
      quantity?: number;
      variants?: [
        {
          size: number | string;
          color: number | string;
          quantity: number;
        }
      ];
    }
  ];
}
