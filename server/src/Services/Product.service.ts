import { IProductService, IProductRepository, types } from "./../Types";
import { Product } from "./../Entities/Product.entity";
import { getRepository } from "typeorm";
import { inject, injectable } from "inversify";

@injectable()
export class ProductService implements IProductService {
  constructor(
    @inject(types.IProductRepository)
    private readonly productRepo: IProductRepository
  ) {}

  async getProducts() {
    const products = await this.productRepo.find();
    return products;
  }
}
