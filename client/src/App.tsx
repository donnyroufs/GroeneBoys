import { Container } from "@chakra-ui/react";
import { Routes } from "./Routes";

const App: React.FC = () => {
  return (
    <Container minW="80%" maxW="80%">
      <Routes />
    </Container>
  );
};

export default App;
