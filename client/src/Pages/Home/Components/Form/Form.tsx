import {
  FormLabel,
  FormHelperText,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { Input } from "../Input/Input";

export interface IFormProps {
  onSubmit: () => void;
  setSerialKey: React.Dispatch<React.SetStateAction<string>>;
  serialKey: string;
}

export const Form: React.FC<IFormProps> = ({
  onSubmit,
  serialKey,
  setSerialKey,
}) => {
  return (
    <FormControl>
      <FormLabel fontSize="2rem" fontWeight="600" marginBottom="2rem">
        Eten Bestellen
      </FormLabel>
      <Input serialKey={serialKey} setSerialKey={setSerialKey} />
      <FormHelperText>Vul uw lidnummer in</FormHelperText>
      <Button
        disabled={serialKey.length < 6}
        onClick={onSubmit}
        backgroundColor="green.500"
        color="#fff"
        textTransform="uppercase"
        w="100%"
        marginTop="2rem"
        _hover={{
          background: "green.400",
          color: "white",
        }}
      >
        Start
      </Button>
    </FormControl>
  );
};
