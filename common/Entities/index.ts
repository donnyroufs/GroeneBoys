import { OrderStatus } from "../Types";

export interface IUser {
  id: number;
  firstName: string;
  serialNumber: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrder {
  id: number;
  referenceNumber: number;
  status: OrderStatus;
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrderToProduct {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  product: IProduct;
  order: IOrder;
}
