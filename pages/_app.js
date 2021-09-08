import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";
import Parentt from "../content/parent";

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Parentt>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />{" "}
      </ChakraProvider>
    </Parentt>
  );
}

export default MyApp;
