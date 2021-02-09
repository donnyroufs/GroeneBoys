import { BaseApi } from "./Base.api";

export class OrderApi extends BaseApi {
  static async getAllPendingOrders() {
    const { data } = await OrderApi.axios.get("/api/order");
    return data;
  }

  // TODO: Should  be a mutation?
  static async createAndPayOrder(payload: unknown) {
    const { data } = await OrderApi.axios.post(`/api/order`, payload);
    return data;
  }
}
