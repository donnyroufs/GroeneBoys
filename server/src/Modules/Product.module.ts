import { IProductRepository } from "./../Types";
import { ContainerModule } from "inversify";
import { ProductService } from "./../Services/Product.service";
import { IProductService, types } from "../Types";
import { getRepository } from "typeorm";
import { Product as ProductEntity } from "../Entities/Product.entity";

export const Product = new ContainerModule((bind) => {
  bind<IProductService>(types.IProductService)
    .to(ProductService)
    .inSingletonScope();
  bind<IProductRepository>(types.IProductRepository).toDynamicValue((ctx) => {
    const repo = getRepository(ProductEntity);
    return repo;
  });
});
