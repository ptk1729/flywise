import {
	Box,
	Flex,
	HStack,
	Link,
	IconButton,
	Button,
	useDisclosure,
	ModalOverlay,
	Modal,
	Stack,
	Image,
	Center,
	Popover,
	PopoverTrigger,
	Portal,
	PopoverContent,
	PopoverBody,
	Text,
	GridItem,
	useMediaQuery
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import React from 'react';
const Links = [
	{ link: 'Test Prep', to: '/testprep' },
	{ link: 'Profile Evaluation', to: '/profile-evaluation' },
	{ link: 'Services', to: '/#services' },
	{ link: 'Mentors', to: '/mentors' }
	// { link: 'Destinations', to: '/destinations' },
	// { link: 'Courses', to: '/' }
];

const NavLink = ({ to, link, outline }) => (
	<NextLink passHref href={to}>
		<Link
			// className={props.link === props.outline ? `bottom-outline` : ``}
			px={2}
			py={1}
			roundedTop={'md'}
			color={link === outline ? `rgba(41, 82, 134,1)` : `blackAlpha.700`}
			borderBottom={link === outline ? `1px solid rgba(41, 82, 134,0.8)` : `1px solid rgba(41, 82, 134,0)`}
			_hover={{
				textDecoration: 'none',
				bg: 'gray.100',
				color: 'rgba(41, 82, 134,1)',
				borderBottom: '1px solid rgba(41, 82, 134,0.8)'
			}}
		>
			{link}
		</Link>
	</NextLink>
);

const AllNavLinks = ({ outline }) => {
	const initRef = React.useRef();

	return (
		<React.Fragment>
			{Links.map((link, idx) => <NavLink outline={outline} to={link.to} link={link.link} key={idx} />)}
			<Popover placement="bottom" closeOnBlur={true} initialFocusRef={initRef}>
				{({ isOpen, onClose }) => (
					<React.Fragment>
						<Modal isOpen={isOpen}>
							<ModalOverlay zIndex="1" />
						</Modal>
						<PopoverTrigger>
							<Link
								// className={outline === 'Destinations' ? `bottom-outline` : ``}
								px={2}
								py={1}
								borderBottom={
									'Destinations' === outline ? (
										`1px solid rgba(41, 82, 134,0.8)`
									) : (
										`1px solid rgba(41, 82, 134,0)`
									)
								}
								color={outline === 'Destinations' ? `rgba(41, 82, 134,1)` : `blackAlpha.700`}
								roundedTop={'md'}
								_hover={{
									textDecoration: 'none',
									borderBottom: '1px solid rgba(0,0,0,0.8)',
									bg: 'gray.200'
								}}
							>
								Destination
							</Link>
						</PopoverTrigger>
						<Portal zIndex="2">
							<PopoverContent h="5rem" w="25rem">
								{/* <PopoverHeader>This is the header</PopoverHeader> */}
								{/* <PopoverCloseButton /> */}
								<PopoverBody>
									<HStack justifyContent="space-evenly">
										{[ 'usa', 'australia', 'canada', 'uk' ].map((i, idx) => (
											<NextLink
												_hover={{ cursor: 'pointer' }}
												key={idx}
												href={`/destinations/${i}`}
											>
												<Box>
													<Image maxH="3rem" src={`/images/${i}_flag.png`} alt="country" />
													<Text textAlign="center" fontSize="xs">
														{i.toLocaleUpperCase()}
													</Text>
												</Box>
											</NextLink>
										))}
									</HStack>
									{/* <Button mt={4} colorScheme="blue" onClick={onClose} ref={initRef}>
													Close
												</Button> */}
								</PopoverBody>
								{/* <PopoverFooter>This is the footer</PopoverFooter> */}
							</PopoverContent>
						</Portal>
					</React.Fragment>
				)}
			</Popover>
			<NavLink outline={''} to={'/courses'} link={'Courses'} />
			{/* <NLink href={}>
				<Link
					// className={props.link === props.outline ? `bottom-outline` : ``}
					px={2}
					py={1}
					color={`blackAlpha.700`}
					roundedTop={'md'}
					borderBottom= '1px solid rgba(41, 82, 134,0)'
					_hover={{
						textDecoration: 'none',
						bg: 'gray.100',
						color:"rgba(41, 82, 134,1)",
						borderBottom: '1px solid rgba(41, 82, 134,0.8)'
					}}
				>
					Courses
				</Link>
			</NLink> */}
		</React.Fragment>
	);
};
export default function Navbar({ outline }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [ isLargerThan769 ] = useMediaQuery('(min-width: 769px)');
	return (
		<Box maxW="100vw" overflow="hidden" boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)" px={0}>
			<title>{outline}</title>
			<Flex
				overflow="hidden"
				maxW="100vw"
				px={[ '0', '10', '20', '30', '40' ]}
				h={32}
				alignItems={'center'}
				justifyContent={'space-between'}
			>
				<HStack spacing={8} alignItems={'center'}>
					<Box>
						<NextLink href="/">
							<Image _hover={{ cursor: 'pointer' }} maxH="5rem" alt="logo" src="/images/logo.svg" />
						</NextLink>
					</Box>
				</HStack>
				{isLargerThan769 && (
					<Center>
						<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
							<AllNavLinks outline={outline} />
						</HStack>
					</Center>
				)}
				<Flex alignItems={'center'}>
					<NextLink href="/contact-us">
						<Button
							variant={'solid'}
							// colorScheme={'teal'}
							size={{ base: 'sm', md: 'md' }}
							py={[ '2', '2', '2', '2', '2' ]}
							color="white"
							fontWeight="semibold"
							px={[ '2', '6', '6', '6', '6' ]}
							
							colorScheme="blue"
							mr={4}
							rounded="full"
						>
							Contact Us
						</Button>
					</NextLink>
				</Flex>
				<IconButton
				mr="2"
					size={'md'}
					icon={isOpen ? <CloseIcon h="1.3rem" w="1.3rem" /> : <HamburgerIcon h="1.6rem" w="1.6rem" />}
					aria-label={'Open Menu'}
					display={{ md: 'none' }}
					onClick={isOpen ? onClose : onOpen}
					bg="transparent"
					_hover={{
						bg: 'transparent'
					}}
					_focus={{
						bg: 'transparent'
					}}
					_active={{
						bg: 'transparent'
					}}
				/>
			</Flex>
			<Box overflow="hidden" maxW="100vw">
				{isOpen ? (
					<Box pb={4} display={{ md: 'none' }}>
						<Stack alignItems="center" as={'nav'} spacing={2}>
							<AllNavLinks outline={outline} />
						</Stack>
					</Box>
				) : null}
			</Box>
		</Box>
	);
}
