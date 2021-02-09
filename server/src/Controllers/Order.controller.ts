import { ICreateOrderResponseDto } from "./../Dto/Order.dto";
import { inject } from "inversify";
import { types, IOrderService } from "../Types";
import {
  ICreateOrderRequestDto,
  IGetOrdersResponseDto,
} from "../Dto/Order.dto";
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  requestBody,
} from "inversify-express-utils";

@controller("/api/order")
export class OrderController extends BaseHttpController {
  constructor(
    @inject(types.IOrderService) private readonly orderService: IOrderService
  ) {
    super();
  }

  @httpGet("/")
  async index() {
    const orders = await this.orderService.getOrders();

    return <IGetOrdersResponseDto>{
      data: orders,
    };
  }

  @httpPost("/")
  async create(@requestBody() body: ICreateOrderRequestDto) {
    const createdOrder = await this.orderService.createOrder(body);

    return <ICreateOrderResponseDto>{
      statusCode: 201,
      data: createdOrder,
    };
  }

  @httpGet("/pending")
  async getPendingOrders() {
    const orders = await this.orderService.getPendingOrders();
    return orders;
  }
}
