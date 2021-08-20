import { Box, Button, Center, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import Navbar from './common/navbar';
export default function Home() {
	// let bg = 'red';
	let bg = 'transparent';
	return (
		<Box>
			<Navbar />
			<Grid maxW="100vw" templateRows="repeat(12, 1fr)" templateColumns="repeat(12, 1fr)">
				<GridItem p="4rem" rowSpan={4} colSpan={6} bg={bg}>
					<Heading fontSize="5xl">
						India’s best overseas education
						<Heading fontSize="5xl" color="#0DB3FB">
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
				<GridItem rowSpan={4} colSpan={6} bg={bg}>
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
						<Box
							maxH="558px"
							maxW="425.03px"
							p="16"
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
						<Box
							maxH="558px"
							maxW="425.03px"
							p="16"
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

						<Box
							maxH="558px"
							maxW="425.03px"
							p="16"
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
					</Flex>
				</GridItem>
				<GridItem 
          backgroundRepeat="no-repeat"
          p="15rem" rowSpan={12} colSpan={12} backgroundImage="url(/images/paperplane.png)">
					<Box h="100%" w="100%">
						<Heading fontSize="4xl" my="4" textAlign="center">
							Watch this video to better understand how Flywise helps students in their Career
						</Heading>
						<Image alt="video" src="/images/thumbnail.png" />
					</Box>
				</GridItem>
				<GridItem
					rowSpan={12}
					colSpan={12}
					bg={'linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)'}
				>
					<Heading textAlign="center">We are specialized in below fields, fly with us!</Heading>
				</GridItem>
			</Grid>
		</Box>
	);
}
