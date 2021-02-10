import {
  FormLabel,
  FormHelperText,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { Input } from "../Input/Input";

export interface IFormProps {
  onSubmit: () => void;
  setSerialNumber: React.Dispatch<React.SetStateAction<string>>;
  serialNumber: string;
}

export const Form: React.FC<IFormProps> = ({
  onSubmit,
  serialNumber,
  setSerialNumber,
}) => {
  return (
    <FormControl>
      <FormLabel fontSize="2rem" fontWeight="600" marginBottom="2rem">
        Eten Bestellen
      </FormLabel>
      <Input serialNumber={serialNumber} setSerialNumber={setSerialNumber} />
      <FormHelperText>Vul uw lidnummer in</FormHelperText>
      <Button
        disabled={serialNumber.length < 6}
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
