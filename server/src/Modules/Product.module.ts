import { ContainerModule } from "inversify";
import { ProductService } from "./../Services/Product.service";
import { IProductService, types } from "../Types";

export const Product = new ContainerModule((bind) => {
  bind<IProductService>(types.IProductService)
    .to(ProductService)
    .inSingletonScope();
});
