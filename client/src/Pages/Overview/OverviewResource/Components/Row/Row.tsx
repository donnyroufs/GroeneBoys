import { Tr, Td } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { ProductWithQuantity, useCart } from "../../../../../Context/useCart";

export const Row: React.FC<any> = ({ name, quantity, price }) => {
  const totalPrice = price * quantity;

  return (
    <Tr>
      <Td>{name}</Td>
      <Td isNumeric>{quantity}</Td>
      <Td isNumeric>{totalPrice.toFixed(2)}</Td>
    </Tr>
  );
};
