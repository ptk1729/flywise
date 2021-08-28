import {
	Box,
	Flex,
	HStack,
	Link,
	IconButton,
	Button,
	useDisclosure,
	useColorModeValue,
	Stack,
	Image,
	Center,
	Popover,
	PopoverTrigger,
	Portal,
	PopoverContent,
	PopoverBody,
	Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import React from 'react';
const Links = [
	{ link: 'Test Prep', to: '/' },
	{ link: 'Profile Evaluation', to: '/profile-evaluation' },
	{ link: 'Services', to: '/' },
	{ link: 'Mentors', to: '/' }
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
								color={
									outline === 'Destinations' ? `rgba(41, 82, 134,1)` : `blackAlpha.700`
								}
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
						<Portal>
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
			<NavLink outline={''} to={'/'} link={'Courses'} />
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

	return (
		<Box boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)" px={4}>
			<Flex h={32} alignItems={'center'} justifyContent={'space-between'}>
				<IconButton
					size={'md'}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={'Open Menu'}
					display={{ md: 'none' }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack spacing={8} alignItems={'center'}>
					<Box>
						<NextLink href="/">
							<Image _hover={{ cursor: 'pointer' }} maxH="5rem" alt="logo" src="/images/logo.svg" />
						</NextLink>
					</Box>
				</HStack>
				<Center>
					<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
						<AllNavLinks outline={outline} />
					</HStack>
				</Center>
				<Flex alignItems={'center'}>
					<NextLink href="/contact-us">
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
					</NextLink>
				</Flex>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: 'none' }}>
					<Stack as={'nav'} spacing={4}>
						<AllNavLinks outline={outline} />
					</Stack>
				</Box>
			) : null}
		</Box>
	);
}
