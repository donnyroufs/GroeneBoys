import { useLayoutEffect, useRef } from "react";
import { PinInput, PinInputField } from "@chakra-ui/react";

export interface IInputProps {
  setSerialKey: React.Dispatch<React.SetStateAction<string>>;
  serialKey: string;
}

export const Input: React.FC<IInputProps> = ({ setSerialKey, serialKey }) => {
  const ref = useRef();

  useLayoutEffect(() => {
    if (!ref.current) return;
    // @ts-ignore
    ref.current.focus();
  }, [ref]);

  return (
    <PinInput
      onChange={(data) => setSerialKey(data)}
      size="lg"
      value={serialKey}
    >
      {/* @ts-ignore */}
      <PinInputField ref={ref} />
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
};
