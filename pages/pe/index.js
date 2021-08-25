import {
	Box,
	Button,
	Center,
	Checkbox,
	Flex,
	Grid,
	GridItem,
	Heading,
	// HStack,
	Image,
	Input,
	Link,
	Progress,
	Radio,
	RadioGroup,
	Stack,
	Text,
	VStack
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Navbar from '../common/navbar';

function One() {
	const grid1 = [ 60 ];
	const grid2 = [ 60, 60, 60, 30, 30 ];
	const grid3 = [ 60, 60, 60, 30, 30 ];
	const grid4 = [ 60, 60, 45, , 15 ];
	const grid5 = [ 60, 60, 45, 24, 12 ];

	const [ country, setCountry ] = useState('USA');
	const [ course, setCourse ] = useState(0);
	const [ pe, setPe ] = useState(1);
	const [ training, setTraining ] = useState('yes');
	const [ session, setSession ] = useState('Spring 2022');
	const [ greQuant, setGreQuant ] = useState('');
	const [ greVerbal, setGreVerbal ] = useState('');
	const [ ieltsToefl, setIeltsToefl ] = useState('');
	const [ workEx, setWorkEx ] = useState('');
	const [ cgpa, setCgpa ] = useState('');
	const [ backlogs, setBacklogs ] = useState('');
	const [ clgUni, setClgUni ] = useState('');
	const [ budget, setBudget ] = useState('Under 20 Lakhs');
	const [ fundMasters, setFundMasters ] = useState('');

	const [ username, setUsername ] = useState('');
	const [ userEmail, setUserEmail ] = useState('');
	const [ userPhone, setUserPhone ] = useState('');
	return (
		<Box>
			<title>Profile Evaluation</title>
			<Navbar outline="Profile Evaluation" />
			<Progress boxShadow="md" color="#0DB3FB" bg="#B8E1F3" h="2" value={pe / 7 * 100} />

			<Grid overflow="hidden" maxW="100vw" templateRows="repeat(12, 1fr)" templateColumns="repeat(15, 1fr)">
				{pe === 1 && (
					<React.Fragment>
						{' '}
						<GridItem
							p={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
							rowSpan={12}
							colSpan={15}
							// bg={bg}
						>
							<Heading color="rgba(19, 43, 80, 1)" textAlign="center">
								Which country are you planning to go?
							</Heading>
						</GridItem>
						{[ 'USA', 'Australia', 'Canada', 'UK', 'Other' ].map((i, idx) => (
							<GridItem
								id="griditem"
								onClick={() => setCountry(i)}
								my="8"
								key={idx}
								px={[ '4rem', '3rem', '2rem', '0rem', '0rem' ]}
								rowSpan={15}
								colSpan={[ 30, 30, 15, , 3 ]}
								// bg={bg}
							>
								<Center>
									<Box
										transition="all 0.3s"
										bg={
											i === country ? (
												'linear-gradient(311.3deg, #6ADBDB 0%, #0DB3FB 97.24%)'
											) : (
												'linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 97.24%)'
											)
										}
										rounded="lg"
										p="4"
										border={i === country ? '4px solid rgba(13, 179, 251, 1)' : '4px solid white'}
										_hover={{ boxShadow: 'base' }}
										boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)"
										key={idx}
									>
										<Center>
											<Image maxH="135px" src={`/images/${i}_flag.png`} alt="country" />
										</Center>
										<Text
											transition="all 0.2s ease-out"
											color={i === country ? 'white' : 'black'}
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
								<Button
									mt="16"
									color="white"
									px="8"
									mb="4"
									bg="rgba(13, 179, 251, 1)"
									_hover={{ bg: 'rgba(13, 179, 251, 0.9)' }}
									_active={{ bg: 'rgba(13, 179, 251, 0.7)' }}
									onClick={() => setPe(2)}
								>
									Next
								</Button>
							</Center>
						</GridItem>{' '}
					</React.Fragment>
				)}
				{pe === 2 && (
					<React.Fragment>
						{' '}
						<GridItem
							p={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
							rowSpan={12}
							colSpan={15}
							// bg={bg}
						>
							<Heading color="rgba(19, 43, 80, 1)" textAlign="center">
								Are you planning to pursue masters in any of the below courses?
							</Heading>
							<Text color="rgba(19, 43, 80, 1)" textAlign="center" fontSize="xl" pt="2">
								You can select multiple courses
							</Text>
						</GridItem>
						{[
							'MS Computer science / Software engineering (Intensive coding)',
							'MS Data science (Coding + statistic skills)',
							'MS Business analytics (Minimal coding + analytic skills)',
							'MS Information systems (Minimal coding + communication skills)',
							'Other'
						].map((i, idx) => (
							<GridItem
								id="griditem"
								onClick={() => setCourse(idx)}
								my="4"
								key={idx}
								px={[ '4rem', '3rem', '2rem', '0rem', '0rem' ]}
								rowSpan={15}
								colSpan={[ 15, 15, 7, 5, 3 ]}
								// bg={bg}
							>
								<Center>
									<Box
										w="94%"
										// mx="10%"
										transition="all 0.3s"
										bg={
											idx === course ? (
												'linear-gradient(311.3deg, #6ADBDB 0%, #0DB3FB 97.24%)'
											) : (
												'linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 97.24%)'
											)
										}
										rounded="lg"
										p="4"
										border={idx === course ? '4px solid rgba(13, 179, 251, 1)' : '4px solid white'}
										_hover={{ boxShadow: 'base' }}
										boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)"
										key={idx}
									>
										<Center>
											<Image
												mt="4"
												maxH="4rem"
												src={
													idx === course ? (
														`/images/course_icon_white.png`
													) : (
														`/images/course_icon.png`
													)
												}
												alt="country"
											/>
										</Center>
										<Text
											h="6rem"
											transition="all 0.2s ease-out"
											color={idx === course ? 'white' : 'black'}
											textAlign="center"
											fontSize="lg"
											fontWeight="normal"
											mt="4"
										>
											{i.split(' (')[0]}
											{i.split(' (')[1] && <Text fontWeight="semibold">({i.split(' (')[1]}</Text>}
										</Text>
									</Box>
								</Center>
							</GridItem>
						))}
						<GridItem rowSpan={15} colSpan={15}>
							<Center>
								<Button
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
								</Button>
							</Center>
						</GridItem>{' '}
					</React.Fragment>
				)}
				{pe === 3 && (
					<React.Fragment>
						{' '}
						<GridItem
							px={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
							py={[ '0.4rem', '1.5rem', '1rem', '1.5rem', '2rem' ]}
							rowSpan={12}
							colSpan={15}
							// bg={bg}
						>
							<Heading fontSize="4xl" color="rgba(19, 43, 80, 1)" textAlign="center">
								Please enter your TEST scores
							</Heading>
						</GridItem>
						<GridItem
							// id="griditem"
							py={4}
							px={[ '4rem', '3rem', '2rem', '3rem', '4rem' ]}
							rowSpan={7}
							colSpan={[ 15, 15, 7, 7, 7 ]}
							// bg={bg}
						>
							<Flex>
								<Heading fontSize="3xl" fontWeight="500">
									GRE Quant score
								</Heading>
								<Heading fontSize="3xl" fontWeight="500" color="red">
									*
								</Heading>
							</Flex>
							<Text
								color="rgba(125, 125, 125, 1)"
								py="4"
							>{`Please write "Not taken yet" if you are yet to take GRE and "Not applicable" if you don't want to take GRE test`}</Text>
							<Input
								value={greQuant}
								onChange={e => setGreQuant(e.target.value)}
								py="6"
								focusBorderColor="#25BAFB"
								bg="rgba(240, 240, 240, 1)"
								maxW="50%"
								placeholder="Enter score"
							/>
						</GridItem>
						<GridItem
							// id="griditem"
							py={4}
							px={[ '4rem', '3rem', '2rem', '3rem', '4rem' ]}
							rowSpan={7}
							colSpan={[ 15, 15, 7, 7, 7 ]}
							// bg={bg}
						>
							<Flex>
								<Heading fontSize="3xl" fontWeight="500">
									GRE Verbal score
								</Heading>
								<Heading fontSize="3xl" fontWeight="500" color="red">
									*
								</Heading>
							</Flex>
							<Text
								color="rgba(125, 125, 125, 1)"
								py="4"
							>{`Please write "Not taken yet" if you are yet to take GRE and "Not applicable" if you don't want to take GRE test`}</Text>
							<Input
								value={greVerbal}
								onChange={e => setGreVerbal(e.target.value)}
								py="6"
								focusBorderColor="#25BAFB"
								bg="rgba(240, 240, 240, 1)"
								maxW="50%"
								placeholder="Enter score"
							/>
						</GridItem>
						<GridItem
							// id="griditem"
							py={4}
							px={[ '4rem', '3rem', '2rem', '3rem', '4rem' ]}
							rowSpan={7}
							colSpan={[ 15, 15, 7, 7, 7 ]}
							// bg={bg}
						>
							<Flex>
								<Heading fontSize="3xl" fontWeight="500">
									IELTS/TOEFL
								</Heading>
								<Heading fontSize="3xl" fontWeight="500" color="red">
									*
								</Heading>
							</Flex>
							<Text
								color="rgba(125, 125, 125, 1)"
								py="4"
							>{`Please write "Not taken yet" if you are yet to take GRE and "Not applicable" if you don't want to take GRE test`}</Text>
							<Input
								value={ieltsToefl}
								onChange={e => setIeltsToefl(e.target.value)}
								py="6"
								focusBorderColor="#25BAFB"
								bg="rgba(240, 240, 240, 1)"
								maxW="50%"
								placeholder="Enter score"
							/>
						</GridItem>
						<GridItem
							// key={i}
							// id="griditem"
							py={2}
							px={[ '4rem', '3rem', '2rem', '3rem', '4rem' ]}
							rowSpan={7}
							colSpan={[ 15, 15, 7, 7, 7 ]}
							// bg={bg}
						>
							<Flex>
								<Heading fontSize="3xl" fontWeight="500">
									Do you need GRE/IELTS/TOEFL training?
								</Heading>
							</Flex>
							<RadioGroup mt="2" onChange={setTraining} value={training} defaultValue="yes">
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
								<Button
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
								</Button>
							</Center>
						</GridItem>{' '}
					</React.Fragment>
				)}
				{pe === 4 && (
					<React.Fragment>
						{' '}
						<GridItem
							px={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
							py={[ '0.4rem', '1.5rem', '1rem', '1.5rem', '2rem' ]}
							rowSpan={12}
							colSpan={15}
							// bg={bg}
						>
							<Heading fontSize="4xl" color="rgba(19, 43, 80, 1)" textAlign="center">
								Please answer the questions below
							</Heading>
						</GridItem>
						<GridItem
							// id="griditem"
							py={8}
							px={[ '4rem', '3rem', '2rem', '3rem', '4rem' ]}
							rowSpan={7}
							colSpan={[ 15, 15, 7, 7, 7 ]}
							// bg={bg}
						>
							<Flex>
								<Heading pb="4" fontSize="3xl" fontWeight="500">
									Any work experience?
								</Heading>
								<Heading fontSize="3xl" fontWeight="500" color="red">
									*
								</Heading>
							</Flex>
							{/* <Text
								color="rgba(125, 125, 125, 1)"
								py="4"
							>{`Please write "Not taken yet" if you are yet to take GRE and "Not applicable" if you don't want to take GRE test`}</Text> */}
							<Input
								value={workEx}
								onChange={e => setWorkEx(e.target.value)}
								py="6"
								focusBorderColor="#25BAFB"
								bg="rgba(240, 240, 240, 1)"
								maxW="50%"
								placeholder="Enter score"
							/>
						</GridItem>
						<GridItem
							// id="griditem"
							py={8}
							px={[ '4rem', '3rem', '2rem', '3rem', '4rem' ]}
							rowSpan={7}
							colSpan={[ 15, 15, 7, 7, 7 ]}
							// bg={bg}
						>
							<Flex>
								<Heading pb="4" fontSize="3xl" fontWeight="500">
									Undergrad(B.tech) College/University*
								</Heading>
								<Heading fontSize="3xl" fontWeight="500" color="red">
									*
								</Heading>
							</Flex>
							{/* <Text
								color="rgba(125, 125, 125, 1)"
								py="4"
							>{`Please write "Not taken yet" if you are yet to take GRE and "Not applicable" if you don't want to take GRE test`}</Text> */}
							<Input
								value={clgUni}
								onChange={e => setClgUni(e.target.value)}
								py="6"
								focusBorderColor="#25BAFB"
								bg="rgba(240, 240, 240, 1)"
								maxW="50%"
								placeholder="Enter score"
							/>
						</GridItem>
						<GridItem
							// id="griditem"
							py={8}
							px={[ '4rem', '3rem', '2rem', '3rem', '4rem' ]}
							rowSpan={7}
							colSpan={[ 15, 15, 7, 7, 7 ]}
							// bg={bg}
						>
							<Flex>
								<Heading pb="4" fontSize="3xl" fontWeight="500">
									Number of backlogs
								</Heading>
								<Heading fontSize="3xl" fontWeight="500" color="red">
									*
								</Heading>
							</Flex>
							{/* <Text
								color="rgba(125, 125, 125, 1)"
								py="4"
							>{`Please write "Not taken yet" if you are yet to take GRE and "Not applicable" if you don't want to take GRE test`}</Text> */}
							<Input
								value={backlogs}
								onChange={e => setBacklogs(e.target.value)}
								py="6"
								focusBorderColor="#25BAFB"
								bg="rgba(240, 240, 240, 1)"
								maxW="50%"
								placeholder="Enter score"
							/>
						</GridItem>
						<GridItem
							// key={i}
							// id="griditem"
							py={8}
							px={[ '4rem', '3rem', '2rem', '3rem', '4rem' ]}
							rowSpan={7}
							colSpan={[ 15, 15, 7, 7, 7 ]}
							// bg={bg}
						>
							<Flex>
								<Heading pb="4" fontSize="3xl" fontWeight="500">
									C.G.P.A
								</Heading>
								<Heading fontSize="3xl" fontWeight="500" color="red">
									*
								</Heading>
							</Flex>

							<Input
								value={cgpa}
								onChange={e => setCgpa(e.target.value)}
								py="6"
								focusBorderColor="#25BAFB"
								bg="rgba(240, 240, 240, 1)"
								maxW="50%"
								placeholder="Enter score"
							/>
						</GridItem>
						<GridItem rowSpan={15} colSpan={15}>
							<Center>
								<Button
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
								</Button>
							</Center>
						</GridItem>{' '}
					</React.Fragment>
				)}
				{pe === 5 && (
					<React.Fragment>
						{' '}
						<GridItem
							p={[ '0.4rem', '1rem', '2rem', '2rem', '2rem' ]}
							rowSpan={12}
							colSpan={15}
							// bg={bg}
						>
							<Heading color="rgba(19, 43, 80, 1)" textAlign="center">
								What is your budget?
							</Heading>
						</GridItem>
						<GridItem rowSpan={12} colSpan={15}>
							<Flex mx="8" justifyContent="space-between" flexDirection={{ base: 'column', md: 'row' }}>
								{[ 'Under 20 Lakhs', '25 - 35 Lakhs', 'Above 35 Lakhs', 'Other' ].map((i, idx) => (
									<Box
										my="4"
										onClick={() => setBudget(i)}
										transition="all 0.3s"
										bg={
											i === budget ? (
												'linear-gradient(311.3deg, #6ADBDB 0%, #0DB3FB 97.24%)'
											) : (
												'linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 97.24%)'
											)
										}
										rounded="lg"
										p="4"
										border={i === budget ? '4px solid rgba(13, 179, 251, 1)' : '4px solid white'}
										_hover={{ boxShadow: 'base' }}
										boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)"
										key={idx}
									>
										<Center>
											<Image
												maxH="135px"
												src={
													i !== budget ? (
														`/images/budget_icon.png`
													) : (
														`/images/budget_icon_white.png`
													)
												}
												alt="country"
											/>
										</Center>
										<Text
											transition="all 0.2s ease-out"
											color={i === budget ? 'white' : 'black'}
											textAlign="center"
											fontSize="2xl"
											fontWeight="semibold"
											mt="4"
										>
											{i}
										</Text>
									</Box>
								))}{' '}
							</Flex>
						</GridItem>
						<GridItem rowSpan={15} colSpan={15}>
						
								<Flex>
									<Heading textAlign="center" ml={{ base: '4', md: '4' }} pb="4" pt="4" fontSize="2xl" fontWeight="500">
										How are you going to fund your Master’s?
									</Heading>
									<Heading fontSize="3xl" fontWeight="500" color="red">
										*
									</Heading>
								</Flex>
							
							<Center>
								<Input
									ml={{ base: '4', md: '4' }}
									value={fundMasters}
									onChange={e => setFundMasters(e.target.value)}
									py="3"
									focusBorderColor="#25BAFB"
									bg="rgba(240, 240, 240, 1)"
									maxW="20em"
									placeholder="Enter score"
								/>
							</Center>
						</GridItem>{' '}
						<GridItem rowSpan={15} colSpan={15}>
							<Center>
								<Button
									mt="16"
									color="white"
									px="8"
									mb="4"
									bg="rgba(13, 179, 251, 1)"
									_hover={{ bg: 'rgba(13, 179, 251, 0.9)' }}
									_active={{ bg: 'rgba(13, 179, 251, 0.7)' }}
									onClick={() => setPe(6)}
								>
									Next
								</Button>
							</Center>
						</GridItem>{' '}
					</React.Fragment>
				)}
				{pe === 6 && (
					<React.Fragment>
						{' '}
						<GridItem
							p={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
							rowSpan={12}
							colSpan={15}
							// bg={bg}
						>
							<Flex>
								<Heading ml={{ base: '4', md: '0' }} pb="4" fontSize="3xl" fontWeight="500">
									Which session are you applying for?
								</Heading>
								<Heading fontSize="3xl" fontWeight="500" color="red">
									*
								</Heading>
							</Flex>
						</GridItem>
						{[ 'Spring 2022', 'Fall 2022', 'Spring 2023', 'Fall 2023', 'Other' ].map((i, idx) => (
							<GridItem
								id="griditem"
								onClick={() => setSession(i)}
								my="8"
								key={idx}
								px={[ '4rem', '3rem', '2rem', '0rem', '0rem' ]}
								rowSpan={15}
								colSpan={[ 30, 30, 15, , 3 ]}
								// bg={bg}
							>
								<Center>
									<Box
										transition="all 0.3s"
										bg={
											i === session ? (
												'linear-gradient(311.3deg, #6ADBDB 0%, #0DB3FB 97.24%)'
											) : (
												'linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 97.24%)'
											)
										}
										rounded="lg"
										p="4"
										border={i === session ? '4px solid rgba(13, 179, 251, 1)' : '4px solid white'}
										_hover={{ boxShadow: 'base' }}
										boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)"
										key={idx}
									>
										<Center>
											<Image
												maxH="135px"
												src={
													i !== session ? (
														`/images/session_icon.png`
													) : (
														`/images/session_icon_white.png`
													)
												}
												alt="country"
											/>
										</Center>
										<Text
											transition="all 0.2s ease-out"
											color={i === session ? 'white' : 'black'}
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
								<Button
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
								</Button>
							</Center>
						</GridItem>{' '}
					</React.Fragment>
				)}
				{pe === 7 && (
					<React.Fragment>
						{' '}
						<GridItem
							p={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
							rowSpan={12}
							colSpan={15}
							// bg={bg}
						>
							<VStack pt="8" spacing={8}>
								<Input
									// ml={{ base: '4', md: '4' }}
									value={username}
									onChange={e => setUsername(e.target.value)}
									py="3"
									focusBorderColor="#25BAFB"
									bg="rgba(240, 240, 240, 1)"
									maxW="20em"
									placeholder="Name"
								/>
								<Input
									// ml={{ base: '4', md: '4' }}
									value={userEmail}
									onChange={e => setUserEmail(e.target.value)}
									py="3"
									focusBorderColor="#25BAFB"
									bg="rgba(240, 240, 240, 1)"
									maxW="20em"
									placeholder="Email"
								/>
								<Input
									// ml={{ base: '4', md: '4' }}
									value={userPhone}
									onChange={e => setUserPhone(e.target.value)}
									py="3"
									focusBorderColor="#25BAFB"
									bg="rgba(240, 240, 240, 1)"
									maxW="20em"
									placeholder="Phone number"
								/>
								<Checkbox color="#828282">
									I agree to all the <Link color="#0DB3FB">Terms and Conditions</Link>
								</Checkbox>
							</VStack>
						</GridItem>
						<GridItem rowSpan={12} colSpan={15}>
							<Center>
								<Button
									mt="16"
									color="white"
									px="8"
									mb="4"
									bg="rgba(13, 179, 251, 1)"
									_hover={{ bg: 'rgba(13, 179, 251, 0.9)' }}
									_active={{ bg: 'rgba(13, 179, 251, 0.7)' }}
									// onClick={() => setPe(2)}
								>
									View Profile Evavluation Report
								</Button>
							</Center>
						</GridItem>{' '}
					</React.Fragment>
				)}
			</Grid>
		</Box>
	);
}

export default One;
