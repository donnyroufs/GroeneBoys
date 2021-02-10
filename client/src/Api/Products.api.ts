import { IGetProductResponseDto } from "common/Dto/Product.dto";
import { BaseApi } from "./Base.api";

export class ProductsApi extends BaseApi {
  static async getAllProducts(): Promise<IGetProductResponseDto> {
    const { data } = await ProductsApi.axios.get("/api/product");
    return data;
  }
}
