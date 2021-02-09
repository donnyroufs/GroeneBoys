import { useHistory } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { NavBar } from "../Components";
import { ReactNode } from "react";
import { useQuery } from "react-query";

export interface IGenericLayourProps {
  children: ReactNode;
}

export const GenericLayout: React.FC<IGenericLayourProps> = ({ children }) => {
  // TODO: Move to app
  const history = useHistory();
  const { data } = useQuery<{ data: { firstName: string } }>("verify", {
    enabled: false,
  });

  if (!data) {
    history.push("/");
  }

  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  );
};
