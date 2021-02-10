import { OrderToProduct } from "./Entities/OrderToProduct.entity";
import { ICreateOrderRequestDto } from "common/Dto/Order.dto";
import { Order } from "./Entities/Order.entity";
import { Repository } from "typeorm";
import { OrderStatus } from "common/Types";
import { IOrder, IOrderToProduct, IProduct, IUser } from "common/Entities";

export enum types {
  IUserService = "IUserService",
  IUserRepository = "IUserRepository",
  IOrderService = "IOrderService",
  IOrderRepository = "IOrderRepository",
  IProductService = "IProductService",
  IProductRepository = "IProductRepository",
  IOrderToProductRepository = "IOrderToProductRepository",
}

export interface IUserService {
  getUsers: () => Promise<IUser[]>;
  verify: (serialNumber: number) => Promise<IUser | undefined>;
}

export interface ICreateOrderServiceDto {
  order: IOrderToProduct[];
  referenceNumber: number;
}
export interface IOrderService {
  getOrders: () => Promise<IOrder[]>;
  createOrder: (
    orderData: ICreateOrderRequestDto
  ) => Promise<ICreateOrderServiceDto>;
  // TODO: FIX
  getPendingOrders: () => Promise<unknown>;
  // TODO: FIX
  updateOrder: (id: number, status: OrderStatus) => Promise<unknown>;
}

export interface IProductService {
  getProducts: () => Promise<IProduct[]>;
}

export interface IUserRepository extends Repository<IUser> {}
export interface IOrderRepository extends Repository<IOrder> {}
export interface IProductRepository extends Repository<IProduct> {}
export interface IOrderProductRepository extends Repository<IOrderToProduct> {}
