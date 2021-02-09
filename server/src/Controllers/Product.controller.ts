import { IGetProductResponseDto } from "./../Dto/Product.dto";
import { types, IProductService } from "../Types";
import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
  queryParam,
} from "inversify-express-utils";

@controller("/api/product")
export class ProductController extends BaseHttpController {
  constructor(
    @inject(types.IProductService)
    private readonly productService: IProductService
  ) {
    super();
  }

  @httpGet("/")
  async index() {
    const products = await this.productService.getProducts();

    return <IGetProductResponseDto>{
      statusCode: 200,
      data: products,
    };
  }
}
