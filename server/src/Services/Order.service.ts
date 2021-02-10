import { injectable } from "inversify";
import { OrderToProduct } from "./../Entities/OrderToProduct.entity";
import { ICreateOrderRequestDto } from "common/Dto/Order.dto";
import { Order } from "./../Entities/Order.entity";
import { getRepository, getManager } from "typeorm";
import { mergePendingOrders } from "../Utils/mergePendingOrders";
import {
  IOrderProductRepository,
  IOrderRepository,
  IOrderService,
  OrderStatus,
} from "../Types";

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

  async createOrder({ userId, products }: ICreateOrderRequestDto) {
    return getManager().transaction(async (entityManager) => {
      const currentReferenceNumber = await entityManager.count(Order);
      const updatedReferenceNumber = currentReferenceNumber + 1;

      const newOrder = this.orderRepo.create({
        referenceNumber: updatedReferenceNumber,
        user: {
          id: userId,
        },
        status: OrderStatus.paid,
      });

      const createdOrder = await entityManager.save(newOrder);

      const orderedProducts = products.map((product) => {
        return this.orderToProductRepo.create({
          orderId: createdOrder.id,
          productId: product.id,
          quantity: product.quantity,
        });
      });

      const order = await entityManager.save(orderedProducts);

      return {
        order,
        referenceNumber: updatedReferenceNumber,
      };
    });
  }

  async getPendingOrders() {
    const orders = await this.orderToProductRepo
      .createQueryBuilder("o")
      .innerJoinAndSelect("o.order", "order")
      .innerJoinAndSelect("o.product", "product")
      .where("order.status = :orderStatus", {
        orderStatus: OrderStatus.paid,
      })
      .getMany();

    return mergePendingOrders(orders);
  }

  async updateOrder(id: number, status: OrderStatus = OrderStatus.paid) {
    return this.orderRepo.update(id, { status });
  }
}
