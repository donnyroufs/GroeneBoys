import { useLayoutEffect, useRef } from "react";
import { PinInput, PinInputField } from "@chakra-ui/react";

export interface IInputProps {
  setSerialNumber: React.Dispatch<React.SetStateAction<string>>;
  serialNumber: string;
}

export const Input: React.FC<IInputProps> = ({
  setSerialNumber,
  serialNumber,
}) => {
  const ref = useRef();

  useLayoutEffect(() => {
    if (!ref.current) return;
    // @ts-ignore
    ref.current.focus();
  }, [ref]);

  return (
    <PinInput
      onChange={(data) => setSerialNumber(data)}
      size="lg"
      value={serialNumber}
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
