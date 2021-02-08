import { User } from "../Entities/User.entity";
import { IHttpResponseDto } from "./HttpResponse.dto";

export interface IGetUsersReponseDto extends IHttpResponseDto {
  data: User[];
}
