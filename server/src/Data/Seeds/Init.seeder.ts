import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { OrderToProduct } from "../../Entities/OrderToProduct.entity";
import { Order } from "../../Entities/Order.entity";
import { Product } from "../../Entities/Product.entity";
import { User } from "../../Entities/User.entity";

export default class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    // Create users
    console.log("1");
    await factory(User)().createMany(3);

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([{ firstName: "Donny", serialNumber: 118112 }])
      .execute();

    // Create products
    console.log("2");
    await connection
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values([
        {
          id: 1,
          name: "Frietje Mayo",
          price: 2.25,
          image: "frietje-mayo.png",
        },
        {
          id: 2,
          name: "Broodtje Tosti",
          price: 1.95,
          image: "tosti-ham-kaas.jpg",
        },
        {
          id: 3,
          name: "Kroket",
          price: 1.5,
          image: "kroket.jpg",
        },
        {
          id: 4,
          name: "Frikandel Speciaal",
          price: 2.75,
          image: "frikandel-speciaal.jpg",
        },
        {
          id: 5,
          name: "Bitterballen",
          price: 4.0,
          image: "bitterballen.jpg",
        },
      ])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Order)
      .values([
        {
          id: 1,
          referenceNumber: 1,
          status: 1,
          user: {
            id: 1,
          },
        },
        {
          id: 2,
          referenceNumber: 2,
          status: 1,
          user: {
            id: 1,
          },
        },
      ])
      .execute();

    // Create product orders
    console.log("3");
    await connection
      .createQueryBuilder()
      .insert()
      .into(OrderToProduct)
      .values([
        {
          id: 1,
          orderId: 1,
          productId: 1,
          quantity: 2,
        },
        {
          id: 2,
          orderId: 2,
          productId: 1,
          quantity: 1,
        },
        {
          id: 3,
          orderId: 2,
          productId: 2,
          quantity: 1,
        },
        {
          id: 4,
          orderId: 2,
          productId: 3,
          quantity: 4,
        },
      ])
      .execute();

    // Create orders
    console.log("4");
  }
}
