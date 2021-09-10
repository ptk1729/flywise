import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Progress,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import Navbar from "../common/navbar";
import { Redirect } from "next";
import { useRouter } from 'next/router';

import {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "../../content/firebase";

function One() {
	const router=useRouter();
	const configureRecaptcha = () => {
		console.log(auth);
		window.recaptchaVerifier = new RecaptchaVerifier(
		  "sign-in-button",

		  {	callback: (response) => {
			  // reCAPTCHA solved, allow signInWithPhoneNumber.
			  onSignInSubmit();
			},
		  },
		  auth
		);
	  };
  const onSignInSubmit = () => {
  
    configureRecaptcha();
    const phoneNumber ="+91"+ userPhone;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("send");
		router.push('/otp');
		
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Error; SMS not sent
        // ...
      });
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  const [country, setCountry] = useState("USA");
  const [course, setCourse] = useState(
    "MS Computer science / Software engineering (Intensive coding)"
  );
  const [pe, setPe] = useState(1);
  const [greTraining, setGreTraining] = useState("yes");
  const [session, setSession] = useState("Spring 2022");
  const [greQuant, setGreQuant] = useState(0);
  const [greVerbal, setGreVerbal] = useState(0);
  const [ieltsToefl, setIeltsToefl] = useState(0);
  const [workEx, setWorkEx] = useState("less than 2 years");
  const [cgpa, setCgpa] = useState(0);
  const [backlogs, setBacklogs] = useState("");
  const [clgUni, setClgUni] = useState("");
  const [budget, setBudget] = useState("Under 20 Lakhs");
  const [fundMasters, setFundMasters] = useState("Secured Loan");
  const [tnC, setTnC] = useState(false);

  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  function isEmail(email) {
    let regexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(String(email).toLowerCase());
  }
  function evaluateProfilePost(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    let formData = new FormData();

    formData.append("whichCountry", country);
    formData.append("courses", course);
    formData.append("GreQuantScore", greQuant);
    formData.append("GreVerbalScore", greVerbal);
    formData.append("ielts_toefl", ieltsToefl);
    formData.append("GreTraining", greTraining);
    formData.append("workExperience", workEx);
    formData.append("noofbacklogs", backlogs);
    formData.append("cgpa", cgpa);
    formData.append("college", clgUni);
    formData.append("budget", budget);
    formData.append("fund", fundMasters);
    formData.append("name", username);
    formData.append("email", userEmail);
    formData.append("mobileNo", userPhone);
    formData.append("session", session);

    axios({
      url: "https://flywisebackend.herokuapp.com/api/user/add",
      method: "POST",
      headers: {
        contentType: "applications/json",
      },
      // body: formData
      data: {
        whichCountry: country,
        courses: course,
        GreQuantScore: greQuant,
        GreVerbalScore: greVerbal,
        ielts_toefl: ieltsToefl,
        GreTraining: greTraining,
        workExperience: workEx,
        noofbacklogs: backlogs,
        cgpa: cgpa,
        college: clgUni,
        budget: budget,
        fund: fundMasters,
        name: username,
        email: userEmail,
        mobileNo: userPhone,
        session: session,
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.error === "ALl fields required") {
          setError("All fields are required please try again");
        } else {
          setSuccess("Profile Submitted");
          console.log(" ot success");
		  onSignInSubmit();
          
          
        }
      })
      .catch((err) => {
		  if(err){
			  console.log(err);
        console.log(err.response.data.error);
        if (
          err.response.data.error ==
          "This user has already applied for profile evaluation"
        ) {
          setError("You have already applied");
        } else {
          setError("There was an error");
        }
	}
      })
      .finally(() => setLoading(false));
  }

  return (
    <div>
      {redirect ? (
        <Redirect to="/" />
      ) : (
        <Box>
          <title>Profile Evaluation</title>
          <Navbar outline="Profile Evaluation" />
          <Progress
            boxShadow="md"
            color="#0DB3FB"
            bg="#B8E1F3"
            h="2"
            value={(pe / 7) * 100}
          />

          <Grid
            px={["0", "0", "0", "0", "3rem"]}
            overflow="hidden"
            maxW="100vw"
            templateRows="repeat(12, 1fr)"
            templateColumns="repeat(15, 1fr)"
          >
            {pe === 1 && (
              <React.Fragment>
                {" "}
                <GridItem
                  py={["0.4rem", "1rem", "2rem", "3rem", "3rem"]}
                  rowSpan={12}
                  colSpan={15}
                  // bg={bg}
                >
                  <Heading color="rgba(19, 43, 80, 1)" textAlign="center">
                    Which country are you planning to go?
                  </Heading>
                </GridItem>
                {["USA", "Australia", "Canada", "UK", "Other"].map((i, idx) => (
                  <GridItem
                    onClick={() => setCountry(i)}
                    mt="4"
                    mb={i === "Other" ? "32" : "6"}
                    key={idx}
                    px={["4rem", "3rem", "2rem", "0rem", "0rem"]}
                    rowSpan={15}
                    colSpan={[30, 30, 6, 3, 3]}
                    // bg={bg}
                  >
                    <Center>
                      <Box
                        transition="all 0.3s"
                        bg={
                          i === country
                            ? "linear-gradient(311.3deg, #6ADBDB 0%, #0DB3FB 97.24%)"
                            : "linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 97.24%)"
                        }
                        rounded="lg"
                        p="4"
                        mx="3"
                        border={
                          i === country
                            ? "4px solid rgba(13, 179, 251, 1)"
                            : "4px solid white"
                        }
                        _hover={{ boxShadow: "base" }}
                        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)"
                        key={idx}
                      >
                        <Center>
                          <Image
                            maxH="135px"
                            src={`images/${i.toLocaleLowerCase()}_flag.png`}
                            alt="country"
                          />
                        </Center>
                        <Text
                          transition="all 0.2s ease-out"
                          color={i === country ? "white" : "black"}
                          textAlign="center"
                          fontSize="2xl"
                          fontWeight="semibold"
                          mt="4"
                        >
                          {i}
                        </Text>
                      </Box>
                    </Center>
                  </GridItem>
                ))}
                <GridItem rowSpan={12} colSpan={15}>
                  <Center>
                    <Flex
                      mt="16"
                      justifyContent="center"
                      position="fixed"
                      bottom="0vh"
                      width={
                        ("fit-content", "fit-content", "fit-content", "100%")
                      }
                      background="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9259259259259259) 80%, rgba(255,255,255,0) 100%)"
                    >
                      {/* <Button
										mt="16"
										color="white"
										px="8"
										mb="4"
										bg="rgba(13, 179, 251, 1)"
										_hover={{ bg: 'rgba(13, 179, 251, 0.9)' }}
										_active={{ bg: 'rgba(13, 179, 251, 0.7)' }}
										onClick={() => setPe(1)}
									>
										Previous
									</Button> */}
                      <Button
                        color="white"
                        px="8"
                        mb="4"
                        mt="4"
                        bg="rgba(13, 179, 251, 1)"
                        _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                        _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                        onClick={() => setPe(2)}
                        // ml="4"
                        // transformOrigin="100% 100%"
                      >
                        Next
                      </Button>
                    </Flex>
                  </Center>
                </GridItem>{" "}
              </React.Fragment>
            )}
            {pe === 2 && (
              <React.Fragment>
                {" "}
                <GridItem
                  p={["0.4rem", "1rem", "2rem", "3rem", "2rem"]}
                  rowSpan={12}
                  colSpan={15}
                  // bg={bg}
                >
                  <Heading color="rgba(19, 43, 80, 1)" textAlign="center">
                    Are you planning to pursue masters in any of the below
                    courses?
                  </Heading>
                  {/* <Text color="rgba(19, 43, 80, 1)" textAlign="center" fontSize="xl" pt="2">
								You can select multiple courses
							</Text> */}
                </GridItem>
                {[
                  "MS Computer science / Software engineering (Intensive coding)",
                  "MS Data science (Coding + statistic skills)",
                  "MS Business analytics (Minimal coding + analytic skills)",
                  "MS Information systems (Minimal coding + communication skills)",
                  "Other",
                ].map((i, idx) => (
                  <GridItem
                    id="griditem"
                    onClick={() => setCourse(i)}
                    mt="4"
                    mb={i === "Other" ? "32" : "6"}
                    key={idx}
                    px={["4rem", "3rem", "2rem", "0rem", "0rem"]}
                    rowSpan={15}
                    colSpan={[15, 15, 7, 5, 3]}
                    // bg={bg}
                  >
                    <Center>
                      <Box
                        w="94%"
                        // mx="10%"
                        transition="all 0.3s"
                        bg={
                          i === course
                            ? "linear-gradient(311.3deg, #6ADBDB 0%, #0DB3FB 97.24%)"
                            : "linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 97.24%)"
                        }
                        rounded="lg"
                        px="4"
                        pt="4"
                        pb={{ base: "8", md: "4" }}
                        border={
                          i === course
                            ? "4px solid rgba(13, 179, 251, 1)"
                            : "4px solid white"
                        }
                        _hover={{ boxShadow: "base" }}
                        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)"
                        key={idx}
                      >
                        <Center>
                          <Image
                            mt="4"
                            maxH="4rem"
                            src={
                              i === course
                                ? `/images/course_icon_white${idx + 1}.png`
                                : `/images/course_icon${idx + 1}.png`
                            }
                            alt="country"
                          />
                        </Center>
                        <Text
                          minH="6rem"
                          transition="all 0.2s ease-out"
                          color={i === course ? "white" : "black"}
                          textAlign="center"
                          fontSize="lg"
                          fontWeight="normal"
                          mt="4"
                        >
                          {i.split(" (")[0]}
                          {i.split(" (")[1] && (
                            <Text fontWeight="semibold">
                              ({i.split(" (")[1]}
                            </Text>
                          )}
                        </Text>
                      </Box>
                    </Center>
                  </GridItem>
                ))}
                <GridItem rowSpan={15} colSpan={15}>
                  <Center>
                    <Flex
                      mt="16"
                      className=""
                      position="fixed"
                      justifyContent="center"
                      bottom="0vh"
                      width={
                        ("fit-content", "fit-content", "fit-content", "100%")
                      }
                      background="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9259259259259259) 80%, rgba(255,255,255,0) 100%)"
                    >
                      <Button
                        color="white"
                        px="8"
                        mb="4"
                        mt="4"
                        bg="rgba(13, 179, 251, 1)"
                        _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                        _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                        onClick={() => setPe(1)}
                      >
                        Previous
                      </Button>
                      <Button
                        color="white"
                        px="8"
                        mb="4"
                        mt="4"
                        bg="rgba(13, 179, 251, 1)"
                        _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                        _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                        onClick={() => setPe(3)}
                        ml="4"
                      >
                        Next
                      </Button>
                    </Flex>
                  </Center>
                  {/* <Button
									mt="16"
									color="white"
									px="8"
									mb="4"
									bg="rgba(13, 179, 251, 1)"
									onClick={() => setPe(3)}
									_hover={{ bg: 'rgba(13, 179, 251, 0.9)' }}
									_active={{ bg: 'rgba(13, 179, 251, 0.7)' }}
                  >
									Next
								</Button> */}
                </GridItem>{" "}
              </React.Fragment>
            )}
            {pe === 3 && (
              <React.Fragment>
                {" "}
                <GridItem
                  px={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
                  py={["0.4rem", "1.5rem", "1rem", "1.5rem", "1.5rem"]}
                  rowSpan={12}
                  colSpan={15}
                  // bg={bg}
                >
                  <Heading
                    fontSize="4xl"
                    color="rgba(19, 43, 80, 1)"
                    textAlign="center"
                  >
                    Please enter your TEST scores
                  </Heading>
                </GridItem>
                <GridItem
                  // id="griditem"
                  py={4}
                  px={["2rem", "1.5rem", "1rem", "1.5rem", "2rem"]}
                  rowSpan={7}
                  colSpan={[15, 15, 7, 7, 7]}
                  // bg={bg}
                >
                  <Text
                    fontSize={["xl", "xl", "2xl", "2xl", "3xl"]}
                    fontWeight="500"
                  >
                    GRE Quant score
                    <Link _hover={{ textDecoration: "none" }} color="red">
                      
                    </Link>
                  </Text>

                  <Text
                    color="rgba(125, 125, 125, 1)"
                    py="4"
                  >{`Enter your score `}</Text>
                  <NumberInput
                    value={greQuant}
                    onChange={(e) => setGreQuant(e)}
                    focusBorderColor="#25BAFB"
                    bg="rgba(240, 240, 240, 1)"
                    maxW="50%"
                    min={130}
                    max={170}
                    placeholder="Enter score"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </GridItem>
                <GridItem
                  // id="griditem"
                  py={4}
                  px={["2rem", "1.5rem", "1rem", "1.5rem", "2rem"]}
                  rowSpan={7}
                  colSpan={[15, 15, 7, 7, 7]}
                  // bg={bg}
                >
                  <Text
                    fontSize={["xl", "xl", "2xl", "2xl", "3xl"]}
                    fontWeight="500"
                  >
                    GRE Verbal score
                    <Link _hover={{ textDecoration: "none" }} color="red">
                      
                    </Link>
                  </Text>

                  <Text
                    color="rgba(125, 125, 125, 1)"
                    py="4"
                  >{`Enter your score`}</Text>
                  <NumberInput
                    value={greVerbal}
                    onChange={(e) => setGreVerbal(e)}
                    min={130}
                    max={170}
                    focusBorderColor="#25BAFB"
                    bg="rgba(240, 240, 240, 1)"
                    maxW="50%"
                    placeholder="Enter score"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </GridItem>
                <GridItem
                  // id="griditem"
                  pt={4}
                  px={["2rem", "1.5rem", "1rem", "1.5rem", "2rem"]}
                  rowSpan={7}
                  colSpan={[15, 15, 7, 7, 7]}
                  // bg={bg}
                >
                  <Text
                    fontSize={["xl", "xl", "2xl", "2xl", "3xl"]}
                    fontWeight="500"
                  >
                    IELTS/TOEFL
                    <Link _hover={{ textDecoration: "none" }} color="red">
                      
                    </Link>
                  </Text>

                  <Text
                    color="rgba(125, 125, 125, 1)"
                    py="4"
                  >{`Enter you score`}</Text>
                  <NumberInput
                    value={ieltsToefl}
                    onChange={(e) => setIeltsToefl(e)}
                    max={9}
                    min={5}
                    focusBorderColor="#25BAFB"
                    bg="rgba(240, 240, 240, 1)"
                    maxW="50%"
                    placeholder="Enter score"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </GridItem>
                <GridItem
                  // key={i}
                  // id="griditem"
                  mb={{ base: "32", md: "8" }}
                  pt={2}
                  // mb={{base:"16", md:"16"}}
                  px={["2rem", "1.5rem", "1rem", "1.5rem", "2rem"]}
                  rowSpan={7}
                  colSpan={[15, 15, 7, 7, 7]}
                  // bg={bg}
                >
                  <Text
                    lineHeight="1.2"
                    fontSize={["xl", "xl", "2xl", "2xl", "3xl"]}
                    fontWeight="500"
                  >
                    Do you need GRE/IELTS/TOEFL training?
                    <Link _hover={{ textDecoration: "none" }} color="red">
                      *
                    </Link>
                  </Text>

                  <RadioGroup
                    mt="2"
                    onChange={setGreTraining}
                    value={greTraining}
                    defaultValue="yes"
                  >
                    <Stack spacing={2}>
                      <Radio size="lg" value="yes" colorScheme="blue">
                        Yes
                      </Radio>
                      <Radio size="lg" value="no" colorScheme="blue">
                        No
                      </Radio>
                      <Radio size="lg" value="maybe" colorScheme="blue">
                        Maybe
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </GridItem>
                <GridItem rowSpan={15} colSpan={15}>
                  <Center>
                    <Flex
                      mt="16"
                      position="fixed"
                      bottom="0vh"
                      justifyContent="center"
                      width={
                        ("fit-content", "fit-content", "fit-content", "100%")
                      }
                      background="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9259259259259259) 80%, rgba(255,255,255,0) 100%)"
                    >
                      <Button
                        color="white"
                        px="8"
                        mb="4"
                        mt="4"
                        bg="rgba(13, 179, 251, 1)"
                        _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                        _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                        onClick={() => setPe(2)}
                      >
                        Previous
                      </Button>
                      <Button
                        isDisabled={!greQuant || !greVerbal || !ieltsToefl}
                        color="white"
                        px="8"
                        mb="4"
                        mt="4"
                        bg="rgba(13, 179, 251, 1)"
                        _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                        _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                        onClick={() => setPe(4)}
                        ml="4"
                      >
                        Next
                      </Button>
                    </Flex>
                    {/* <Button
									mt="8"
									color="white"
									px="8"
									mb="4"
									bg="rgba(13, 179, 251, 1)"
									onClick={() => setPe(4)}
									_hover={{ bg: 'rgba(13, 179, 251, 0.9)' }}
									_active={{ bg: 'rgba(13, 179, 251, 0.7)' }}
								>
									Next
								</Button> */}
                  </Center>
                </GridItem>{" "}
              </React.Fragment>
            )}
            {pe === 4 && (
              <React.Fragment>
                {" "}
                <GridItem
                  px={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
                  py={["0.4rem", "1.5rem", "1rem", "1.5rem", "2rem"]}
                  rowSpan={12}
                  colSpan={15}
                  // bg={bg}
                >
                  <Heading
                    fontSize="4xl"
                    color="rgba(19, 43, 80, 1)"
                    textAlign="center"
                  >
                    Please answer the questions below
                  </Heading>
                </GridItem>
                <GridItem
                  // id="griditem"
                  py={8}
                  px={["4rem", "3rem", "2rem", "3rem", "4rem"]}
                  rowSpan={7}
                  colSpan={[15, 15, 7, 7, 7]}
                  // bg={bg}
                >
                  <Text pb="4" fontSize="3xl" fontWeight="500">
                    Any work experience?
                    <Link _hover={{ textDecoration: "none" }} color="red">
                      *
                    </Link>
                  </Text>

                  {/* <Text
								color="rgba(125, 125, 125, 1)"
								py="4"
							>{`Please write "Not taken yet" if you are yet to take GRE and "Not applicable" if you don't want to take GRE test`}</Text> */}
                  <RadioGroup
                    mt="2"
                    onChange={setWorkEx}
                    value={workEx}
                    defaultValue="less than 2 years"
                  >
                    <Stack spacing={2}>
                      <Radio size="lg" value="no" colorScheme="blue">
                        No experience
                      </Radio>
                      <Radio
                        size="lg"
                        value="less than 2 years"
                        colorScheme="blue"
                      >
                        Yes, less than 2 years
                      </Radio>
                      <Radio
                        size="lg"
                        value="more than 2 years"
                        colorScheme="blue"
                      >
                        More than 2 years
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  {/* <Input
								value={workEx}
								onChange={e => setWorkEx(e.target.value)}
								py="6"
								focusBorderColor="#25BAFB"
								bg="rgba(240, 240, 240, 1)"
								maxW="50%"
								placeholder="Enter score"
							/> */}
                </GridItem>
                <GridItem
                  // id="griditem"
                  py={8}
                  px={["4rem", "3rem", "2rem", "3rem", "4rem"]}
                  rowSpan={7}
                  colSpan={[15, 15, 7, 7, 7]}
                  // bg={bg}
                >
                  <Text pb="4" fontSize="3xl" fontWeight="500">
                    Undergrad (B.tech) College/University
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                      fontSize="3xl"
                      fontWeight="500"
                      color="red"
                    >
                      *
                    </Link>{" "}
                  </Text>

                  {/* <Text
								color="rgba(125, 125, 125, 1)"
								py="4"
							>{`Please write "Not taken yet" if you are yet to take GRE and "Not applicable" if you don't want to take GRE test`}</Text> */}
                  <Input
                    value={clgUni}
                    onChange={(e) => setClgUni(e.target.value)}
                    py="6"
                    focusBorderColor="#25BAFB"
                    bg="rgba(240, 240, 240, 1)"
                    maxW="50%"
                    placeholder="Enter Name"
                  />
                </GridItem>
                <GridItem
                  // id="griditem"
                  py={8}
                  px={["4rem", "3rem", "2rem", "3rem", "4rem"]}
                  rowSpan={7}
                  colSpan={[15, 15, 7, 7, 7]}
                  // bg={bg}
                >
                  <Text pb="4" fontSize="3xl" fontWeight="500">
                    Number of backlogs
                    <Link _hover={{ textDecoration: "none" }} color="red">
                      *
                    </Link>
                  </Text>
                  {/* <Text
								color="rgba(125, 125, 125, 1)"
								py="4"
							>{`Please write "Not taken yet" if you are yet to take GRE and "Not applicable" if you don't want to take GRE test`}</Text> */}
                  <Input
                    value={backlogs}
                    onChange={(e) => setBacklogs(e.target.value)}
                    py="6"
                    focusBorderColor="#25BAFB"
                    bg="rgba(240, 240, 240, 1)"
                    maxW="50%"
                    placeholder="Enter"
                    type="number"
                  />
                </GridItem>
                <GridItem
                  // key={i}
                  // id="griditem"
                  py={8}
                  mb="20"
                  px={["4rem", "3rem", "2rem", "3rem", "4rem"]}
                  rowSpan={7}
                  colSpan={[15, 15, 7, 7, 7]}
                  // bg={bg}
                >
                  <Text pb="4" fontSize="3xl" fontWeight="500">
                    C.G.P.A
                    <Link fontSize="3xl" fontWeight="500" color="red">
                      *
                    </Link>
                  </Text>

                  <NumberInput
                    value={cgpa}
                    onChange={(e) => setCgpa(e)}
                    step={0.1}
                    defaultValue={0}
                    min={5}
                    max={10}
                    // py="6"
                    focusBorderColor="#25BAFB"
                    bg="rgba(240, 240, 240, 1)"
                    maxW="50%"
                    placeholder="Enter CGPA"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </GridItem>
                <GridItem rowSpan={15} colSpan={15}>
                  <Center>
                    <Flex
                      mt="16"
                      position="fixed"
                      bottom="0vh"
                      justifyContent="center"
                      width={
                        ("fit-content", "fit-content", "fit-content", "100%")
                      }
                      background="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9259259259259259) 80%, rgba(255,255,255,0) 100%)"
                    >
                      <Button
                        color="white"
                        px="8"
                        mb="4"
                        mt="4"
                        bg="rgba(13, 179, 251, 1)"
                        _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                        _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                        onClick={() => setPe(3)}
                      >
                        Previous
                      </Button>
                      <Button
                        isDisabled={!workEx || !clgUni || !cgpa || !backlogs}
                        color="white"
                        px="8"
                        mb="4"
                        mt="4"
                        bg="rgba(13, 179, 251, 1)"
                        _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                        _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                        onClick={() => setPe(5)}
                        ml="4"
                      >
                        Next
                      </Button>
                    </Flex>
                    {/* <Button
									mt="8"
									color="white"
									px="8"
									mb="4"
									bg="rgba(13, 179, 251, 1)"
									onClick={() => setPe(5)}
									_hover={{ bg: 'rgba(13, 179, 251, 0.9)' }}
									_active={{ bg: 'rgba(13, 179, 251, 0.7)' }}
								>
									Next
								</Button> */}
                  </Center>
                </GridItem>{" "}
              </React.Fragment>
            )}
            {pe === 5 && (
              <React.Fragment>
                {" "}
                <GridItem
                  pt={["0.4rem", "1rem", "2rem", "2rem", "2rem"]}
                  rowSpan={12}
                  colSpan={15}
                  // bg={bg}
                >
                  <Heading color="rgba(19, 43, 80, 1)" textAlign="center">
                    What is your budget?
                  </Heading>
                </GridItem>
                <GridItem rowSpan={12} colSpan={15}>
                  <Flex
                    mx="8"
                    justifyContent="space-between"
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    {[
                      "Under 25 Lakhs",
                      "25 - 35 Lakhs",
                      "Above 35 Lakhs",
                      "Other",
                    ].map((i, idx) => (
                      <Box
                        my="3"
                        mx="2"
                        onClick={() => setBudget(i)}
                        transition="all 0.3s"
                        bg={
                          i === budget
                            ? "linear-gradient(311.3deg, #6ADBDB 0%, #0DB3FB 97.24%)"
                            : "linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 97.24%)"
                        }
                        rounded="lg"
                        p="3"
                        border={
                          i === budget
                            ? "4px solid rgba(13, 179, 251, 1)"
                            : "4px solid white"
                        }
                        _hover={{ boxShadow: "base" }}
                        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)"
                        key={idx}
                      >
                        <Center>
                          <Image
                            maxH="100px"
                            src={
                              i !== budget
                                ? `/images/budget_icon.png`
                                : `/images/budget_icon_white.png`
                            }
                            alt="country"
                          />
                        </Center>
                        <Text
                          transition="all 0.2s ease-out"
                          color={i === budget ? "white" : "black"}
                          textAlign="center"
                          fontSize="2xl"
                          fontWeight="semibold"
                          mt="4"
                        >
                          {i}
                        </Text>
                      </Box>
                    ))}{" "}
                  </Flex>
                </GridItem>
                <GridItem
                  mb={{ base: "28", md: "0" }}
                  rowSpan={12}
                  colSpan={15}
                >
                  <Text
                    textAlign="center"
                    ml={{ base: "4", md: "4" }}
                    pb=""
                    pt="4"
                    fontSize="2xl"
                    fontWeight="500"
                  >
                    How are you going to fund your Master’s?
                    <Link _hover={{ textDecoration: "none" }} color="red">
                      *
                    </Link>
                  </Text>

                  <Center>
                    <RadioGroup
                      mt="2"
                      onChange={setFundMasters}
                      value={fundMasters}
                      defaultValue="Secured Loan"
                    >
                      <Stack spacing={2}>
                        <Radio
                          size="lg"
                          value="Secured Loan"
                          colorScheme="blue"
                        >
                          Secured Loan
                        </Radio>
                        <Radio
                          size="lg"
                          value="Unsecured Loan"
                          colorScheme="blue"
                        >
                          Unsecured Loan
                        </Radio>
                        <Radio
                          size="lg"
                          value="Self/Parent Funded"
                          colorScheme="blue"
                        >
                          Self/Parent Funded
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    {/* <Input
									ml={{ base: '4', md: '4' }}
									value={fundMasters}
									onChange={e => setFundMasters(e.target.value)}
									py="3"
									focusBorderColor="#25BAFB"
									bg="rgba(240, 240, 240, 1)"
									maxW="20em"
									placeholder="Education Loan, etc..."
								/> */}
                  </Center>
                </GridItem>{" "}
                <GridItem rowSpan={15} colSpan={15}>
                  <Center>
                    <Flex
                      mt="16"
                      position="fixed"
                      bottom="0vh"
                      justifyContent="center"
                      width={
                        ("fit-content", "fit-content", "fit-content", "100%")
                      }
                      // background= "rgb(255,255,255)"
                      background="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9259259259259259) 80%, rgba(255,255,255,0) 100%)"
                    >
                      <Button
                        className="sticky"
                        color="white"
                        px="8"
                        // mb="4"
                        mt="4"
                        bg="rgba(13, 179, 251, 1)"
                        _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                        _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                        onClick={() => setPe(4)}
                      >
                        Previous
                      </Button>
                      <Button
                        isDisabled={!fundMasters}
                        color="white"
                        px="8"
                        mb="4"
                        mt="4"
                        bg="rgba(13, 179, 251, 1)"
                        _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                        _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                        onClick={() => setPe(6)}
                        ml="4"
                      >
                        Next
                      </Button>
                    </Flex>
                  </Center>
                </GridItem>{" "}
              </React.Fragment>
            )}
            {pe === 6 && (
              <React.Fragment>
                {" "}
                <GridItem
                  p={["0.4rem", "1rem", "2rem", "2rem", "2rem"]}
                  rowSpan={12}
                  colSpan={15}
                  // bg={bg}
                >
                  <Text
                    ml={{ base: "4", md: "0" }}
                    pb="4"
                    textAlign="center"
                    fontSize="3xl"
                    fontWeight="500"
                  >
                    Which session are you applying for?
                    <Link fontSize="3xl" fontWeight="500" color="red">
                      *
                    </Link>
                  </Text>
                </GridItem>
                {[
                  "Spring 2022",
                  "Fall 2022",
                  "Spring 2023",
                  "Fall 2023",
                  "Other",
                ].map((i, idx) => (
                  <GridItem
                    id="griditem"
                    onClick={() => setSession(i)}
                    my="8"
                    key={idx}
                    px={["4rem", "3rem", "2rem", "0rem", "0rem"]}
                    rowSpan={15}
                    colSpan={[30, 30, 15, , 3]}
                    // bg={bg}
                  >
                    <Center>
                      <Box
                        transition="all 0.3s"
                        bg={
                          i === session
                            ? "linear-gradient(311.3deg, #6ADBDB 0%, #0DB3FB 97.24%)"
                            : "linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 97.24%)"
                        }
                        rounded="lg"
                        p="4"
                        mb={i === "Other" ? "16" : "0"}
                        border={
                          i === session
                            ? "4px solid rgba(13, 179, 251, 1)"
                            : "4px solid white"
                        }
                        _hover={{ boxShadow: "base" }}
                        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)"
                        key={idx}
                      >
                        <Center>
                          <Image
                            maxH="135px"
                            src={
                              i !== session
                                ? `/images/session_icon.png`
                                : `/images/session_icon_white.png`
                            }
                            alt="country"
                          />
                        </Center>
                        <Text
                          transition="all 0.2s ease-out"
                          color={i === session ? "white" : "black"}
                          textAlign="center"
                          fontSize="2xl"
                          fontWeight="semibold"
                          mt="4"
                        >
                          {i}
                        </Text>
                      </Box>
                    </Center>
                  </GridItem>
                ))}
                <GridItem rowSpan={12} colSpan={15}>
                  <Center>
                    <Flex
                      mt="16"
                      position="fixed"
                      bottom="0vh"
                      justifyContent="center"
                      width={
                        ("fit-content", "fit-content", "fit-content", "100%")
                      }
                      background="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9259259259259259) 80%, rgba(255,255,255,0) 100%)"
                    >
                      <Button
                        color="white"
                        px="8"
                        mb="4"
                        mt="4"
                        bg="rgba(13, 179, 251, 1)"
                        _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                        _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                        onClick={() => setPe(5)}
                      >
                        Previous
                      </Button>
                      <Button
                        color="white"
                        px="8"
                        mb="4"
                        mt="4"
                        bg="rgba(13, 179, 251, 1)"
                        _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
                        _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
                        onClick={() => setPe(7)}
                        ml="4"
                      >
                        Next
                      </Button>
                    </Flex>
                    {/* <Button
									mt="16"
									color="white"
									px="8"
									mb="4"
									bg="rgba(13, 179, 251, 1)"
									_hover={{ bg: 'rgba(13, 179, 251, 0.9)' }}
									_active={{ bg: 'rgba(13, 179, 251, 0.7)' }}
									onClick={() => setPe(7)}
								>
									Next
								</Button> */}
                  </Center>
                </GridItem>{" "}
              </React.Fragment>
            )}
            {pe === 7 && (
              <React.Fragment>
                {" "}
                <GridItem
                  p={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
                  rowSpan={12}
                  colSpan={15}
                  // bg={bg}
                >
                  <VStack pt="8" spacing={8}>
                    <Input
                      // ml={{ base: '4', md: '4' }}
                      value={username}
                      // type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      py="3"
                      focusBorderColor="#25BAFB"
                      bg="rgba(240, 240, 240, 1)"
                      maxW="20em"
                      placeholder="Name"
                      type="text"
                    />
                    <Input
                      // ml={{ base: '4', md: '4' }}
                      isInvalid={
                        userEmail.length > 0 ? !isEmail(userEmail) : false
                      }
                      type="email"
                      value={userEmail}
                      onChange={(e) => {
                        setUserEmail(e.target.value);
                        setSuccess("");
                        setError("");
                      }}
                      py="3"
                      errorBorderColor="red.600"
                      focusBorderColor="#25BAFB"
                      bg="rgba(240, 240, 240, 1)"
                      maxW="20em"
                      placeholder="Email"
                    />
                    <Input
                      // ml={{ base: '4', md: '4' }}
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      py="3"
                      focusBorderColor="#25BAFB"
                      bg="rgba(240, 240, 240, 1)"
                      maxW="20em"
                      placeholder="Enter number"
                    />
                    <Checkbox
                      onChange={() => setTnC(!tnC)}
                      value={tnC}
                      color="#828282"
                    >
                      I agree to all the{" "}
                      <Link color="#0DB3FB">Terms and Conditions</Link>
                    </Checkbox>

					<div id="sign-in-button"></div>
                  </VStack>
				  
                </GridItem>
                <GridItem rowSpan={12} colSpan={15}>
                  <Center>
                    <Tooltip
                      hasArrow
                      rounded="full"
                      colorScheme="red"
                      bg="red.200"
                      color="red.700"
                      label={error}
                      placement="top"
                      isOpen={error}
                    >
                      <Button
                        isLoading={loading}
                        isDisabled={
                          loading ||
                          !tnC ||
                          !isEmail(userEmail) ||
                          !userPhone ||
                          !username ||
                          success
                        }
                        mt="4"
                        color="white"
                        px="8"
                        mb="4"
                        // size={{base:"sm", md:"md"}}

                        colorScheme={error ? "red" : success ? "green" : ""}
                        bg={
                          error
                            ? "red"
                            : success
                            ? "green"
                            : "rgba(13, 179, 251, 1)"
                        }
                        _hover={{
                          bg: error
                            ? "red"
                            : success
                            ? "green"
                            : "rgba(13, 179, 251, 0.9)",
                        }}
                        _active={{
                          bg: error
                            ? "red"
                            : success
                            ? "green"
                            : "rgba(13, 179, 251, 0.7)",
                        }}
                        onClick={evaluateProfilePost}
                      >
                        {error
                          ? "Try Again"
                          : success
                          ? "Profile Submitted"
                          : "View Profile Evaluation Report"}
                      </Button>
                    </Tooltip>
                  </Center>
                  {/* {error && (
								<Text textAlign="center" textSize={'md'} color="red.600">
									There was an error Please try again.
								</Text>
							)}
							{success && (
								<Text textAlign="center" textSize={'md'} color="green.600">
									Profile submitted, please wait for our response.
								</Text>
							)} */}
                </GridItem>{" "}
              </React.Fragment>
            )}
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default One;
