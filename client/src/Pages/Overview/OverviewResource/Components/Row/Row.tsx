import { Tr, Td } from "@chakra-ui/react";
import { IProduct } from "common/Entities";

export const Row: React.FC<IProduct & { quantity: number }> = ({
  name,
  quantity,
  price,
}) => {
  const totalPrice = price * quantity;

  return (
    <Tr>
      <Td>{name}</Td>
      <Td isNumeric>{quantity}</Td>
      <Td isNumeric>{totalPrice.toFixed(2)}</Td>
    </Tr>
  );
};
