import { BaseApi } from "./Base.api";

export class OrderApi extends BaseApi {
  static async getAllPendingOrders() {
    const { data } = await OrderApi.axios.get("/api/order/pending");
    return data;
  }

  // TODO: Should  be a mutation?
  static async createAndPayOrder(payload: unknown) {
    const { data } = await OrderApi.axios.post(`/api/order`, payload);
    return data;
  }

  // TODO: Pass referenceNumber and id?
  static async updateOrder({ id, status }: { id: number; status: number }) {
    const { data } = await OrderApi.axios.put(`/api/order`, { id, status });
    return data;
  }
}
