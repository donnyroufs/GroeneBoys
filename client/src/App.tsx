import { Container } from "@chakra-ui/react";
import { GenericLayout } from "./Layout/GenericLayout";
import { Routes } from "./Routes";

const App: React.FC = () => {
  return (
    <Container minW="80%" maxW="80%">
      <GenericLayout>
        <Routes />
      </GenericLayout>
    </Container>
  );
};

export default App;
