import { OrderStatus } from "./../Types";
import { User } from "./User.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { OrderToProduct } from "./OrderToProduct.entity";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  referenceNumber: number;

  @Column({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.pending,
  })
  status: OrderStatus;

  @ManyToOne(() => User, (user: User) => user.orders, { nullable: false })
  user: User;

  @OneToMany(() => OrderToProduct, (orderToProduct) => orderToProduct.orderId, {
    nullable: false,
  })
  orderToProducts: OrderToProduct[];

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
