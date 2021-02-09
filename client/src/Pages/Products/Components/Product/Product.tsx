import React from "react";
import { Image, Box, Text } from "@chakra-ui/react";
import { IProduct } from "../../../../Types";
import { useCart } from "../../../../Context/useCart";

const IMAGE_URL = "http://localhost:5000/static/";

export const Product: React.FC<IProduct> = ({
  id,
  image,
  name,
  price,
  createdAt,
  updatedAt,
}) => {
  const { addToCart } = useCart();

  return (
    <Box
      boxShadow="sm"
      key={id}
      backgroundColor="#fff"
      borderRadius="12px"
      cursor="pointer"
      transition=".3s ease opacity"
      _hover={{
        opacity: 0.8,
      }}
      onClick={() =>
        addToCart({ id, image, name, price, createdAt, updatedAt })
      }
    >
      <Image
        src={IMAGE_URL + image}
        alt="Produkt foto"
        width="100%"
        objectFit="cover"
        borderTopRadius="12px"
        height="250px"
      />
      <Box p={6}>
        <Text fontWeight="bold">{name}</Text>
        <Text>€ {price}</Text>
      </Box>
    </Box>
  );
};
