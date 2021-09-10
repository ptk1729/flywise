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
import InstragramIcon from "@material-ui/icons/Instagram";
import FaceBookIcon from "@material-ui/icons/Facebook";
import YoutubeIcon from "@material-ui/icons/YouTube"
import LinkedinIcon from "@material-ui/icons/LinkedIn"

function Footer() {
  // let date = new Date();
  return (
    <GridItem bg="rgba(230, 246, 255, 1)" rowSpan={12} colSpan={12}>
      <Flex
        p={["1rem", "1rem", "2rem", "2rem", "2rem"]}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      > 
        <Flex flexDirection="column" alignItems="center">
        <NextLink href="/">
          <Image maxH="4rem" alt="logo" src="/images/logo.svg" />
         
        </NextLink>
        <Text textAlign="center"> 5600 Monaghan way, Antioch <br/> California, 94531</Text>
        </Flex>
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
            mr={0}
            rounded="full"

            // leftIcon={<AddIcon />}
          >
            Contact Us
          </Button>
        </NextLink>
      </Flex>
      <hr />
      
      <Text textAlign="center" fontSize="20px" color="rgba(123, 123, 123, 1)" py="2">
      <Link href="https://www.youtube.com/channel/UCBm5Y057pEW1jLjJhnoHcHA"><YoutubeIcon fontSize="large" /></Link>
      <Link href="https://www.instagram.com/flywise_edu/"><InstragramIcon fontSize="large"/></Link>
        <FaceBookIcon fontSize="large"/>
       <Link href="https://www.linkedin.com/company/flywiseoverseas"> <LinkedinIcon fontSize="large"/></Link>
    </Text>
       
     
     <Text textAlign="center" color="rgba(153, 153, 153, 1)" py="3">
        Copyright © {new Date().getFullYear()}
      </Text>
    </GridItem>
  );
}

export default Footer;
