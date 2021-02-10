import { IUser } from "../Entities";
import { IHttpResponseDto } from "./HttpResponse.dto";

export interface IGetUsersReponseDto extends IHttpResponseDto {
  data: IUser[];
}

export interface IUserVerifyRequestDto {
  serialNumber: number;
}

export interface IUserVerifyResponseDto extends IHttpResponseDto {
  data: IUser | undefined;
}
