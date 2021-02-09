import { Box, Heading, Text } from "@chakra-ui/react";

export interface ICardProps {
  referenceNumber: number;
  id: number;
  onClickNavigate: (orderId: number) => void;
  index: number;
}

export const Card: React.FC<ICardProps> = ({
  id,
  referenceNumber,
  onClickNavigate,
  index,
}) => (
  <Box
    bgColor={index === 0 ? "green.500" : "#fff"}
    color={index !== 0 ? "green.500" : "#fff"}
    borderWidth="1px"
    borderColor="gray.200"
    flex="1"
    flexDir="column"
    fontWeight="500"
    display="flex"
    borderRadius="6px"
    h="125px"
    justifyContent="center"
    alignItems="center"
    onClick={() => onClickNavigate(id)}
    transition="1s ease opacity"
    cursor="pointer"
    _hover={{
      opacity: ".6",
    }}
  >
    <Heading fontSize="lg" textTransform="uppercase">
      Volgnummer
    </Heading>
    <Text fontSize="4xl" fontWeight={600}>
      {referenceNumber}
    </Text>
  </Box>
);
