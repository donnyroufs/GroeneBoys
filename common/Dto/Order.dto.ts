import { ICreateOrderServiceDto } from "server/src/Types";
import { OrderStatus } from "../Types";
import { IHttpResponseDto } from "./HttpResponse.dto";
import { Order } from "server/src/Entities/Order.entity";

export interface IGetOrdersResponseDto extends IHttpResponseDto {
  data: Order[];
}

export interface IRequestProductDto {
  id: number;
  quantity: number;
}

export interface ICreateOrderRequestDto {
  userId: number;
  products: IRequestProductDto[];
}

export interface ICreateOrderResponseDto extends IHttpResponseDto {
  data: ICreateOrderServiceDto;
}

export interface IUpdateOrderRequestDto {
  id: number;
  status: OrderStatus;
}
