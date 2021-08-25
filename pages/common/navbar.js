import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	Image,
	Center,
	Popover,
	PopoverTrigger,
	Portal,
	PopoverContent,
	PopoverHeader,
	PopoverCloseButton,
	PopoverBody,
	PopoverFooter,
	Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import NLink from 'next/link';
import React from 'react';
const Links = [
	{ link: 'Test Prep', to: '/' },
	{ link: 'Profile Evaluation', to: '/pe' },
	{ link: 'Services', to: '/' },
	{ link: 'Mentors', to: '/' }
	// { link: 'Destinations', to: '/destinations' },
	// { link: 'Courses', to: '/' }
];

const NavLink = props => (
	<NLink href={props.to}>
		<Link
			className={props.link === props.outline ? `bottom-outline` : ``}
			px={2}
			py={1}
			color={props.link === props.outline ? `blackAlpha.900` : `blackAlpha.700`}
			roundedTop={'md'}
			_hover={{
				textDecoration: 'none',
				bg: useColorModeValue('gray.200', 'gray.700')
			}}
		>
			{props.link}
		</Link>
	</NLink>
);

const AllNavLinks = ({outline}) => {
	const initRef = React.useRef();
	
	return (
	<React.Fragment>
		{Links.map((link, idx) => <NavLink outline={outline} to={link.to} link={link.link} key={idx} />)}
		<Popover placement="bottom" closeOnBlur={true} initialFocusRef={initRef}>
			{({ isOpen, onClose }) => (
				<React.Fragment>
					<PopoverTrigger>
						<Link
							className={outline === "Destinations"?`bottom-outline`:``}
							px={2}
							py={1}
							color={`blackAlpha.900`}
							roundedTop={'md'}
							_hover={{
								textDecoration: 'none'
								// bg: useColorModeValue('gray.200', 'gray.700')
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
										<NLink _hover={{ cursor: 'pointer' }} key={idx} href={`/destinations/${i}`}>
											<Box>
												<Image maxH="3rem" src={`/images/${i}_flag.png`} alt="country" />
												<Text textAlign="center" fontSize="xs">
													{i.toLocaleUpperCase()}
												</Text>
											</Box>
										</NLink>
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
		<NLink href={'/'}>
			<Link
				// className={props.link === props.outline ? `bottom-outline` : ``}
				px={2}
				py={1}
				color={`blackAlpha.700`}
				roundedTop={'md'}
				_hover={{
					textDecoration: 'none',
					bg: useColorModeValue('gray.200', 'gray.700')
				}}
			>
				Courses
			</Link>
		</NLink>
	</React.Fragment>
)};
export default function Navbar({ outline }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box px={4}>
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
						<Image alt="logo" src="/images/logo.svg" />
					</Box>
				</HStack>
				<Center>
					<HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
						<AllNavLinks outline={outline} />
					</HStack>
				</Center>
				<Flex alignItems={'center'}>
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
