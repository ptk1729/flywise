import { Box, Center, Flex, Grid, GridItem, Heading, Image, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Footer from './common/footer';
import Navbar from './common/navbar';
const MENTORS = [
	{
		//1
		name: 'Pavan Kumar Reddy Kanjula',
		image: 'PavanKumarReddyKanjula',
		position: 'Software Engineer',
		uni: 'California State University, Eastbay',
		uniImage: 'CaliforniaStateUniversity,Eastbay',
		company: 'oracle'
	},
	{
		//2
		name: 'Rahul Narakula',
		image: 'RahulNarakula',
		position: 'Sr Data Engineer',
		uni: 'Rutgers University, New Jersey',
		uniImage: 'RutgersUniversity,NewJersey',
		company: 'compass'
	},
	{
		//3
		name: 'Aditya Nannapaneni',
		image: 'AdityaNannapaneni',
		position: 'Applied scientist',
		uni: 'Northeastern University, Boston',
		uniImage: 'NortheasternUniversity,Boston',
		company: 'aws'
	},
	{
		//4
		name: 'Phani Chandra Sourabh Reddy',
		image: 'PhaniChandraSourabhReddy',
		position: 'Software Engineer',
		uni: 'University of South Florida, Florida',
		uniImage: 'UniversityofSouthFlorida,Florida',
		company: 'amazon'
	},
	{
		//5
		name: 'Puneetha Reddy Kanjula',
		image: 'PuneethaReddyKanjula',
		position: 'Sr Technical Program Manager',
		uni: 'University of Hartford, Hartford',
		uniImage: 'UniversityofHartford,Hartford',
		company: 'playstation'
	},
	{
		//6
		name: 'Bipin Kumar Reddy Algubelli',
		image: 'BipinKumarReddyAlgubelli',
		position: 'Data Engineer',
		uni: 'Southern Illinois University, Wisconsin',
		uniImage: 'SouthernIllinoisUniversity,Wisconsin',
		company: 'facebook'
	},
	{
		//7
		name: 'Vamshi Mylaram',
		image: 'VamshiMylaram',
		position: 'Devops Engineer',
		uni: 'California State University, Fullerton',
		uniImage: 'CaliforniaStateUniversity,Fullerton',
		company: 'playstation'
	},

	{
		//8
		name: 'Kunal Teeda',
		image: 'KunalTeeda',
		position: 'Software Engineer',
		uni: 'Northeastern University, Boston',
		uniImage: 'NortheasternUniversity,Boston',
		company: 'amazon'
	}
];
function Mentors() {
	return (
		<Box>
            {/* <title></title> */}
			<Navbar outline="Mentors" />
			<Grid
				bg="rgba(247, 247, 250, 1)"
				overflow="hidden"
				maxW="100vw"
				templateRows="repeat(12, 1fr)"
				templateColumns="repeat(12, 1fr)"
			>
				<GridItem
					mb="10rem"
					// py={[ '0.4rem', '1rem', '2rem', '3rem', '4rem' ]}
					// pl={[ '0.4rem', '1rem', '3rem', '6rem', '12rem' ]}
					// pr={[ '0.4rem', '1rem', '1rem', '2rem', '3rem' ]}
					rowSpan={12}
					colSpan={12}
					bg={'url(/images/mentors/mentors_bg.png)  no-repeat center center'}
					backgroundSize="cover"
				>
					{/* {console.log(w.env.PUBLIC_URL)} */}
					<Heading
						color="white"
						textAlign="center"
						pt={[ '8', '8', '8', '12', '16' ]}
						pb={[ '2', '2', '4', '8', '8' ]}
						fontSize={[ '2xl', '3xl', '4xl', '4xl', '5xl' ]}
						fontWeight="600"
					>
						Meet our world class mentors!
					</Heading>
					<Text
						textAlign="center"
						px={[ '4', '8', '16', '16', '32' ]}
						mx={[ '4', '8', '16', '16', '32' ]}
						fontSize={[ 'lg', 'lg', 'xl', 'xl', '2xl' ]}
						py={[ '8', '8', '8', '12', '12' ]}
						color="white"
						fontWeight="400"
					>
						Our mentors are top performers in their field at top tech companies who themselves have been
						through the same phase as you. Our mentorship won’t stop with getting an admit abroad. We will
						be with you until you get your job and we will continue our journeys together and build a great
						community
					</Text>
					<Center>
						<Flex
							flexDirection={{ base: 'column', md: 'row' }}
							zIndex="auto"
							transform={{ base: 'translate(0,0)', md: 'translate(0,6.5rem)' }}
						>
							{[
								{ text: 'Guidance & Training', image: 'images/guidance.png' },
								{ text: 'Technical Expertise', image: 'images/TechnicalExpertise.png' },
								{ text: 'Industry Connection', image: 'images/IndustryConnection.png' }
							].map((box, idx) => (
								<Box
									boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
									_hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
									transition="all 0.3s"
									mx="8"
									my="8"
									rounded="2xl"
									py="8"
									key={idx}
									minW="20rem"
									bg="linear-gradient(101.82deg, #4080D3 0%, #6ADBDB 105.94%)"
								>
									<Center>
										<Image maxH="64px" px="8" src={box.image} alt={box.text} />
									</Center>
									<Text color="white" fontSize="lg" fontWeight="600" textAlign="center" px="8">
										{box.text}{' '}
									</Text>
								</Box>
							))}
						</Flex>
					</Center>
				</GridItem>
				<GridItem mb="8" colSpan="12" rowSpan="12">
					<Heading textAlign="center">Our Mentors</Heading>
				</GridItem>
				{MENTORS.map((mentor, idx) => (
					<GridItem
						boxShadow="base"
						_hover={{ boxShadow: 'lg' }}
						transition="all 0.2s"
						rounded="md"
						mb="16"
						mx="8"
						bg="white"
						key={idx}
						colSpan={[ '12', '12', '6', '4', '3' ]}
						rowSpan={[ '12', '12', '6', '6', '6' ]}
					>
						<MentorCard mentor={mentor} />
					</GridItem>
				))}{' '}
			</Grid>
			<Footer />
		</Box>
	);
}

export default Mentors;

function MentorCard({ mentor }) {
	return (
		<VStack py="8" spacing="8">
			<Center>
				<Image maxH="4rem" src={`/images/mentors/${mentor.image}.png`} alt={mentor.name} />
			</Center>
			<Heading px="4" fontSize={[ 'lg', 'lg', 'xl', 'xl', 'xl' ]} textAlign="center">
				{mentor.name}
			</Heading>
			<Link fontSize={[ 'lg' ]} textDecoration="underline" textAlign="center">
				{mentor.position}
			</Link>
			<Flex px="4" justifyContent="space-between" alignItems="center">
				<Image mx="4" src={`/images/mentors/${mentor.uniImage}.png`} alt={mentor.uni} maxH="3rem" />
				<Text fontSize={'sm'} textAlign="center">
					{mentor.uni}
				</Text>
			</Flex>
			<Image src={`/images/mentors/${mentor.company}.png`} alt={mentor.company} maxH="3rem" />
		</VStack>
	);
}
