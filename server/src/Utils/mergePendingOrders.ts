import { OrderToProduct } from "../Entities/OrderToProduct.entity";

export function mergePendingOrders(queryData: OrderToProduct[]) {
  return Object.values(
    queryData.reduce((acc: { [key: string]: any }, curr) => {
      const { id, ...stuff } = curr;

      if (!acc[curr.order.referenceNumber]) {
        acc[curr.order.referenceNumber] = {
          ...stuff,
          products: [],
        };
        return acc;
      }

      const currentItem = acc[curr.order.referenceNumber];

      const prod = {
        ...curr.product,
        quantity: curr.quantity,
      };

      acc[curr.order.referenceNumber] = {
        ...currentItem,
        products: [...currentItem.products, prod],
      };

      return acc;
    }, {})
  );
}
