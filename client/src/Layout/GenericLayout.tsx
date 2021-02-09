import { useHistory } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { NavBar } from "../Components";
import { ReactNode } from "react";
import { useQuery } from "react-query";

export interface IGenericLayourProps {
  children: ReactNode;
}

export const GenericLayout: React.FC<IGenericLayourProps> = ({ children }) => {
  const history = useHistory();
  const { data } = useQuery<{ data: { firstName: string } }>("verify", {
    enabled: false,
  });

  if (!data) {
    history.push("/");
  }

  return (
    <Box paddingBottom="6rem">
      <NavBar />
      {children}
    </Box>
  );
};
