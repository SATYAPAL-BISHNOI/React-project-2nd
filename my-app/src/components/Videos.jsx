import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Videos = () => {
    
  return (
    <Stack direction={['coluam','row']} h={'100vh'}>
        <VStack w={'full'}>
            <video src='https://vimeo.com/954512319'
            controls
            controlsList='nodownload'
            style={{
                borderRadius:'0% 2% 2% 0%',
                width: '100%',
            }}></video>
            <VStack alignItems={'flex-start'} w={'full'} p={8} overflowY={'auto'}>
            <Heading>
                Semple video for first vidio
            </Heading>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent euismod dapibus risus, in efficitur orci.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </Text>
        </VStack>
        </VStack>
        
        <VStack w={['full','xl']} alignItems={'stretch'} p={8} spacing={8} overflowY={'auto'}>
            <Button variant={'ghost'} colorScheme='purple'>
                This is Video 1
            </Button>
        </VStack>
    </Stack>
  )
}

export default Videos