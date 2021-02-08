import "reflect-metadata";

import { Container } from "inversify";
import { User } from "./Modules/User.module";

import "./Controllers";

const container = new Container();

container.load(User);

export { container };
