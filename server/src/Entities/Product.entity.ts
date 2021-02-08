import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { OrderToProduct } from "./OrderToProduct.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column("float")
  price: number;

  @Column()
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @OneToMany(() => OrderToProduct, (orderToProduct) => orderToProduct.productId)
  orderToProducts: OrderToProduct[];
}
