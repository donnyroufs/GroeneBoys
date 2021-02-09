import { User } from "./../Entities/User.entity";
import { getRepository } from "typeorm";
import { IUserService, IUserRepository } from "../Types";
import { injectable } from "inversify";

@injectable()
export class UserService implements IUserService {
  private userRepo: IUserRepository = getRepository(User);

  async getUsers() {
    const users = await this.userRepo.find();
    return users;
  }

  async verify(serialNumber: number) {
    return this.userRepo.findOne({ serialNumber });
  }
}
