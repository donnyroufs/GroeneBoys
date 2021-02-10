import { getRepository } from "typeorm";
import { ContainerModule } from "inversify";
import { UserService } from "../Services/User.service";
import { IUserRepository, IUserService, types } from "../Types";
import { User as UserEntity } from "../Entities/User.entity";

export const User = new ContainerModule((bind) => {
  bind<IUserService>(types.IUserService).to(UserService).inSingletonScope();
  bind<IUserRepository>(types.IUserRepository).toDynamicValue((ctx) => {
    const repo = getRepository(UserEntity);
    return repo;
  });
});
