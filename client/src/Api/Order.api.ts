import { BaseApi } from "./Base.api";

export class OrderApi extends BaseApi {
  static async getAllPendingOrders() {
    const {
      data: { data },
    } = await OrderApi.axios.get("/api/order");
    return data;
  }
}
