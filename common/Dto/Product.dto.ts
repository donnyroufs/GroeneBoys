import { IProduct } from "../Entities";
import { IHttpResponseDto } from "./HttpResponse.dto";

export interface IGetProductResponseDto extends IHttpResponseDto {
  data: IProduct[];
}
