import { Tr, Td } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "../../../../Context/useCart";
import { IProduct } from "../../../../Types";

export const Row: React.FC<IProduct & { quantity: number }> = ({
  id,
  name,
  quantity,
  price,
}) => {
  const { removeFromCart } = useCart();
  const totalPrice = price * quantity;

  return (
    <Tr>
      <Td>{name}</Td>
      <Td isNumeric>{quantity}</Td>
      <Td isNumeric>{totalPrice.toFixed(2)}</Td>
      <Td textAlign="right">
        <Button
          leftIcon={<AiFillDelete />}
          backgroundColor="red.500"
          paddingRight="0.4rem"
          color="#fff"
          _hover={{
            background: "red.400",
            color: "white",
          }}
          onClick={() => removeFromCart(id)}
        />
      </Td>
    </Tr>
  );
};
