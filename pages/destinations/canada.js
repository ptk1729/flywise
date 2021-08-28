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

function Canada() {
	let img_bg = '/images/canada_bg.png';
	let img_1 = '/images/canada_1.png';
	let img_2 = '/images/canada_2.png';
	let img_flag = '/images/canada_flag.png';
	let title = 'Flywise - Study in Canada';
	let main_title = 'Study in Canada';
	let topUnis = [
		'University of Toronto',

		'University of British Columbia ',

		'Mcgill University',
		'McMaster University',
		'University of Manitoba'
	];
	let student_life_tips = [
		'The topography and climate of America differ greatly.',
		'Take part in their holidays and traditions.',
		'Consistent Hard work and dedication.'
	];
	let country_guide_text =
		'Canada is a North American country. Spanning 9.98 million square kilometers (3.85 million square miles), its ten provinces and three territories reach from the Atlantic to the Pacific and northward into the Arctic Ocean. Places of interest include Niagara Falls, Stanley park, and Old Quebec.';
	let faqs = [
		{
			ques: 'Do I need to submit translated proof of vaccination? ',
			ans: `Yes the proof of vaccination is still required by some Canadian universities but not all.						`
		},
		{
			ques: 'What happens if I do not submit proof of vaccination status by the deadline?',
			ans: ` If you don't follow their deadlines as priority your application might get denied. Try to avoid that and submit your documents on an early bases.`
		},
		{
			ques: 'Are there any specific scholarships for international students?   ',
			ans: ` Yes there are many scholarships available for international students some of them are provided by government of students country too.`
		},
		{
			ques: 'Will I be able to take online classes and keep my immigration status active?',
			ans: `Yes it is possible for you to continue your online classes and keep immigration status active at the same time.`
		},
		{
			ques: 'What are the requirements for admission into Canadian universities?',
			ans: `Each university sets its own admission requirements but here are the most common ones:
						• Graduation certificate/diploma.
						• Filled-in application form.
						• Resume or CV.
						• A letter of intent.
						• Evidence that you can support yourself financially during your studies in Canada.
						`
		},
		{
			ques:
				'I currently live in a country that I am not a citizen of. Where should I apply for a study permit in my country of citizenship or my country of residence?',
			ans: `if you are legally admitted to the country you are currently in, you can apply at your nearest visa application centre (VAC)`
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
							'translate(0,-20rem)',
							'translate(0,-28rem)'
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

export default Canada;
