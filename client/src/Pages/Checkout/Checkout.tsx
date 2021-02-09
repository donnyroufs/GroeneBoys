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
} from "@chakra-ui/react";
import { Row } from "./Components";
import React from "react";
import { useCart } from "../../Context/useCart";
import { IProduct } from "../../Types";

export const Checkout: React.FC = () => {
  const { cart } = useCart();

  const cartWithQuantities = Object.entries(
    cart.reduce((acc, curr) => {
      // @ts-ignore
      acc[curr.id] = acc[curr.id] ? acc[curr.id] + 1 : 1;
      return acc;
    }, {})
  ).map(([k, v]) => {
    const product = cart.find((p) => p.id === Number.parseInt(k));

    return {
      ...product,
      quantity: v,
    } as IProduct & { quantity: number };
  });

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
          <TableCaption pb={6}>Uw huidige bestellingen</TableCaption>
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
            {cartWithQuantities.map(
              (product: IProduct & { quantity: number }) => (
                <Row {...product} />
              )
            )}
          </Tbody>
        </Table>
      </Box>
      <Flex as="footer" background="#fff" p={4} height="130px" mt={8}></Flex>
    </GenericLayout>
  );
};
