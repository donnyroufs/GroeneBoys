import { PinInput, PinInputField } from "@chakra-ui/react";

export interface IInputProps {
  setSerialKey: React.Dispatch<React.SetStateAction<string>>;
  serialKey: string;
}

export const Input: React.FC<IInputProps> = ({ setSerialKey, serialKey }) => (
  <PinInput onChange={(data) => setSerialKey(data)} size="lg" value={serialKey}>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
);
