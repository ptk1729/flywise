import { useState } from "react";
import {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "../content/firebase";
import React from "react";
import { useRouter } from "next/router";
import Footer from "./common/footer";
import Image from "next/image";
import Navbar from "./common/navbar";
import NLink from "next/link";
import pngg from "../public/images/icons/Group.png";
import classes from "../styles/whatsappbtn.module.css";
import ComingSoon from "../public/images/icons/confirm.png";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack,
  Button,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import OtpInput from "react-otp-input";

const Otp = (props) => {
  const [otp, setOtp] = useState(0);
const router=useRouter();
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const configureRecaptcha = () => {
    console.log(auth);
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      auth
    );
  };
  const onSignInSubmit = (userPhone) => {
    e.preventDefault();
    configureRecaptcha();
    const phoneNumber = "+91" + userPhone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("send");
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Error; SMS not sent
        // ...
      });
  };
  const onSubmitOtp = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        alert("User verified");
        router.push('/success');
        // ...
      })
      .catch((error) => {
        console.log(error);
       alert("Wrong OTP");
        // ...
      });
  };

  return (
    <div>
      <Box
        // w={{base:"100vw", md:''}}
        maxW={"100vw"}
      >
        <Grid
          overflow="hidden"
          maxW="100vw"
          templateRows="repeat(12, 1fr)"
          templateColumns="repeat(12, 1fr)"
        >
          <GridItem rowSpan={12} colSpan={12}>
            <Navbar outline="" />
          </GridItem>
          <GridItem
            rowSpan={12}
            colSpan={12}
            py={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
            pl={["0.4rem", "1rem", "3rem", "6rem", "12rem"]}
            pr={["0.4rem", "1rem", "1rem", "2rem", "12rem"]}
          >
            <div className={classes.pnggg}>
              <Image objectFit="cotain" src={pngg} />

              <Image src={ComingSoon} h="40px" w="100px" />
              <div>
              <PinInput size={"xs","sm","md","lg"} variant="outline" type="number"  onComplete={(value)=>setOtp(value)} autofocus  >
                <PinInputField marginRight="10px" marginTop="20px" borderColor="grey" />
                <PinInputField marginRight="10px" borderColor="grey" />
                <PinInputField marginRight="10px" borderColor="grey"/>
                <PinInputField marginRight="10px" borderColor="grey"/>
                <PinInputField marginRight="10px" borderColor="grey"/>
                <PinInputField borderColor="grey"/>
              </PinInput>
              </div>
              <Button
                color="white"
                px="8"
                mb="4"
                mt="8"
                bg="rgba(13, 179, 251, 1)"
                _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                ml="auto"
                mr="auto"
                onClick={onSubmitOtp}
              >
                Enter OTP
              </Button>
            </div>
          </GridItem>

          <Footer />
        </Grid>
      </Box>
    </div>
  );
};
export default Otp;
