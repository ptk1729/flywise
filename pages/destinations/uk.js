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
import FaqList from '../common/faqs';
import Faq from '../common/faqs';
import Footer from '../common/footer';
import Navbar from '../common/navbar';

function UK() {
	let img_bg = '/images/uk_bg.png';
	let img_1 = '/images/uk_1.png';
	let img_2 = '/images/uk_2.png';
	let img_flag = '/images/uk_flag.png';
	let title = 'Flywise - Study in UK';
	let main_title = 'Study in UK';

	let topUnis = [
		'University of Derby',
		'University of Bradford',
		'University of Central Lancashire.',
		'University of Oxford',
		'Cambridge University'
	];
	let student_life_tips = [
		'The topography and climate of America differ greatly.',
		'Take part in their holidays and traditions.',
		'Consistent Hard work and dedication.'
	];
	let faqs = [
		{
			ques: 'Do students tend to work part-time during their studies?',
			ans:
				'A part-time job is a great way to cover your study expenses and depending on how well-paid the job is, you can earn some pocket money as well.'
		},
		{
			ques: 'What is the living cost while studying in UK.?',
			ans:
				'In popular cities like London, monthly living costs can easily jump over 1,500 EUR (1,360 GBP). In smaller towns, you can get by with a budget of 700–1,200 EUR (635–1,040 GBP) per month.'
		},
		{
			ques: 'What are UK student halls?',
			ans:
				'UK student halls or halls of  residence provides students a living accommodation with all necessary facilities. First year students prefer to live in studeng halls.'
		},
		{
			ques: 'Will I get homework like in High School?',
			ans: `Although college students don't have work due every day, they have a lot more important essays and tests than in high school.`
		},
		{
			ques: 'Will I get language support if I am still working on improving my language?',
			ans: `you can still study abroad in a country even if you have no prior knowledge of that country's language or cultural norms.`
		},
		{
			ques: 'What happens during freshers’ week?',
			ans: `Traditionally, freshers' week, often referred to as welcome week is an incredibly busy time, filled with social events, fairs and the completion of important administrative tasks.`
		}
	];
	let country_guide_text =
		"The UK is a country in northeastern Europe, Includes the island of Ireland and many smaller islands within the British isles. Nominal GDP ranks the United Kingdom as the world's fifth-largest economy, but purchasing power parity ranks it 10th largest. During the 19th and early 20th centuries, the United Kingdom was the world's leading power.";
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
				<GridItem w="100%" bg="linear-gradient(90.23deg, #002541 0%, #002541 101.14%)" rowSpan="3" colSpan="12">
					<Center>
						<HStack px="2" spacing={[ '2', '4', '12', '16', '20' ]} py="8">
							<Link
								onClick={handleCountry}
								color="white"
								fontSize={{ base: 'md', md: '2xl' }}
								roundedTop="md"
							>
								COUNTRY GUIDE
							</Link>
							<Link
								onClick={handleTopUni}
								color="white"
								fontSize={{ base: 'md', md: '2xl' }}
								roundedTop="md"
							>
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
							<Link
								onClick={handleFaqs}
								color="white"
								fontSize={{ base: 'md', md: '2xl' }}
								roundedTop="md"
							>
								FAQS
							</Link>
						</HStack>
					</Center>
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
					<FaqList faqs={faqs} />

				</GridItem>
				<Footer />
			</Grid>
		</Box>
	);
}

export default UK;
