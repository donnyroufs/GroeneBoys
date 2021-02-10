import { OrderStatus } from "../Types";
import { IHttpResponseDto } from "./HttpResponse.dto";
import { IOrder, IOrderToProduct, IProduct } from "../Entities";

export interface IGetOrdersResponseDto extends IHttpResponseDto {
  data: IOrder[];
}

export interface IGetPendingOrdersResponseDto extends IHttpResponseDto {
  data: {
    orderId: number;
    productId: number;
    quantity: number;
    order: IOrder;
    product: IProduct;
    products: IProduct[];
  };
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
  data: {
    order: IOrderToProduct[];
    referenceNumber: number;
  };
}

export interface IUpdateOrderRequestDto {
  id: number;
  status: OrderStatus;
}
