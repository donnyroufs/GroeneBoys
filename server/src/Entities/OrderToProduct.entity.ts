import { Order } from "./Order.entity";
import { Product } from "./Product.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class OrderToProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: number;

  @Column()
  productId: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Product, (product: Product) => product.orderToProducts, {
    eager: true,
  })
  product: Product;

  @ManyToOne(() => Order, (order: Order) => order.orderToProducts, {
    eager: true,
  })
  order: Order;
}
