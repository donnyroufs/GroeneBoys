import "reflect-metadata";

import { Container } from "inversify";
import { User, Order } from "./Modules";

import "./Controllers";

const container = new Container();

container.load(User, Order);

export { container };
