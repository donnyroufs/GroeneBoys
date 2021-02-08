import { types, IUserService } from "../Types";
import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
} from "inversify-express-utils";

@controller("/user")
export class UserController extends BaseHttpController {
  constructor(
    @inject(types.IUserService) private readonly userService: IUserService
  ) {
    super();
  }

  @httpGet("/")
  async index() {
    const users = this.userService.getUsers();

    return {
      data: users,
    };
  }
}
