import { Box, Button, Flex, GridItem, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

function Footer() {
	let date = new Date();
	return (
		<GridItem bg="rgba(230, 246, 255, 1)" rowSpan={12} colSpan={12}>
			<Flex p={[ '1rem', '1rem', '2rem', '3rem', '4rem' ]} flexDirection={{base:'column', md:"row"}} justifyContent="space-between">
				<Image maxH="4rem" alt="logo" src="/images/logo.svg" />
				<Box>
					<Flex justifyContent="space-evenly">
						{[
							{ link: 'Home', to: '/' },
							{ link: 'About', to: '/' },
							{ link: 'Services', to: '/' },
							{ link: 'News', to: '/' },
							{ link: 'Products', to: '/' }
						].map((i, idx) => (
							<Button
								my={{base:"2", md:"2"}}
								mx={{base:"0", md:"4"}}
								// ={{base:"1", md:"4"}}
								_hover={{
									color:"black",
									bg:"blue.100"

								}}
								_focus={{
									color:"white",
									bg:"blue.400"
								}}
								color="rgba(29, 29, 29, 1)"
								colorScheme="blackAlpha"
								variant="ghost"
								key={idx}
							>
								{i.link}
							</Button>
						))}
					</Flex>
				</Box>
				<Button
					variant={'solid'}
					// colorScheme={'teal'}
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
					mr={4}
					rounded="full"

					// leftIcon={<AddIcon />}
				>
					Contact Us
				</Button>
			</Flex>
			<hr />
			<Text textAlign="center" color="rgba(153, 153, 153, 1)" py="8">
				Copyright © {new Date().getFullYear()}
			</Text>
		</GridItem>
	);
}

export default Footer;
