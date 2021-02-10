import { OrderToProduct } from "./Entities/OrderToProduct.entity";
import { ICreateOrderRequestDto } from "common/Dto/Order.dto";
import { Order } from "./Entities/Order.entity";
import { User } from "./Entities/User.entity";
import { Repository } from "typeorm";
import { Product } from "./Entities/Product.entity";
import { OrderStatus } from "common/Types";

export enum types {
  IUserService = "IUserService",
  IUserRepo = "IUserRepo",
  IOrderService = "IOrderService",
  IOrderRepo = "IOrderRepo",
  IProductService = "IProductService",
  IProductRepo = "IProductRepo",
}

export interface IUserService {
  getUsers: () => Promise<User[]>;
  verify: (serialNumber: number) => Promise<User | undefined>;
}

export interface ICreateOrderServiceDto {
  order: OrderToProduct[];
  referenceNumber: number;
}
export interface IOrderService {
  getOrders: () => Promise<Order[]>;
  createOrder: (
    orderData: ICreateOrderRequestDto
  ) => Promise<ICreateOrderServiceDto>;
  getPendingOrders: () => Promise<unknown>;
  updateOrder: (id: number, status: OrderStatus) => Promise<unknown>;
}

export interface IProductService {
  getProducts: () => Promise<Product[]>;
}

export interface IUserRepository extends Repository<User> {}
export interface IOrderRepository extends Repository<Order> {}
export interface IProductRepository extends Repository<Product> {}
export interface IOrderProductRepository extends Repository<OrderToProduct> {}
