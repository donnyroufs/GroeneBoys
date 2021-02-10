import {
  IGetUsersReponseDto,
  IUserVerifyRequestDto,
  IUserVerifyResponseDto,
} from "common/Dto/User.dto";
import { types, IUserService } from "../Types";
import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
  queryParam,
} from "inversify-express-utils";

@controller("/api/user")
export class UserController extends BaseHttpController {
  constructor(
    @inject(types.IUserService) private readonly userService: IUserService
  ) {
    super();
  }

  @httpGet("/")
  async index() {
    const users = await this.userService.getUsers();

    return <IGetUsersReponseDto>{
      statusCode: 200,
      data: users,
    };
  }

  @httpGet("/verify")
  async verify(@queryParam() { serialNumber }: IUserVerifyRequestDto) {
    const verified = await this.userService.verify(serialNumber);

    if (!verified) {
      return <IUserVerifyResponseDto>{
        statusCode: 404,
        message: "User does not exist",
        error: true,
      };
    }

    return <IUserVerifyResponseDto>{
      statusCode: 200,
      data: verified,
    };
  }
}
