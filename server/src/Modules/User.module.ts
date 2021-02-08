import { ContainerModule } from "inversify";
import { UserService } from "../Services/User.service";
import { IUserService, types } from "../Types";

export const User = new ContainerModule((bind) => {
  bind<IUserService>(types.IUserService).to(UserService).inSingletonScope();
});
