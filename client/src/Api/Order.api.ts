import { BaseApi } from "./Base.api";

export class OrderApi extends BaseApi {
  static async getAllPendingOrders() {
    const { data } = await OrderApi.axios.get("/api/order");
    return data;
  }

  static async verifyUser(serialKey: number) {
    const { data } = await OrderApi.axios.get(`/api/user/verify?serialKey=${serialKey}`);
    return data;
  }
}
