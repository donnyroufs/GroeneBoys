import { Product } from "../Entities/Product.entity";
import { IHttpResponseDto } from "./HttpResponse.dto";

export interface IGetProductResponseDto extends IHttpResponseDto {
  data: Product[];
}
