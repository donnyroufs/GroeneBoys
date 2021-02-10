import { BaseApi } from "./Base.api";
import {
  ICreateOrderRequestDto,
  ICreateOrderResponseDto,
  IGetPendingOrdersResponseDto,
  IUpdateOrderRequestDto,
} from "common/Dto/Order.dto";

export class OrderApi extends BaseApi {
  static async getAllPendingOrders(): Promise<IGetPendingOrdersResponseDto[]> {
    const { data } = await OrderApi.axios.get("/api/order/pending");
    return data;
  }

  // TODO: Should be mutations?
  static async createAndPayOrder(
    payload: ICreateOrderResponseDto
  ): Promise<ICreateOrderRequestDto> {
    const { data } = await OrderApi.axios.post(`/api/order`, payload);
    return data;
  }

  static async updateOrder(payload: IUpdateOrderRequestDto) {
    const { data } = await OrderApi.axios.put(`/api/order`, payload);
    return data;
  }
}
