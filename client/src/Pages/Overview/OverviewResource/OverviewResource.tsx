import { useQuery, useQueryClient } from "react-query";
import { useRouteMatch, useHistory } from "react-router-dom";
import { GenericLayout } from "../../../Layout/GenericLayout";
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
import { OrderApi } from "../../../Api";
import { useMutation } from "react-query";

export const OverviewResource: React.FC = () => {
  const queryClient = useQueryClient();
  const history = useHistory();
  const match = useRouteMatch();
  const { data } = useQuery("pending", {
    enabled: false,
  });
  const mutation = useMutation(
    ({ id, status }: { id: number; status: number }) =>
      OrderApi.updateOrder({ id, status })
  );

  // @ts-ignore
  const currentOrder = data.find(
    // @ts-ignore
    ({ order }: any) => order.id === Number.parseInt(match.params.id)
  );

  const onClickCompleteOrder = () => {
    mutation.mutate(
      // @ts-ignore
      { id: match.params.id, status: 2 },
      {
        onSettled: () => {
          queryClient.refetchQueries("pending");
          history.push("/overview");
        },
      }
    );
  };

  const onBack = () => {
    history.goBack();
  };

  return (
    <Box mt="6rem">
      <Button
        backgroundColor="green.500"
        color="#fff"
        mb={6}
        _hover={{
          background: "green.400",
          color: "white",
        }}
        onClick={onBack}
      >
        Ga Terug
      </Button>
      <Box
        bgColor="#fff"
        borderWidth="1px"
        borderColor="gray.200"
        flex="1"
        fontWeight="500"
        display="flex"
      >
        <Table variant="striped" backgroundColor="#fff">
          <TableCaption pb={6}>Huidige bestelling</TableCaption>
          <Thead backgroundColor="green.500">
            <Tr height="3.5rem">
              <Th color="#fff">Bestel Overzicht</Th>
              <Th color="#fff" isNumeric>
                Aantal
              </Th>
              <Th color="#fff" isNumeric>
                Totaal
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* @ts-ignore */}
            {currentOrder.products.map((product) => (
              <Row {...product} key={product.id} />
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
          <StatLabel>Status</StatLabel>
          <StatNumber>
            {currentOrder.order.status === 1 ? "Betaald" : "Er ging iets fout."}
          </StatNumber>
        </Stat>
        <Button
          backgroundColor="green.500"
          color="#fff"
          p="2rem 3.5rem"
          _hover={{
            background: "green.400",
            color: "white",
          }}
          onClick={onClickCompleteOrder}
        >
          Afronden
        </Button>
      </Flex>
    </Box>
  );
};
