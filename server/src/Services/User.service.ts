import { IUserService, IUserRepository, types } from "../Types";
import { inject, injectable } from "inversify";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(types.IUserRepository) private readonly userRepo: IUserRepository
  ) {}

  async getUsers() {
    const users = await this.userRepo.find();
    return users;
  }

  async verify(serialNumber: number) {
    return this.userRepo.findOne({ serialNumber });
  }
}
