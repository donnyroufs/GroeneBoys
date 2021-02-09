import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { GenericLayout } from "../../Layout/GenericLayout";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  TableCaption,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Button,
} from "@chakra-ui/react";
import { Row } from "./Components";
import React from "react";
import { ProductWithQuantity, useCart } from "../../Context/useCart";

export const Checkout: React.FC = () => {
  const { cart, cartWithQuantities, createAndPayOrder } = useCart();
  const history = useHistory();
  const { data } = useQuery("verify", {
    enabled: false,
  });

  async function onPay() {
    // TODO: MAKE WORKING AND ALL
    await createAndPayOrder((data as any).data);
    history.push("/order");
  }

  const productsInCart = cart.length;
  const totalPrice = cartWithQuantities
    .reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0)
    .toFixed(2);

  return (
    <GenericLayout>
      <Box
        bgColor="#fff"
        borderWidth="1px"
        borderColor="gray.200"
        flex="1"
        fontWeight="500"
        display="flex"
      >
        <Table variant="striped" backgroundColor="#fff">
          <TableCaption pb={6}>
            {productsInCart > 0
              ? "Uw huidige bestellingen"
              : "U heeft nog niks gekozen"}
          </TableCaption>
          <Thead backgroundColor="green.500">
            <Tr height="3.5rem">
              <Th color="#fff">Bestel Overzicht</Th>
              <Th color="#fff" isNumeric>
                Aantal
              </Th>
              <Th color="#fff" isNumeric>
                Totaal
              </Th>
              <Th color="#fff" textAlign="right">
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartWithQuantities.map((product: ProductWithQuantity) => (
              <Row {...product} />
            ))}
          </Tbody>
        </Table>
      </Box>
      <Flex
        as="footer"
        background="#fff"
        py={4}
        px={12}
        height="130px"
        mt={8}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stat>
          <StatLabel>Collected Fees</StatLabel>
          <StatNumber>€{totalPrice}</StatNumber>
        </Stat>
        <Button
          disabled={productsInCart <= 0}
          backgroundColor="green.500"
          color="#fff"
          p="2rem 3.5rem"
          _hover={{
            background: "green.400",
            color: "white",
          }}
          onClick={onPay}
        >
          Betalen
        </Button>
      </Flex>
    </GenericLayout>
  );
};
