import { OrderToProduct } from "./Entities/OrderToProduct.entity";
import { ICreateOrderRequestDto } from "./Dto/Order.dto";
import { Order } from "./Entities/Order.entity";
import { User } from "./Entities/User.entity";
import { Repository } from "typeorm";
import { Product } from "./Entities/Product.entity";

export enum types {
  IUserService = "IUserService",
  IUserRepo = "IUserRepo",
  IOrderService = "IOrderService",
  IOrderRepo = "IOrderRepo",
  IProductService = "IProductService",
  IProductRepo = "IProductRepo",
}

export enum OrderStatus {
  pending,
  done,
}

export interface IUserService {
  getUsers: () => Promise<User[]>;
  verify: (serialNumber: number) => Promise<User | undefined>;
}

export interface IOrderService {
  getOrders: () => Promise<Order[]>;
  createOrder: (orderData: ICreateOrderRequestDto) => Promise<OrderToProduct[]>;
  getPendingOrders: () => Promise<unknown>;
  updateOrder: () => Promise<unknown>;
}

export interface IProductService {
  getProducts: () => Promise<Product[]>;
}

export interface IUserRepository extends Repository<User> {}
export interface IOrderRepository extends Repository<Order> {}
export interface IProductRepository extends Repository<Product> {}
export interface IOrderProductRepository extends Repository<OrderToProduct> {}
