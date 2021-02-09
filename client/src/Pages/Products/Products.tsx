import { useQuery } from "react-query";
import { ProductsApi } from "../../Api";
import { GenericLayout } from "../../Layout/GenericLayout";
import { SimpleGrid } from "@chakra-ui/react";
import { Spinner } from "../../Components";
import { IProduct } from "../../Types";
import { Product } from "./Components";

export const Products: React.FC = () => {
  const { data, isLoading } = useQuery("products", ProductsApi.getAllProducts);

  return (
    <GenericLayout>
      {isLoading && <Spinner />}
      {data && data.data.length > 0 && (
        <SimpleGrid columns={3} spacing={8}>
          {data.data.map((product: IProduct) => (
            <Product {...product} key={product.id} />
          ))}
        </SimpleGrid>
      )}
    </GenericLayout>
  );
};
