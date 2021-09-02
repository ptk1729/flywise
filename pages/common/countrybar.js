import { Center, GridItem, HStack, Link } from '@chakra-ui/react';
import React from 'react';

function Countrybar() {
	return (
		<GridItem w="100%" bg="linear-gradient(90.23deg, #002541 0%, #002541 101.14%)" rowSpan="3" colSpan="12">
			<Center>
				<HStack px="2" spacing="20" py="8">
					<Link onClick={handleCountry} color="white" fontSize={{ base: 'md', md: '2xl' }} roundedTop="md">
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
			</Center>
		</GridItem>
	);
}

export default Countrybar;
