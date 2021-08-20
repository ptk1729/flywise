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
	Center
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = [
	{ link: 'Test Prep', to: '/' },
	{ link: 'Profile Evaluation', to: '/' },
	{ link: 'Services', to: '/' },
	{ link: 'Mentors', to: '/' },
	{ link: 'Destinations', to: '/' },
	{ link: 'Courses', to: '/' }
];

const NavLink = props => (
	<Link
		px={2}
		py={1}
		rounded={'md'}
		_hover={{
			textDecoration: 'none',
			bg: useColorModeValue('gray.200', 'gray.700')
		}}
		href={props.to}
	>
		{props.link}
	</Link>
);

export default function Navbar() {
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
							{Links.map((link, idx) => <NavLink to={link.to} link={link.link} key={idx} />)}
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
					{/* <Menu>
						<MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
							<Avatar
								size={'sm'}
								src={
									'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
								}
							/>
						</MenuButton>
						<MenuList>
							<MenuItem>Link 1</MenuItem>
							<MenuItem>Link 2</MenuItem>
							<MenuDivider />
							<MenuItem>Link 3</MenuItem>
						</MenuList>
					</Menu> */}
				</Flex>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: 'none' }}>
					<Stack as={'nav'} spacing={4}>
						{Links.map((link, idx) => <NavLink to={link.to} link={link.link} key={idx} />)}
					</Stack>
				</Box>
			) : null}
		</Box>
	);
}
