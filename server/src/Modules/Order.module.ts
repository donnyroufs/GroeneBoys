import { ContainerModule } from "inversify";
import { OrderService } from "../Services/Order.service";
import { IOrderService, types } from "../Types";

export const Order = new ContainerModule((bind) => {
  bind<IOrderService>(types.IOrderService).to(OrderService).inSingletonScope();
});
