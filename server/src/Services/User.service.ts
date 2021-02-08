import { IUserService } from "../Types";
import { injectable } from "inversify";

@injectable()
export class UserService implements IUserService {
  getUsers() {
    return [];
  }
}
