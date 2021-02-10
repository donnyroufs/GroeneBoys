import React from "react";
import { useHistory } from "react-router-dom";
import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import { OrderApi } from "../../Api/Order.api";
import { useQuery } from "react-query";
import { Spinner } from "../../Components";
import { Card } from "./Components";

export const Overview: React.FC = () => {
  const history = useHistory();
  const { data, isLoading } = useQuery(
    "pending",
    async () => OrderApi.getAllPendingOrders(),
    {
      refetchInterval: 7500,
    }
  );

  const onClickNavigate = (orderId: number) => {
    history.push(`/overview/${orderId}`);
  };

  if (!data || isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <Heading fontSize="xl" mt="6rem" mb="1.5rem">
        Huidige bestellingen
      </Heading>
      {data && data.length <= 0 && (
        <Text>Geen bestellingen op dit moment.</Text>
      )}
      {data && data.length > 0 && (
        <SimpleGrid columns={4} spacing={5}>
          {data.map((ticket: any, index: number) => (
            <Card
              {...ticket.order}
              onClickNavigate={onClickNavigate}
              index={index}
              key={ticket.order.id}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};
