import { IGetUsersReponseDto } from "./../Dto/User.dto";
import { types, IUserService } from "../Types";
import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
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
}
