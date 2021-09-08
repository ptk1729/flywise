import {
  Box,
  Button,
  Flex,
  GridItem,
  Image,
  Link,
  Text,
  Center
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

function Footer() {
  // let date = new Date();
  return (
    <GridItem bg="rgba(230, 246, 255, 1)" rowSpan={12} colSpan={12}>
      <Flex
        p={["1rem", "1rem", "2rem", "3rem", "4rem"]}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <NextLink href="/">
          <Image maxH="4rem" alt="logo" src="/images/logo.svg" />
        </NextLink>
        <Box>
          <Flex flexDirection={{base:"column", md:"row" }} justifyContent="space-evenly">
            {[
              { link: "Home", to: "/" },
              { link: "About", to: "/" },
              { link: "Services", to: "/#services" },
              { link: "News", to: "/" },
              { link: "Products", to: "/" },
            ].map((i, idx) => (
              <Center
               key={idx}
              >

               <Link
                my={{ base: "2", md: "2" }}
                mx={{ base: "0", md: "4" }}
                // ={{base:"1", md:"4"}}
                href={i.to}
                _hover={{
                  color: "black",
                  bg: "blue.100",
                }}
                _focus={{
                  color: "white",
                  bg: "blue.200",
                }}
                px="4"
                py="2"
                rounded="lg"
                color="rgba(29, 29, 29, 1)"
                colorScheme="blackAlpha"
                variant="ghost"
                >
                {i.link}
              </Link>
            </Center> 
            ))}
          </Flex>
        </Box>
        <NextLink passHref href="/contact-us">
          <Button
            variant={"solid"}
            // colorScheme={'teal'}
            size={"md"}
            color="white"
            fontWeight="semibold"
            px="6"
            id="gradient"
							colorScheme="blue"
            // bg="linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)"
            // _hover={{
            // 	bg: 'linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)'
            // }}
            // _focus={{
            // 	bg: 'linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)'
            // }}
            // _active={{
            // 	bg: 'linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)'
            // }}
            mr={4}
            rounded="full"

            // leftIcon={<AddIcon />}
          >
            Contact Us
          </Button>
        </NextLink>
      </Flex>
      <hr />
      <Text textAlign="center" color="rgba(153, 153, 153, 1)" py="8">
        Copyright © {new Date().getFullYear()}
      </Text>
    </GridItem>
  );
}

export default Footer;
