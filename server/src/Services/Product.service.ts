import { IProductService, IProductRepository } from "./../Types";
import { Product } from "./../Entities/Product.entity";
import { getRepository } from "typeorm";
import { injectable } from "inversify";

@injectable()
export class ProductService implements IProductService {
  private productRepo: IProductRepository = getRepository(Product);

  async getProducts() {
    const products = await this.productRepo.find();
    return products;
  }
}
