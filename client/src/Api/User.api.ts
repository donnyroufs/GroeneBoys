import { BaseApi } from "./Base.api";
import { IUserVerifyRequestDto } from "common/Dto/User.dto";

export class UserApi extends BaseApi {
  static async verifyUser({ serialNumber }: IUserVerifyRequestDto) {
    const { data } = await UserApi.axios.get(
      `/api/user/verify?serialNumber=${serialNumber}`
    );
    return data;
  }
}
