import { Box, Container, Heading, Image, Stack ,Text} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'


    const HeadingOption = {
        pos:'absolute',
        left:'50%',
        top:'20%',
        transform:'translate(-50%,-50%)',
        textTransform:"uppercase",
        p:'2',
        size:'2xl',
    }


const Home = () => {
  return (
    <>
    <Carousel 
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false} 
    >
        <Box w={'full'} h={'100vh'}>
            <Image src={img1}/>
            <Heading borderRadius={30} bgColor={'blackAlpha.500'} color={"white"} {...HeadingOption}>
                watch the future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2}/>
            <Heading borderRadius={30} bgColor={'whiteAlpha.700'} color={"black"}{...HeadingOption}>
                future of Gaming
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3}/>
            <Heading borderRadius={30} bgColor={'whiteAlpha.700'} color={"black"}{...HeadingOption}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4}/>
            <Heading borderRadius={30} bgColor={'whiteAlpha.700'} color={"black"}{...HeadingOption}>
                Night life is Cool
            </Heading>
        </Box>

    </Carousel>  
    <Container maxW={'container.xl'} minH={'100vh'} p={16}>
        <Heading textTransform={'uppercase'} py={2} m={'auto'} borderBottom={'2px solid'} w={'fit-content'}>Service</Heading>

        <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column','row']}
        >
            <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem temporibus atque, magni explicabo, ab laborum nobis enim, accusamus cum unde? Mollitia quibusdam sapiente, pariatur commodi harum perspiciatis molestias deserunt!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, in! Cupiditate perspiciatis delectus voluptates dicta. Quod ut magnam fugit blanditiis cupiditate rem quibusdam sequi eveniet. Doloremque facilis culpa cupiditate. Molestias.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quis consectetur ipsum sequi repudiandae et autem reprehenderit. Expedita architecto optio esse, doloribus, tempora ipsam reprehenderit quos consectetur voluptatibus officiis illo.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere alias labore, maiores ullam odio perspiciatis repudiandae aliquid esse. Beatae voluptatum qui quis cum, delectus sequi corporis iste! Delectus, inventore fugit?
            </Text>
        </Stack>

    </Container>
    </>
  )
}


export default Home