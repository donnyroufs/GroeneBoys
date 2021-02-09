import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Box, Flex, Heading, Button, Text } from "@chakra-ui/react";
import { useQueryClient } from "react-query";
import { useCart } from "../../Context/useCart";

export const Order: React.FC = () => {
  const { resetCart, orderId } = useCart();
  const history = useHistory();
  const queryClient = useQueryClient();

  useEffect(() => {
    let timeId = setInterval(() => {
      onNext();
    }, 10000);

    return () => clearInterval(timeId);
  }, [onNext]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onNext() {
    queryClient.clear();
    resetCart();
    history.push("/");
  }

  return (
    <Flex justify="center" align="center" h="100vh" w="100%">
      <Box
        position="relative"
        bgColor="#fff"
        borderWidth="1px"
        borderColor="gray.200"
        minH="425px"
        flex="1"
        minWidth="600px"
        maxWidth="700px"
        fontWeight="500"
        display="flex"
      >
        <Flex margin="auto" flexDir="column" textAlign="center">
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="85px"
            backgroundColor="green.500"
          />

          <Heading mt="3.5rem">Bedankt voor je bestelling!</Heading>
          <Text fontSize="2xl" mt={4}>
            Jouw Ordernummer:
          </Text>
          <Text fontWeight="bold" fontSize="lg">
            {orderId}
          </Text>
          <Button
            backgroundColor="green.500"
            color="#fff"
            margin="1.5rem auto 0 auto"
            w="300px"
            p="1.5rem"
            _hover={{
              background: "green.400",
              color: "white",
            }}
            onClick={onNext}
          >
            Volgende Klant
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
