import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./QueryClient";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Theme";
import { CartProvider } from "./Context/useCart";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ChakraProvider theme={theme}>
        <CartProvider>
          <App />
        </CartProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
