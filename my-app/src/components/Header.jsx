import React from 'react'
import {Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
    <>
    
    <Button
    pos={'fixed'}
    top={4}
    left={4}
    colorScheme='purple'
    p={0}
    w={10}
    h={10}
    borderRadius={'full'}
    onClick={onOpen}
    zIndex={5}
    >
        <BiMenuAltLeft size={30}/>
    </Button>
    <Drawer zIndex={5} isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>xTUBE HUB</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button onClick={onclose} variant={'ghost'} colorScheme='purple'>
                            <Link to={'/'}> Home </Link>
                        </Button>

                        <Button onClick={onclose} variant={'ghost'} colorScheme='purple'>
                            <Link to={'/videos'}> Videos </Link>
                        </Button>

                        <Button onClick={onclose} variant={'ghost'} colorScheme='purple'>
                            <Link to={'/videos?category=free'}> Free Videos </Link>
                        </Button>

                        <Button onClick={onclose} variant={'ghost'} colorScheme='purple'>
                            <Link to={'/upload'}>Upload Video</Link>
                        </Button>

                    </VStack>
                    <HStack pos={'absolute'} bottom={10} left={0} w={'full'} justifyContent={'space-evenly'}>
                        <Button onClick={onclose} colorScheme='purple'>
                            <Link to={'/login'}>Login</Link>
                        </Button>

                        <Button onClick={onclose} colorScheme='purple' variant={"outline"}>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay>
    </Drawer>
    </>
  );
}

export default Header