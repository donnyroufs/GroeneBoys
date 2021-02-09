import { Box, Flex, HStack } from "@chakra-ui/react";
import { Form } from "./Components";
import { useHome } from "./Hooks";

export const Home: React.FC = () => {
  const formProps = useHome();

  return (
    <Flex justify="center" align="center" h="100vh" w="100%">
      <Box
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
        <HStack margin="auto">
          {/* @ts-ignore */}
          <Form {...formProps} />
        </HStack>
      </Box>
    </Flex>
  );
};
