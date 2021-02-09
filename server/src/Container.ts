import "reflect-metadata";

import { Container } from "inversify";
import { User, Order, Product } from "./Modules";

import "./Controllers";

const container = new Container();

container.load(User, Order, Product);

export { container };
