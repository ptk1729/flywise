import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Center,
} from '@chakra-ui/react';
import React from 'react';

function Faq({ faq }) {
	return (
		<Center>
			<AccordionItem border="1px solid #d6d6d6" rounded="lg" bg="#F6F7F8" my="4">
				<h2>
					<AccordionButton _focus={{boxShadow:"none"}} rounded="lg" bg="#F6F7F8" _hover={{bg:"#F6F7F8"}}>
						<AccordionIcon w={8} h={8} color="#23BAFB" />{' '}
						{/* <Image mt="1" alt="arrow" src="/images/right_arrow.png" maxH="1rem" /> */}
						<Box w="50rem" flex="1" textAlign="left">
							{faq.ques}
						</Box>
					</AccordionButton>
				</h2>
				<AccordionPanel maxW="50rem" pb={4}>
					{faq.ans}
				</AccordionPanel>
			</AccordionItem>

			{/* <Flex
				mx="2"
				w={[ '80%', '30rem', '30rem', '35rem', '40rem' ]}
				rounded="xl"
				my="4"
				p="4"
				bg="rgba(246, 247, 248, 1)"
			>
				<Image mt="1" alt="arrow" src="/images/right_arrow.png" maxH="1rem" />
				<Text>{faq.ques}</Text>
			</Flex> */}
		</Center>
	);
}

export default Faq;
