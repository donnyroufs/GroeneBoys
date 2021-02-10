import Faker from "faker";
import { define } from "typeorm-seeding";
import { User } from "../../Entities/User.entity";

define(User, (faker: typeof Faker) => {
  const user = new User();

  user.firstName = faker.name.firstName();
  user.serialNumber = faker.random.number({
    min: 111111,
    max: 999999,
  });

  return user;
});
