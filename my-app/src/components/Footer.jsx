import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend,AiOutlineYoutube,AiOutlineGithub,AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={16} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={2} >
                <Heading size='md' textTransform={'uppercase'}>
                    Subscribe to get More update
                </Heading>
                <HStack borderBottom={'2px solid white'} py={2}>
                    <Input type='Email' placeholder='Enter Email Here...'
                    border={'none'}
                    borderRadius={'15px 0 0 15px'}
                    outline={'none'}
                    />
                    <Button
                    type='submit'
                    p={'0'}
                    colorScheme='purple'
                    variant={'ghost'}
                    borderRadius={'0 15px 15px 0'}
                    >
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>

            {/*  */}
            {/*  */}
            {/*  */}

            <VStack w={'full'}
            borderLeft={['none','1px solid white']}
            borderRight={['none','1px solid white']}
            borderRadius={8}
            >
                <Heading textTransform={'uppercase'} color={'purple'} textAlign={'center'}>
                    VIDeo hub
                </Heading>
                <Text>
                    @All Right Received
                </Text>
                <Text>By-Satyapal</Text>
            </VStack>
            <VStack w={'full'}
            >
                <Heading size={'md'} textTransform={'uppercase'}>
                    Follow Us
                </Heading>
                
                <Button variant={'link'} colorScheme='purple'>
                        <a href="http://youtube.com/video-hub/pre/"><AiOutlineYoutube size={30}/></a>
                </Button>
                <Button variant={'link'} colorScheme='purple'>
                        <a href="https://github.com/SATYAPAL-BISHNOI/"><AiOutlineGithub size={30}/></a>
                </Button>
                <Button variant={'link'} colorScheme='purple'>
                        <a href="http://instagram.com/video-hub/page/"><AiOutlineInstagram size={30}/></a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer