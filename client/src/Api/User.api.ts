import { BaseApi } from "./Base.api";

export class UserApi extends BaseApi {
  static async verifyUser(serialNumber: number) {
    const { data } = await UserApi.axios.get(
      `/api/user/verify?serialNumber=${serialNumber}`
    );
    return data;
  }
}
