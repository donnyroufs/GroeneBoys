import { OrderToProduct } from "./../Entities/OrderToProduct.entity";
import { ICreateOrderRequestDto } from "./../Dto/Order.dto";
import { Order } from "./../Entities/Order.entity";
import { getRepository, getManager } from "typeorm";
import {
  IOrderProductRepository,
  IOrderRepository,
  IOrderService,
  OrderStatus,
} from "../Types";
import { injectable } from "inversify";

@injectable()
export class OrderService implements IOrderService {
  private orderRepo: IOrderRepository = getRepository(Order);
  private orderToProductRepo: IOrderProductRepository = getRepository(
    OrderToProduct
  );

  async getOrders() {
    const orders = await this.orderRepo.find();
    return orders;
  }

  async createOrder({
    userId,
    products,
    ...orderData
  }: ICreateOrderRequestDto) {
    return getManager().transaction(async (entityManager) => {
      const newOrder = this.orderRepo.create({
        ...orderData,
        user: {
          id: userId,
        },
      });

      const createdOrder = await entityManager.save(newOrder);

      const orderedProducts = products.map((product) => {
        return this.orderToProductRepo.create({
          orderId: createdOrder.id,
          productId: product.productId,
          quantity: product.quantity,
        });
      });

      return entityManager.save(orderedProducts);
    });
  }

  async getPendingOrders() {
    return this.orderToProductRepo
      .createQueryBuilder("o")
      .innerJoinAndSelect("o.order", "order")
      .innerJoinAndSelect("o.product", "product")
      .where("order.status = :orderStatus", {
        orderStatus: OrderStatus.pending,
      })
      .getMany();
  }

  async updateOrder() {}
}
