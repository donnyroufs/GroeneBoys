import { Product } from "server/src/Entities/Product.entity";
import { IHttpResponseDto } from "./HttpResponse.dto";

export interface IGetProductResponseDto extends IHttpResponseDto {
  data: Product[];
}
