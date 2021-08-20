import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
})

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />{' '}
		</ChakraProvider>
	);
}

export default MyApp;
