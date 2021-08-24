import { Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Text } from '@chakra-ui/react';
import Footer from './common/footer';
import Navbar from './common/navbar';
export default function Home() {
	// let bg = 'red';
	let bg = 'transparent';
	return (
		<Box>
			<title>Flywise</title>
			<Navbar />
			<Grid overflow="hidden" maxW="100vw" templateRows="repeat(12, 1fr)" templateColumns="repeat(12, 1fr)">
				<GridItem
					p={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
					rowSpan={12}
					colSpan={[ 12, 12, 6, 6, 6 ]}
					bg={bg}
				>
					<Heading fontSize={[ 'xl', '2xl', '3xl', '4xl', '5xl' ]}>
						India’s best overseas education
						<Heading fontSize={[ 'xl', '2xl', '3xl', '4xl', '5xl' ]} color="#0DB3FB">
							platform that travels with you till you land your dream job
						</Heading>
					</Heading>
					<Button
						variant={'solid'}
						size={'md'}
						color="white"
						fontWeight="semibold"
						px="6"
						bg="linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)"
						_hover={{
							bg: 'linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)'
						}}
						_focus={{
							bg: 'linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)'
						}}
						_active={{
							bg: 'linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)'
						}}
						mt="16"
						rounded="full"
					>
						Free Profile Evaluation
					</Button>
				</GridItem>
				<GridItem rowSpan={12} colSpan={[ 12, 12, 6, 6, 6 ]} bg={bg}>
					<Image src="/images/landing_1.svg" alt="main" />
				</GridItem>
				<GridItem
					rowSpan={12}
					colSpan={12}
					bg={'linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)'}
				>
					<Heading pt="3rem" fontSize="5xl" textShadow="0px 2px 5px rgba(0,0,0,0.4)" textAlign="center">
						What we offer
					</Heading>
					<Text textAlign="center" color="gray.500">
						Learn more about the services we offer{' '}
					</Text>

					<Flex flexDirection={{ base: 'column', md: 'row' }} pt="3rem" justifyContent="space-evenly">
						<Center>
							<Box
								minH="70vh"
								w={{ base: '80%', md: '30rem' }}
								my="4"
								maxH="558px"
								maxW="425.03px"
								p={[ '2', '4', '8', '16', '16' ]}
								bg="white"
								boxShadow="0px 0px 50px 23px rgba(220, 220, 220, 0.25)"
							>
								<Image mb="4" maxH="40%" src="/images/landing_card1.svg" alt="main" />
								<Heading my="4" fontSize="xl">
									Pre-Admission support
								</Heading>
								{[
									'Free profile evaluation',
									'Test preparation',
									'Course selection',
									'University selection',
									'SOP & LOR',
									'Application assistance'
								].map((i, idx) => (
									<Flex key={idx}>
										<Image src="/images/tick.svg" alt="tick" />
										<Text color="rgba(13, 179, 251, 1)" fontWeight="600">
											{i}
										</Text>
									</Flex>
								))}
							</Box>
						</Center>
						<Center>
							<Box
								minH="70vh"
								w={{ base: '80%', md: '30rem' }}
								my="4"
								maxH="558px"
								maxW="425.03px"
								p={[ '2', '4', '8', '16', '16' ]}
								bg="white"
								boxShadow="0px 0px 50px 23px rgba(220, 220, 220, 0.25)"
							>
								<Image mb="4" maxH="40%" src="/images/landing_card2.svg" alt="main" />
								<Heading my="4" fontSize="xl">
									Post-Admission support
								</Heading>
								{[
									'VISA assistance',
									'Loan assistance',
									'Forex',
									'Roommate matching',
									'Pre departure guidance'
								].map((i, idx) => (
									<Flex key={idx}>
										<Image src="/images/tick.svg" alt="tick" />
										<Text color="rgba(13, 179, 251, 1)" fontWeight="600">
											{i}
										</Text>
									</Flex>
								))}
							</Box>
						</Center>
						<Center>
							<Box
								minH="70vh"
								w={{ base: '80%', md: '30rem' }}
								my="4"
								maxH="558px"
								maxW="425.03px"
								p={[ '2', '4', '8', '16', '16' ]}
								bg="white"
								boxShadow="0px 0px 50px 23px rgba(220, 220, 220, 0.25)"
							>
								<Image mb="4" maxH="40%" src="/images/landing_card3.svg" alt="main" />
								<Heading my="4" fontSize="xl">
									Abroad career support
								</Heading>
								{[
									'Profile building',
									'Test preparation',
									'Professional networking',
									'Interview training',
									'Job referrals at top tech companies'
								].map((i, idx) => (
									<Flex key={idx}>
										<Image src="/images/tick.svg" alt="tick" />
										<Text color="rgba(13, 179, 251, 1)" fontWeight="600">
											{i}
										</Text>
									</Flex>
								))}
							</Box>
						</Center>
					</Flex>
				</GridItem>
				<GridItem
					backgroundRepeat="no-repeat"
					p={[ '1.5rem', '3rem', '4rem', '8rem', '15rem' ]}
					rowSpan={12}
					colSpan={12}
					backgroundImage="url(/images/paperplane.png)"
				>
					<Box h="100%" w="100%">
						<Heading fontSize={[ '2xl', '2xl', '3xl', '4xl', '4xl' ]} my="4" textAlign="center">
							Watch this video to better understand how Flywise helps students in their Career
						</Heading>
						<Box
							border="8px"
							borderColor="rgba(66, 134, 211, 1)"
							rounded="3xl"
							boxShadow="xl"
							overflow="hidden"
						>
							<iframe
								width={'100%'}
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
					// colSpan={{base: 12, md:6}}
					bg={'linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)'}
				>
					<Flex flexDirection={{ md: 'row', base: 'column' }}>
						<Box mt={[ '2', '4', '8', '16', '32' ]} ml={[ '2', '4', '8', '16', '32' ]}>
							<Heading my="16" textAlign="center" mt="4">
								We are specialized in below fields, fly with us!
							</Heading>
							{[
								'Computer science',
								'Data science',
								'Business analytics',
								'Information systems'
							].map((i, idx) => (
								<Flex my="4" ml="4" key={idx}>
									<Image
										filter="box-shadow(0px 39px 99px 0px rgba(0, 0, 0, 0.16))"
										h="69px"
										alt="icon"
										src={`/images/icon${idx + 1}.png`}
									/>
									<Text my="5" ml="4" fontWeight="600">
										{i}{' '}
									</Text>
								</Flex>
							))}
						</Box>

						<Image p="16" alt="desk" src="/images/computer_desk.png" />
					</Flex>
				</GridItem>
				<GridItem
					rowSpan={12}
					colSpan={12}
					// bg={'linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)'}
				>
					<Heading my={[ '2', '4', '8', '16', '16' ]} textAlign="center">
						How Flywise is better than any other overseas agencies?
					</Heading>

					<Flex
						flexDirection={{ md: 'row', base: 'column' }}
						my="4"
						px={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
					>
						<Box
							transform={{ base: 'translate(0px, 0px)', md: 'translate(10px, 0px)' }}
							minW="32%"
							// h="220px"
							rounded="17px"
							bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
						>
							<Heading
								textAlign="center"
								color="white"
								fontSize={[ 'md', '2xl', '2xl', '3xl', '4xl' ]}
								py={[ '2', '4', '8', '16', '16' ]}
							>
								Real experienced mentors
							</Heading>
						</Box>
						<Box roundedRight="17px" roundedLeft="none" bg="rgba(106, 219, 219, 0.07)">
							<Text fontSize="xl" fontWeight="600" py="12" px="8">
								Unlike traditional consultancies, you will get real experienced mentors who have already
								gone through all the steps and have succeeded with great careers.{' '}
							</Text>
						</Box>
					</Flex>
					<Flex
						flexDirection={{ md: 'row', base: 'column-reverse' }}
						my="4"
						px={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
					>
						<Box roundedLeft="17px" roundedRight="none" bg="rgba(106, 219, 219, 0.07)">
							<Text fontSize="xl" fontWeight="600" py="12" px="8">
								We hate traditional metrics. Our Mentors will work with you to identify your objectives,
								draw your vision, and show a path to get into a right University based on your budget
								and future vision!.{' '}
							</Text>
						</Box>
						<Box
							transform={{ base: 'translate(0px, 0px)', md: 'translate(-10px, 0px)' }}
							minW="32%"
							// h="220px"
							rounded="17px"
							bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
						>
							<Heading
								textAlign="center"
								color="white"
								fontSize={[ 'md', '2xl', '2xl', '3xl', '4xl' ]}
								py={[ '2', '4', '8', '16', '16' ]}
							>
								Admit from right top University
							</Heading>
						</Box>
					</Flex>
					<Flex
						flexDirection={{ md: 'row', base: 'column' }}
						my="4"
						px={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
					>
						<Box
							transform={{ base: 'translate(0px, 0px)', md: 'translate(10px, 0px)' }}
							minW="32%"
							// h="220px"
							rounded="17px"
							bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
						>
							<Heading
								textAlign="center"
								color="white"
								fontSize={[ 'md', '2xl', '2xl', '3xl', '4xl' ]}
								py={[ '2', '4', '8', '16', '16' ]}
							>
								Land your dream job abroad!
							</Heading>
						</Box>
						<Box roundedRight="17px" roundedLeft="none" bg="rgba(106, 219, 219, 0.07)">
							<Text fontSize="xl" fontWeight="600" py="12" px="8">
								We take resume reviews and prepare students with mock interviews by real Interviewers
								from top companies like Google, Facebook, and Amazon. We will also build a clear roadmap
								and help students to prepare for internships{' '}
							</Text>
						</Box>
					</Flex>
					<Flex
						flexDirection={{ md: 'row', base: 'column-reverse' }}
						my="4"
						px={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
					>
						<Box roundedLeft="17px" roundedRight="none" bg="rgba(106, 219, 219, 0.07)">
							<Text fontSize="xl" fontWeight="600" py="12" px="8">
								You will be part of a great community, super useful connections, and a wonderful
								network, lifelong!
							</Text>
						</Box>
						<Box
							transform={{ base: 'translate(0px, 0px)', md: 'translate(-10px, 0px)' }}
							minW="32%"
							// h="220px"
							rounded="17px"
							bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
						>
							<Heading
								textAlign="center"
								color="white"
								fontSize={[ 'md', '2xl', '2xl', '3xl', '4xl' ]}
								py={[ '2', '4', '8', '16', '16' ]}
							>
								Best professional network in a foreign land
							</Heading>
						</Box>
					</Flex>
				</GridItem>
				<GridItem
					rowSpan={12}
					colSpan={12}
					// colSpan={{base: 12, md:6}}
					bg={'linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)'}
				>
					<Center>
						<Flex flexDirection={{ md: 'row', base: 'column' }}>
							<Image maxW="25rem" maxH="70vh" p="16" alt="desk" src="/images/person_board.png" />
							<Box mt={[ '2', '4', '8', '16', '16' ]} ml={[ '2', '4', '8', '16', '32' ]}>
								<Heading mt="16" textAlign="left" mb="4">
									Do you worry about
								</Heading>
								{[
									'backlogs and low B.tech CGPA?',
									'low GRE and IELTS scores?',
									'switching from non-CS to CS branch?',
									'not getting a job after masters?'
								].map((i, idx) => (
									<Text fontSize="xl" key={idx} color={'#17A2FB'} my="2" fontWeight="700">
										{i}{' '}
									</Text>
								))}
								<Text my="16" fontWeight="400">
									Don’t worry, We guide you to sail through all these hurdles and live your dream life
									abroad!
								</Text>
							</Box>
						</Flex>
					</Center>
				</GridItem>
				<GridItem
					rowSpan={12}
					colSpan={12}
					// colSpan={{base: 12, md:6}}
					// bg={'linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)'}
				>
					<Heading my={[ '2', '4', '8', '16', '16' ]} textAlign="center">
						Have Any Questions?
					</Heading>
					{[
						'When will I have access to my course',
						'When will I have access to my course',
						'When will I have access to my course',
						'When will I have access to my course',
						'When will I have access to my course',
						'When will I have access to my course'
					].map((i, idx) => (
						<Center w="100%" key={idx}>
							<Flex mx="2" w={["80%", "30rem", "30rem", "35rem", "40rem"]} rounded="xl" my="4" p="4" bg="rgba(246, 247, 248, 1)">
								<Image mt="1" alt="arrow" src="/images/right_arrow.png" maxH="1rem" />
								<Text>
									{i}
								</Text>
							</Flex>
						</Center>
					))}
				</GridItem>
				<Footer />
			</Grid>
		</Box>
	);
}
