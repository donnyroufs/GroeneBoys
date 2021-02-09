import { BaseApi } from "./Base.api";

export class ProductsApi extends BaseApi {
  static async getAllProducts() {
    const { data } = await ProductsApi.axios.get("/api/product");
    return data;
  }
}
