import { IOrderProductRepository } from "./../Types";
import { ContainerModule } from "inversify";
import { getRepository } from "typeorm";
import { OrderService } from "../Services/Order.service";
import { IOrderRepository, IOrderService, types } from "../Types";
import { Order as OrderEntity } from "../Entities/Order.entity";
import { OrderToProduct } from "../Entities/OrderToProduct.entity";

export const Order = new ContainerModule((bind) => {
  bind<IOrderService>(types.IOrderService).to(OrderService).inSingletonScope();
  bind<IOrderRepository>(types.IOrderRepository).toDynamicValue((ctx) => {
    const repo = getRepository(OrderEntity);
    return repo;
  });
  bind<IOrderProductRepository>(types.IOrderToProductRepository).toDynamicValue(
    (ctx) => {
      const repo = getRepository(OrderToProduct);
      return repo;
    }
  );
});
