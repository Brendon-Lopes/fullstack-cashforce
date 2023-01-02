export interface IOrder {
  id: number;
  nNf: string;
  buyer: { name: string };
  provider: { name: string };
  emissionDate: string;
  value: string;
  orderStatusBuyer: string;
}
