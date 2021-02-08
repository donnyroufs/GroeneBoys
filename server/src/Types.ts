import { OrderToProduct } from "./Entities/OrderToProduct.entity";
import { IGetUsersReponseDto } from "./Dto/User.dto";
import { IGetOrdersResponseDto, ICreateOrderRequestDto } from "./Dto/Order.dto";
import { Order } from "./Entities/Order.entity";
import { User } from "./Entities/User.entity";
import { Repository } from "typeorm";

export enum types {
  IUserService = "IUserService",
  IUserRepo = "IUserRepo",
  IOrderService = "IOrderService",
  IOrderRepo = "IOrderRepo",
}

export enum OrderStatus {
  pending,
  done,
}

export interface IUserService {
  getUsers: () => Promise<User[]>;
}

export interface IOrderService {
  getOrders: () => Promise<Order[]>;
  createOrder: (orderData: ICreateOrderRequestDto) => Promise<OrderToProduct[]>;
  getPendingOrders: () => Promise<unknown>;
  updateOrder: () => Promise<unknown>;
}

export interface IUserRepository extends Repository<User> {}
export interface IOrderRepository extends Repository<Order> {}
export interface IOrderProductRepository extends Repository<OrderToProduct> {}
