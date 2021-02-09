import React from "react";
import { ProductWithQuantity } from "../../Context/useCart";
import {
  Box,
  Table,
  TableCaption,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Button,
} from "@chakra-ui/react";
import { OrderApi } from "../../Api/Order.api";
import { useQuery } from "react-query";
import { Spinner } from "../../Components";
import { FaCheck } from "react-icons/fa";

export const Overview: React.FC = () => {
  const { data, isLoading } = useQuery("pending", async () =>
    OrderApi.getAllPendingOrders()
  );

  if (!data || isLoading) {
    return <Spinner />;
  }

  return (
    <Box minH="100vh">
      <Box
        mt="6rem"
        bgColor="#fff"
        borderWidth="1px"
        borderColor="gray.200"
        flex="1"
        fontWeight="500"
        display="flex"
      >
        <Table variant="striped" backgroundColor="#fff" w="100%">
          <TableCaption pb={6}>
            Huidige bestellingen van leden
            {/* {productsInCart > 0
              ? "Uw huidige bestellingen"
              : "U heeft nog niks gekozen"} */}
          </TableCaption>
          <Thead backgroundColor="green.500">
            <Tr height="3.5rem">
              <Th color="#fff">Volgnummer</Th>
              {/* <Th color="#fff" isNumeric>
                Totaal
              </Th> */}
              <Th color="#fff" textAlign="right">
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.data.map(
              ({
                id,
              }: {
                id: number;
                serialNumber: number;
                status: number;
                createdAt: number;
              }) => (
                <Tr>
                  <Td isNumberic>{id}</Td>
                  <Td textAlign="right">
                    <Button
                      leftIcon={<FaCheck />}
                      backgroundColor="blue.500"
                      paddingRight="0.4rem"
                      color="#fff"
                      _hover={{
                        background: "blue.400",
                        color: "white",
                      }}
                    />
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};
