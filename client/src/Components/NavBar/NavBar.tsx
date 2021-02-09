import { useHistory } from "react-router-dom";
import { Flex, Button, Text, Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { useQuery, useQueryClient } from "react-query";
import { Spinner } from "../Spinner/Spinner";
import { useCart } from "../../Context/useCart";

// TODO: Should be a protected component
export const NavBar: React.FC = () => {
  const history = useHistory();
  const { cart, resetCart } = useCart();
  const queryClient = useQueryClient();
  const { data } = useQuery<{ data: { firstName: string } }>("verify", {
    enabled: false,
  });

  if (!data) {
    return <Spinner />;
  }

  function onStop() {
    queryClient.removeQueries("verify");
    resetCart();
    history.push("/");
  }

  const totalProductsInCart = cart.length;

  return (
    <Flex flex={1} justifyContent="space-between" my="6rem">
      <Button
        leftIcon={<ArrowBackIcon />}
        backgroundColor="red.500"
        color="#fff"
        _hover={{
          background: "red.400",
          color: "white",
        }}
        onClick={onStop}
      >
        Stoppen
      </Button>

      <Flex justifyContent="center" align-items="center">
        <Text
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={1}
          mr={4}
        >
          Hallo, {data!.data.firstName}
        </Text>
        <Button
          position="relative"
          leftIcon={<FaShoppingCart />}
          backgroundColor="green.500"
          color="#fff"
          paddingRight=".5rem"
          _hover={{
            background: "green.400",
            color: "white",
          }}
        >
          <Box
            borderRadius="50%"
            color="#fff"
            fontSize=".9rem"
            paddingTop=".21rem"
            paddingLeft=".07rem"
            position="absolute"
            h="24px"
            w="24px"
            top="-12px"
            right="-12px"
            background="green.700"
          >
            {totalProductsInCart}
          </Box>
        </Button>
      </Flex>
    </Flex>
  );
};
