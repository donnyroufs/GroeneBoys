import {
  ICreateOrderResponseDto,
  IUpdateOrderRequestDto,
} from "common/Dto/Order.dto";
import { inject } from "inversify";
import { types, IOrderService } from "../Types";
import {
  ICreateOrderRequestDto,
  IGetOrdersResponseDto,
} from "common/Dto/Order.dto";
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  httpPut,
  requestBody,
} from "inversify-express-utils";
import { IHttpResponseDto } from "common/Dto";

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

  @httpPut("/")
  async update(@requestBody() data: IUpdateOrderRequestDto) {
    await this.orderService.updateOrder(data.id, data.status);
    return <IHttpResponseDto>{
      statusCode: 204,
    };
  }

  @httpGet("/pending")
  async getPendingOrders() {
    const orders = await this.orderService.getPendingOrders();
    console.log(orders);
    return orders;
  }
}
