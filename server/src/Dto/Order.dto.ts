import { OrderToProduct } from "./../Entities/OrderToProduct.entity";
import { IHttpResponseDto } from "./HttpResponse.dto";
import { Order } from "../Entities/Order.entity";

export interface IGetOrdersResponseDto extends IHttpResponseDto {
  data: Order[];
}

export interface IRequestProductDto {
  productId: number;
  quantity: number;
}

export interface ICreateOrderRequestDto {
  userId: number;
  serialNumber: number;
  products: IRequestProductDto[];
}

export interface ICreateOrderResponseDto extends IHttpResponseDto {
  data: OrderToProduct[];
}
