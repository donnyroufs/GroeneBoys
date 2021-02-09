import { Container } from "@chakra-ui/react";
import { Routes } from "./Routes";

const App: React.FC = () => {
  return (
    <Container w="100%" maxW="1000px" px={4}>
      <Routes />
    </Container>
  );
};

export default App;
