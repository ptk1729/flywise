import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import NLink from "next/link";
import FaqList from "./common/faqs";
import Footer from "./common/footer";
import Navbar from "./common/navbar";
import faqs from "./../content/homeFaqs";
import { useEffect } from "react";

import classes from "../styles/whatsappbtn.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  // let bg = 'red';
  let bg = "transparent";

  return (
    <Box maxW="100vw">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Flywise</title>

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
          py={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
          pl={["0.5rem", "1rem", "3rem", "6rem", "12rem"]}
          pr={["0.5rem", "1rem", "1rem", "2rem", "3rem"]}
          rowSpan={12}
		  mx="3"
		  mr="7"
          colSpan={[12, 12, 7, 7, 7]}
          bg={bg}
        >
          {/* <Heading fontSize={[ 'xl', '2xl', '3xl', '4xl', '5xl' ]}>
						India’s best overseas education
						<Heading fontSize={[ 'xl', '2xl', '3xl', '4xl', '5xl' ]} color="#0DB3FB">
							platform that travels with you till you land your dream job abroad
						</Heading>
					</Heading> */}

          <Heading
            mt="4"
            textAlign={{ base: "center", md: "left" }}
            fontSize={["2xl", "2xl", "3xl", "3xl", "4xl"]}
          >
            India’s best overseas education platform
            <Link
              _hover={{ textDecoration: "none" }}
              fontWeight="bold"
              fontSize={["2xl", "2xl", "3xl", "3xl", "4xl"]}
              color="#0DB3FB"
            >
              <span className={classes.linkk1} data-aos-duration="1000" data-aos-delay="100" data-aos="fade-up">
                {" "}
                that
              </span>{" "}
              <span className={classes.link2} data-aos-duration="1000" data-aos="fade-up" data-aos-delay="150">travels</span>{" "}
              <span className={classes.linkk3} data-aos-duration="1000"   data-aos="fade-up" data-aos-delay="300">with</span>{" "}
              <span className={classes.linkk4} data-aos-duration="1000"  data-aos="fade-up" data-aos-delay="450">you</span>{" "}
              <span className={classes.linkk5} data-aos-duration="1000"  data-aos="fade-up" data-aos-delay="600">till</span>{" "}
              <span className={classes.linkk6} data-aos-duration="1000"  data-aos="fade-up" data-aos-delay="750">you</span>{" "}
              <span className={classes.linkk7} data-aos-duration="1000"  data-aos="fade-up" data-aos-delay="900">land</span>{" "}
              <span className={classes.linkk8} data-aos-duration="1000"  data-aos="fade-up" data-aos-delay="1050">your</span>{" "}
              <span className={classes.linkk9} data-aos-duration="1000" data-aos="fade-up" data-aos-delay="1200">dream</span>{" "}
              <span className={classes.linkk10} data-aos-duration="1000"  data-aos="fade-up" data-aos-delay="1350">job</span>{" "}
              <span className={classes.linkk11} data-aos-duration="1000"  data-aos="fade-up" data-aos-delay="1500">abroad</span>
            </Link>
          </Heading>

          <Text
            textAlign={{ base: "center", md: "left" }}
            my="4"
			mx="5"
		  mr="5"
			
            fontSize={{ base: "14px", md: "16px" }}
          >
            Why do we go abroad? To study more, land on a good job, earn enough,
            and settle for a good life. Right? Most of us dream of achieving
            this instantly as soon as we get an admission. But the real journey
            starts when you land abroad.
          </Text>
          <Text
            textAlign={{ base: "center", md: "left" }}
            my="4"
			mx="2"
            fontSize={{ base: "14px", md: "16px" }}
          >
            We, at Flywise, want to make that journey as smooth as possible till
            you settle yourself well.
          </Text>
          <Flex justifyContent={{ base: "center", md: "flex-start" }}>
            <NLink href="/profile-evaluation" passHref>
              <Button
                variant={"solid"}
                size={"md"}
                color="white"
                fontWeight="semibold"
                px="6"
                id="gradientt"
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
                mt="6"
                rounded="full"
              >
                Free Profile Evaluation
              </Button>
            </NLink>
          </Flex>
        </GridItem>
        <GridItem
          pr={["0.4rem", "1rem", "3rem", "6rem", "12rem"]}
          rowSpan={12}
          colSpan={[12, 12, 5, 5, 5]}
          bg={bg}
		  
        >
          <Image mt="16" src="/images/landing_1.svg" alt="main" />
        </GridItem>
        <GridItem
          px={["0.4rem", "1rem", "3rem", "6rem", "10rem"]}
          rowSpan={12}
          colSpan={12}
		  mx="5"
		  mr="5"
          bg={
            "linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)"
          }
        >
          <Heading
            id="services"
            pt="3rem"
            fontSize={["3xl", "3xl", "4xl", "4xl", "5xl"]}
            // textShadow="0px 2px 5px rgba(0,0,0,0.4)"
            textAlign="center"
          >
            What we offer
          </Heading>
          <Text textAlign="center" color="gray.500">
            Learn more about the services we offer{" "}
          </Text>
          <Center>
            <Stack
              pt="8"
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "4", md: "8" }}
            >
              {[
                {
                  title: "Pre-Admission support",
                  image: "/images/landing_card1.svg",
                  texts: [
                    "Free profile evaluation",
                    "Career roadmap",
                    "Course selection",
                    "University selection",
                    "SOP & LOR",
                    "Application assistance",
                  ],
                },
                {
                  title: "Post-Admission support",
                  image: "/images/landing_card2.svg",
                  texts: [
                    "VISA assistance",
                    "Loan assistance",
                    "Forex",
                    "Roommate matching",
                    "Pre departure guidance",
                  ],
                },
                {
                  title: "Abroad career support",
                  image: "/images/landing_card3.svg",
                  texts: [
                    "Profile building",
                    "Career roadmap",
                    "Professional networking",
                    "Interview training",
                    "Job referrals at top tech companies",
                  ],
                },
              ].map((service, idx) => (
                <Center key={idx}>
                  <Box
                    rounded="md"
                    h="100%"
                    w={{ base: "80%", md: "24rem" }}
                    my="4"
                    maxH="558px"
                    maxW="425.03px"
                    p={["2", "4", "8", "16", "16"]}
                    bg="white"
                    transition="all 0.3s"
                    _hover={{
                      boxShadow: "0px 0px 10px 10px rgba(220, 220, 220, 0.25)",
                    }}
                    boxShadow="0px 0px 50px 23px rgba(220, 220, 220, 0.25)"
                  >
                    <Center>
                      <Image mb="4" maxH="40%" src={service.image} alt="main" />
                    </Center>
                    <Heading my="4" fontSize="xl">
                      {service.title}
                    </Heading>
                    {service.texts.map((i, idx) => (
                      <Flex alignItems="flex-start" key={idx}>
                        <Image
                          mr="2"
                          mt="1"
                          h="4"
                          src="/images/icons/tick2.png"
                          alt="tick"
                        />
                        <Text color="rgba(13, 179, 251, 1)" fontWeight="600">
                          {i}
                        </Text>
                      </Flex>
                    ))}
                  </Box>
                </Center>
              ))}
            </Stack>
          </Center>
        </GridItem>
        <GridItem
          backgroundRepeat="no-repeat"
          p={["1.5rem", "3rem", "4rem", "8rem", "10em"]}
          rowSpan={12}
          colSpan={12}
		  mx="5"
		  mr="5"
          // backgroundImage="url(/images/paperplane.png)"
        >
          <Box h="100%" w="100%" >
            <Heading
              fontSize={["2xl", "2xl", "3xl", "4xl", "4xl"]}
              

              textAlign="center"
              mb="10"
            >
              Watch this video to better understand how Flywise helps students
              in their Career
            </Heading>

            <Box
              display={["none", "inset", "none", "none", "none"]}
              border="8px"
              borderColor="rgba(66, 134, 211, 1)"
              rounded="3xl"
              boxShadow="xl"
              overflow="hidden"
            >
              <iframe
                width={"100%"}
                height={240}
                src="https://www.youtube.com/embed/eSythjoTlss"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>

            <Box
              display={["inset", "none", "inset", "none", "none"]}
              border="8px"
              borderColor="rgba(66, 134, 211, 1)"
              rounded="3xl"
			  
              boxShadow="xl"
              overflow="hidden"
            >
              <iframe
                width={"100%"}
                height={200}
                src="https://www.youtube.com/embed/eSythjoTlss"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
            <Box
              display={["none", "none", "none", "inset", "inset"]}
              border="8px"
              borderColor="rgba(66, 134, 211, 1)"
              rounded="3xl"
              boxShadow="xl"
              overflow="hidden"
            >
              <iframe
                width={"100%"}
                height={575}
                src="https://www.youtube.com/embed/eSythjoTlss"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
            {/* <Image alt="video" src="/images/thumbnail.png" /> */}
          </Box>
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={12}
		  mx="5"
		  mr="5"
          // colSpan={{base: 12, md:6}}
          bg={
            "linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)"
          }
        >
          <Flex flexDirection={{ md: "row", base: "column" }}>
            <Box
              mt={["2", "4", "8", "16", "32"]}
              ml={["0", "4", "8", "16", "44"]}
              pl={["1", "1", "2", "4", "20"]}
            >
              <Heading
                fontSize={["2xl", "3xl", "4xl", "4xl", "4xl"]}
                my="16"
                mt="4"
                textAlign="center"
              >
                We are specialized in below fields, fly with us!
              </Heading>
              {[
                "Computer science",
                "Data science",
                "Business analytics",
                "Information systems",
              ].map((i, idx) => (
                <Flex my="4" ml="12" key={idx}>
                  <Image
                    filter="box-shadow(0px 39px 99px 0px rgba(0, 0, 0, 0.16))"
                    h="69px"
                    alt="icon"
                    src={`/images/icon${idx + 1}.png`}
                  />
                  <Text
                    my="5"
                    ml="4"
                    fontWeight="600"
                    fontSize={["1rem", "1.2rem", "1.3rem", "1.4rem"]}
                  >
                    {i}{" "}
                  </Text>
                </Flex>
              ))}
            </Box>
            <Center w="100%">
              <Image
                mr={["2", "4", "8", "16", "40"]}
                maxW={["100%", "100%", "100%", "75%", "70%"]}
                py={{ base: "8", md: "32" }}
                alt="desk"
                src="/images/computer_desk.png"
              />
            </Center>
          </Flex>
        </GridItem>
        <GridItem
		mx="5"
		  mr="5"
          rowSpan={12}
          colSpan={12}
          px={["0.4rem", "1rem", "3rem", "6rem", "12rem"]}

          // bg={'linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)'}
        >
          <Heading my={["2", "4", "8", "16", "16"]} textAlign="center">
            How Flywise is better than any other overseas agencies?
          </Heading>

          <Flex
            flexDirection={{ md: "row", base: "column" }}
            my="4"
            px={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
          >
            <Box
              transform={{
                base: "translate(0px, 0px)",
                md: "translate(10px, 0px)",
              }}
              minW="32%"
              d="flex"
              justifyContent="center"
              alignItems="center"
              // h="220px"
              rounded="17px"
              bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
            >
              <Heading
                textAlign="center"
                color="white"
                fontSize={["md", "2xl", "2xl", "2xl", "3xl"]}
                px={["2", "1", "2", "3", "4"]}
                py={["2", "4", "8", "16", "16"]}
              >
                Real experienced mentors
              </Heading>
            </Box>
            <Box
              roundedRight="17px"
              roundedLeft="none"
              bg="rgba(106, 219, 219, 0.07)"
            >
              <Text fontSize="xl" fontWeight="600" py="12" px="8">
                Unlike traditional consultancies, you will get real experienced
                mentors who have already gone through all the steps and have
                succeeded with great careers.{" "}
              </Text>
            </Box>
          </Flex>
          <Flex
            flexDirection={{ md: "row", base: "column-reverse" }}
            my="4"
            px={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
          >
            <Box
              roundedLeft="17px"
              roundedRight="none"
              bg="rgba(106, 219, 219, 0.07)"
            >
              <Text fontSize="xl" fontWeight="600" py="12" px="8">
                We hate traditional metrics. Our Mentors will work with you to
                identify your objectives, draw your vision, and show a path to
                get into a right University based on your budget and future
                vision!.{" "}
              </Text>
            </Box>
            <Box
              transform={{
                base: "translate(0px, 0px)",
                md: "translate(-10px, 0px)",
              }}
              minW="32%"
              d="flex"
              justifyContent="center"
              alignItems="center"
              rounded="17px"
              bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
            >
              <Heading
                textAlign="center"
                color="white"
                fontSize={["md", "2xl", "2xl", "2xl", "3xl"]}
                px={["2", "1", "2", "3", "4"]}
                py={["2", "4", "8", "16", "16"]}
              >
                Admit from right top University
              </Heading>
            </Box>
          </Flex>
          <Flex
            flexDirection={{ md: "row", base: "column" }}
            my="4"
            px={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
          >
            <Box
              transform={{
                base: "translate(0px, 0px)",
                md: "translate(10px, 0px)",
              }}
              minW="32%"
              d="flex"
              justifyContent="center"
              alignItems="center"
              rounded="17px"
              bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
            >
              <Heading
                textAlign="center"
                color="white"
                fontSize={["md", "2xl", "2xl", "2xl", "3xl"]}
                px={["2", "1", "2", "3", "4"]}
                py={["2", "4", "8", "16", "16"]}
              >
                Land your dream job abroad!
              </Heading>
            </Box>
            <Box
              roundedRight="17px"
              roundedLeft="none"
              bg="rgba(106, 219, 219, 0.07)"
            >
              <Text fontSize="xl" fontWeight="600" py="12" px="8">
                We take resume reviews and prepare students with mock interviews
                by real Interviewers from top companies like Google, Facebook,
                and Amazon. We will also build a clear roadmap and help students
                to prepare for internships{" "}
              </Text>
            </Box>
          </Flex>
          <Flex
            flexDirection={{ md: "row", base: "column-reverse" }}
            my="4"
            px={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
          >
            <Box
              roundedLeft="17px"
              roundedRight="none"
              bg="rgba(106, 219, 219, 0.07)"
            >
              <Text fontSize="xl" fontWeight="600" py="12" px="8">
                You will be part of a great community, super useful connections,
                and a wonderful network, lifelong!
              </Text>
            </Box>
            <Box
              transform={{
                base: "translate(0px, 0px)",
                md: "translate(-10px, 0px)",
              }}
              minW="32%"
              d="flex"
              justifyContent="center"
              alignItems="center"
              rounded="17px"
              bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
            >
              <Heading
                textAlign="center"
                color="white"
                fontSize={["md", "2xl", "2xl", "2xl", "3xl"]}
                // px={[]}
                py={["2", "4", "8", "16", "16"]}
                px={["2", "1", "2", "3", "4"]}
              >
                Best professional network in a foreign land
              </Heading>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
		mx="5"
		  mr="5"
          rowSpan={12}
          colSpan={12}
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}
          mt="16"
          bg={
            "linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)"
          }
        >
          <Center>
            <Flex flexDirection={{ md: "row", base: "column" }}>
              <Image
                maxW="25rem"
                maxH="70vh"
                p="16"
                ml={["0", "4", "8", "16", "44"]}
                alt="desk"
                src="/images/person_board.png"
              />
              <Box
                mt={["2", "4", "8", "16", "16"]}
                ml={["0", "4", "8", "16", "12"]}
				ml="5"
		  
              >
                <Heading
                  mt={{ base: "4", md: "16" }}
                  textAlign={{ base: "center", md: "left" }}
                  mb="4"
                >
                  Do you worry about
                </Heading>
                {[
                  "backlogs and low B.tech CGPA?",
                  "low GRE and IELTS scores?",
                  "switching from non-CS to CS branch?",
                  "not getting a job after masters?",
                ].map((i, idx) => (
                  <Text
                    textAlign={{ base: "center", md: "left" }}
                    fontSize={{ base: "md", md: "xl" }}
                    key={idx}
                    color={"#17A2FB"}
                    my="2"
                    fontWeight="700"
                  >
                    {i}{" "}
                  </Text>
                ))}

                <Text
                  maxW={{ base: "90%", md: "70%" }}
                  textAlign={{ base: "center", md: "left" }}
                  my="12"
                  
                  fontWeight="400"
                >
                  Our founders and mentors have personally faced/seen all these
                  issues, navigated through them and are currently working at
                  top product based companies in the US. Our mentors will work
                  with you to build a vision, mission and identify objectives
                  which will help in planning to get the best job abroad
                  irrespective of your backgrounds (which is why you are going
                  abroad).
                </Text>
              </Box>
            </Flex>
          </Center>
        </GridItem>
        <GridItem py="8" colSpan="12" bg="white" rowSpan="12">
          <Heading textAlign="center">Testimonials</Heading>
        </GridItem>

        {[
          {
            name: "Shubbham singh",
            uni: "University of South Florida",
            avatar: "Akhil.daggubati.jpg",
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fusce lacus non in tortor, libero do”“Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fusce lacus non in tortor, libero do”",
            img: "/images/mentors/floridaa.jpg",
          },
          {
            name: "Preethi Rama",
            uni: "Cleveland State University",
            avatar: "Preethi.rama.jpeg",
            text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fusce lacus non in tortor, libero do”“Lorem ipsum dolor sit amet, consectetur adipiscing elit. A fusce lacus non in tortor, libero do”",
            img: "/images/mentors/cleveland.jpg",
          },
        ].map((testimonial, idx) => (
          <GridItem
            marginLeft="auto"
            marginRight="auto"
            width="400px"
            bg="white"
            // boxShadow="base"
            // _hover={{ boxShadow: 'lg' }}
            transition="all 0.2s"
            // rounded="md"
            pb="16"
            px="8"
            // px="2"
            key={idx}
            colSpan={["12", "6", "6", "6", "6"]}
            rowSpan={"12"}
          >
            {/* <Flex mt="8"> */}
            <Flex justifyContent="flex-end">
              <Image
                // transform="translate(2rem, -0.8rem)"
                alt="avatar"
                // maxW="80%"
                height="500px"
                width="325.8px"
                objectFit="cover"
                src={`/images/mentors/${testimonial.avatar}`}
              />
            </Flex>
            <Flex pr="2" justifyContent="flex-end">
              <Box
                rounded="lg"
                width="160px"
                // pb="3"
                transform={[
                  "translate(0rem, -4.8rem)",
                  "translate(0rem, -3.8rem)",
                  "translate(0rem, -4.7rem)",
                  "translate(0rem, -3.9rem)",
                  "translate(0rem, -4.8rem)",
                ]}
                height="65px"
                overflow="hidden"
              >
                <Image
                  objectFit="contain"
                  borderRadius="10px"
                  height="60px"
                  width="160px"
                  src={testimonial.img}
                  alt="nyu"
                />
              </Box>
            </Flex>
            {/* </Flex> */}
            <Text mt="-7">{testimonial.text}</Text>
            <Text fontWeight="bold" fontSize="18px" mt="3">
              {testimonial.name}
            </Text>
            <Text fontWeight="bold" fontSize="12px">
              Degree
            </Text>
            <Text fontWeight="bold" fontSize="12px">
              {testimonial.uni}
            </Text>
          </GridItem>
        ))}
        <GridItem
          rowSpan={12}
          colSpan={12}
          pb="4rem"
		 
          px={["0", "1", "4", "8", "16"]}
          width="100%"
          // colSpan={{base: 12, md:6}}
          // bg={'linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)'}
        >
          <Heading
            id="courses"
            my={["2", "4", "8", "16", "16"]}
            textAlign="center"
          >
            Have Any Questions?
          </Heading>
          <FaqList faqs={faqs} />
        </GridItem>
        <Footer />
      </Grid>
    </Box>
  );
}
