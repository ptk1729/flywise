import {
	Accordion,
	Box,
	Center,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Image,
	Link,
	ListItem,
	OrderedList,
	Text,
	UnorderedList
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import Faq from '../common/faqs';
import Footer from '../common/footer';
import Navbar from '../common/navbar';

function Australia() {
	let img_bg = '/images/australia_bg.png';
	let img_1 = '/images/australia_1.png';
	let img_2 = '/images/australia_2.png';
	let img_flag = '/images/australia_flag.png';
	let title = 'Flywise - Study in Australia';
	let main_title = 'Study in Australia';
	let topUnis = [
		'Monash University Melbourne ',
		'The University of Sydney ',
		'University of Melbourne ',
		'The University of Queensland',
		'Curtin University'
	];
	let student_life_tips = [
		'The topography and climate of America differ greatly.',
		'Take part in their holidays and traditions.',
		'Consistent Hard work and dedication.'
	];
	let country_guide_text =
		"Australia is the world's largest island and smallest continent with beautiful beaches and amazing national parks of Australia has something for everyone many international students travel around Australia using their student visa which is a great opportunity other than that Australia is rich in culture which will make you fall in love with this beautiful country more";
	let faqs = [
		{
			ques: 'Can students work during their studies in Australia?',
			ans: `Ofcourse, working as a student will help to gain extra money to pay your own bills and some companies provide flexible job hours for students like starbucks. `
		},

		{
			ques: 'Which English language tests are accepted by Australian institutions?',
			ans: `Few English language tests acceptable in Australia are :
		International English Language Testing System (IELTS)
		Test of English as a Foreign Language (TOEFL) internet-based test (paper-based test is accepted from limited countries)
		Cambridge English: Advanced (CAE)
		Pearson Test of English (PTE) Academic.
		`
		},

		{
			ques: 'What are the accommodation options available in Australia? ',
			ans: `There are four main types of student accommodation in Australia: purpose-built student housing, homestay, private rentals and residential colleges. Some universities may offer some different options, but they will usually fall under these categories in some way.`
		},

		{
			ques: 'what are some interesting facts about Australian universities?',
			ans: `Australia has an outstanding higher education system. With over 22,000 courses across 1,100 institutions, our system is ranked 8th in the Universitas 2019 U21 Ranking of National Higher Education Systems, higher than France, Germany, Norway and Japan.`
		},

		{
			ques: 'Can students work during studies in Australia? ',
			ans: `Yes, if a student is not able to visit physically then he/ she can apply for online courses.`
		},

		{
			ques: 'What all things i should carry with me according to climate conditions there?',
			ans: `Australia has a more tropical influenced climate, hot and humid in the summer, and quite warm and dry in the winter, while the southern parts are cooler with mild summers and cool, sometimes rainy winters. Its better to carry your stuff according to climate conditions.`
		}
	];
	const countryGuide = useRef(null);
	const topUni = useRef(null);
	const student = useRef(null);
	const faq = useRef(null);
	function handleCountry() {
		countryGuide.current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start'
		});
	}
	function handleTopUni() {
		topUni.current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start'
		});
	}
	function handleStudentLife() {
		student.current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start'
		});
	}
	function handleFaqs() {
		faq.current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start'
		});
	}
	return (
		<Box>
			<title>{title}</title>
			<Navbar outline="Destinations" />
			<Grid overflow="hidden" maxW="100vw" templateRows="repeat(12, 1fr)" templateColumns="repeat(12, 1fr)">
				<GridItem overflow="hidden" rowSpan={12} colSpan={12}>
					<Box h="100%">
						<Image src={img_bg} alt="usa" />
					</Box>
					<HStack
						h="0"
						transform={[
							'translate(0,-8rem)',
							'translate(0,-10rem)',
							'translate(0,-16rem)',
							'translate(0,-24rem)',
							'translate(0,-32rem)'
						]}
						zIndex="20"
						pl="12"
						spacing="8"
					>
						<Image src={img_flag} alt="flag" maxH={[ '1.8rem', '2.4rem', '2.8rem', '3.4rem', '4.8rem' ]} />
						<Heading color="white">{main_title}</Heading>
					</HStack>
				</GridItem>
				<GridItem bg="linear-gradient(90.23deg, #002541 0%, #002541 101.14%)" rowSpan="3" colSpan="12">
					<HStack px="2" w="100%" justifyContent="space-around" py="8">
						<Link
							onClick={handleCountry}
							color="white"
							fontSize={{ base: 'md', md: '2xl' }}
							roundedTop="md"
						>
							COUNTRY GUIDE
						</Link>
						<Link onClick={handleTopUni} color="white" fontSize={{ base: 'md', md: '2xl' }} roundedTop="md">
							TOP UNIVERSITIES
						</Link>
						<Link
							onClick={handleStudentLife}
							color="white"
							fontSize={{ base: 'md', md: '2xl' }}
							roundedTop="md"
						>
							STUDENT LIFE
						</Link>
						<Link onClick={handleFaqs} color="white" fontSize={{ base: 'md', md: '2xl' }} roundedTop="md">
							FAQS
						</Link>
					</HStack>
				</GridItem>

				<GridItem ref={countryGuide} rowSpan="12" colSpan="12">
					<Flex flexDirection={{ base: 'column', md: 'row' }} w="100%" justifyContent="space-around" py="8">
						<Box my="4">
							<Heading
								my="4"
								px={[ '4', '4', '4', '16', '32' ]}
								textAlign={{ base: 'center', md: 'left' }}
							>
								Country Guide...
							</Heading>
							<Text
								my="4"
								fontSize={{ base: 'md', md: '2xl' }}
								color="rgba(139, 139, 139, 1)"
								px={[ '4', '4', '4', '16', '32' ]}
							>
								{country_guide_text}
							</Text>
						</Box>
						<Image px={[ '4', '4', '4', '6', '8' ]} maxH="20rem" src={img_1} alt="usa" />
					</Flex>
				</GridItem>

				<GridItem
					background="linear-gradient(180deg, rgba(230, 246, 255, 0.6) 41.47%, rgba(255, 255, 255, 0) 100%)"
					rowSpan="12"
					colSpan="12"
					ref={topUni}
					mt="16"
					py="16"
				>
					<Flex flexDirection={{ base: 'column', md: 'row' }} w="100%" justifyContent="space-around" py="8">
						<Image px={[ '4', '4', '4', '6', '8' ]} maxH="20rem" src={img_2} alt="usa" />

						<Box pl={{ base: '8', md: '2' }} my="4">
							<Heading
								my="4"
								// px={[ '4', '4', '4', '16', '32' ]}
								textAlign={{ base: 'left', md: 'left' }}
							>
								# Top Universities
							</Heading>
							<OrderedList>
								{topUnis.map((i, idx) => (
									<ListItem
										my="1"
										key={idx}
										fontSize={{ base: 'md', md: '2xl' }}
										color="rgba(139, 139, 139, 1)"
										// px={[ '4', '4', '4', '16', '32' ]}
									>
										{i}
									</ListItem>
								))}
							</OrderedList>
						</Box>
					</Flex>
				</GridItem>
				<GridItem
					// minH="40vh"
					ref={student}
					py="4rem"
					background="url(/images/student_life.png) no-repeat center center"
					rowSpan="12"
					colSpan="12"
				>
					{/* <Image src="/images/student_life.png" alt="life" /> */}
					<Center>
						<Flex pt="2rem">
							<Image h="3rem" src="/images/student_cap_icon.png" alt="students" />{' '}
							<Heading mx="4" mt="1" color="white">
								Student&apos;s Life
							</Heading>
						</Flex>
					</Center>

					<Text py="8" textAlign="center" color="white" fontSize="2xl">
						Things to keep in mind as an international student in the USA :
					</Text>
					<Center>
						<UnorderedList>
							{student_life_tips.map((i, idx) => (
								<ListItem key={idx} color="white" fontSize="2xl" my="8">
									{i}
								</ListItem>
							))}
						</UnorderedList>
					</Center>
				</GridItem>
				<GridItem
					ref={faq}
					rowSpan={12}
					colSpan={12}
					// colSpan={{base: 12, md:6}}
					bg={'linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)'}
					pb="16"
				>
					<Heading my={[ '2', '4', '8', '16', '16' ]} textAlign="center">
						FAQs
					</Heading>
					<Accordion allowToggle>{faqs.map((faq, idx) => <Faq key={idx} faq={faq} />)}</Accordion>
				</GridItem>
				<Footer />
			</Grid>
		</Box>
	);
}

export default Australia;
