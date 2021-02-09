import { User } from "../Entities/User.entity";
import { IHttpResponseDto } from "./HttpResponse.dto";

export interface IGetUsersReponseDto extends IHttpResponseDto {
  data: User[];
}

export interface IUserVerifyRequestDto {
  serialNumber: number;
}

export interface IUserVerifyResponseDto extends IHttpResponseDto {
  data: User | undefined;
}
