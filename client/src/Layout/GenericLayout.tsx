import { Box } from "@chakra-ui/react";
import { NavBar } from "../Components";
import { ReactNode } from "react";

export interface IGenericLayourProps {
  children: ReactNode;
}

export const GenericLayout: React.FC<IGenericLayourProps> = ({ children }) => (
  <Box>
    <NavBar />
    {children}
  </Box>
);
