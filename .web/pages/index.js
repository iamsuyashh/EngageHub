/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0, Link_b83765c09c8b636e960ff2e4838f640f, Text_302c867ca52040a1c72d3bbe8cb6f26b, Text_e6b8ad8c047c78d9f8539beb6922e735 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Code, Container, Flex, Heading, HStack, Image as ChakraImage, Link, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import dynamic from "next/dynamic"
import { EventLoopContext } from "/utils/context"
import { Event } from "/utils/state"
import NextHead from "next/head"

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


export function Link_312058255b9b1e30935025fd73cbe93e () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_71208a9e6253415073992c5cb924826b = useCallback((_e) => addEvents([Event("state.event_state.set_event_name", {})], (_e), {}), [addEvents, Event])

  return (
    <Link as={NextLink} href={`/eventdetails?param=Hackstomp`} onClick={on_click_71208a9e6253415073992c5cb924826b} sx={{"marginY": "1em", "marginX": "1em"}}>
  <Card size={`lg`} sx={{"height": "100%", "width": "100%", "drop-shadow": "1", "text-decoration": "none", "asChild": true}}>
  <CardBody>
  <Box>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`}/>
  <Heading>
  {`Hackstomp`}
</Heading>
  <Text>
  {`Mira Road`}
  <Text_302c867ca52040a1c72d3bbe8cb6f26b/>
  <Text_e6b8ad8c047c78d9f8539beb6922e735/>
</Text>
</Box>
</CardBody>
</Card>
</Link>
  )
}

export function Link_3d7bfed674e8d3176a6c404304a216aa () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_71208a9e6253415073992c5cb924826b = useCallback((_e) => addEvents([Event("state.event_state.set_event_name", {})], (_e), {}), [addEvents, Event])

  return (
    <Link as={NextLink} href={`/eventdetails?param=Vaibhav`} onClick={on_click_71208a9e6253415073992c5cb924826b} sx={{"marginY": "1em", "marginX": "1em"}}>
  <Card size={`lg`} sx={{"height": "100%", "width": "100%", "drop-shadow": "1", "text-decoration": "none", "asChild": true}}>
  <CardBody>
  <Box>
  <ChakraImage src={`https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_640.jpg`}/>
  <Heading>
  {`Vaibhav`}
</Heading>
  <Text>
  {`Kandivali`}
  <Text_302c867ca52040a1c72d3bbe8cb6f26b/>
  <Text_e6b8ad8c047c78d9f8539beb6922e735/>
</Text>
</Box>
</CardBody>
</Card>
</Link>
  )
}

export function Link_f6bfb04bd2fc94d8f648190d47bb1dfd () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_71208a9e6253415073992c5cb924826b = useCallback((_e) => addEvents([Event("state.event_state.set_event_name", {})], (_e), {}), [addEvents, Event])

  return (
    <Link as={NextLink} href={`/eventdetails?param=ITSA`} onClick={on_click_71208a9e6253415073992c5cb924826b} sx={{"marginY": "1em", "marginX": "1em"}}>
  <Card size={`lg`} sx={{"height": "100%", "width": "100%", "drop-shadow": "1", "text-decoration": "none", "asChild": true}}>
  <CardBody>
  <Box>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`}/>
  <Heading>
  {`ITSA`}
</Heading>
  <Text>
  {`Borivali`}
  <Text_302c867ca52040a1c72d3bbe8cb6f26b/>
  <Text_e6b8ad8c047c78d9f8539beb6922e735/>
</Text>
</Box>
</CardBody>
</Card>
</Link>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container sx={{"max-width": "100vw", "background-color": "#F8F8FA"}}>
  <Box sx={{"backdropFilter": "auto", "backdropBlur": "lg", "p": "4", "position": "sticky", "top": "0", "zIndex": "100"}}>
  <HStack justify={`space-between`}>
  <HStack>
  <Breadcrumb>
  <BreadcrumbItem>
  <BreadcrumbLink as={NextLink} href={`/`}>
  <Heading size={`xl`} sx={{"color": "indigo"}}>
  {`EngageHub`}
</Heading>
</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</HStack>
  <HStack>
  <Link as={NextLink} href={`/eventgallery`} sx={{"button": true}}>
  <Button colorScheme={`none`} size={`lg`} sx={{"color": "indigo"}}>
  {`Event Gallery`}
</Button>
</Link>
  <Link as={NextLink} href={`/about`} sx={{"button": true}}>
  <Button colorScheme={`none`} size={`lg`} sx={{"color": "indigo"}}>
  {`About Us`}
</Button>
</Link>
</HStack>
  <HStack spacing={`8`}>
  <Link as={NextLink} href={`/signIn`} sx={{"color": "indigo", "mr": "2"}}>
  {`Login`}
</Link>
  <Link as={NextLink} href={`/signUp`} sx={{"button": true}}>
  <Button sx={{"bg": "indigo", "color": "white"}}>
  {`SignUp`}
</Button>
</Link>
  <Link as={NextLink} href={`/admin`} sx={{"button": true}}>
  <Button sx={{"bg": "indigo", "color": "white"}}>
  {`Admin`}
</Button>
</Link>
</HStack>
</HStack>
</Box>
  <Code>
  {`Shared:`}
  {``}
</Code>
  <ReactPlayer controls={false} height={`60vh`} url={`https://www.youtube.com/embed/eu1QGisT8jg?si=8YU8rzGD6P7Sno0-&amp;controls=0`} width={`100%`}/>
  <VStack sx={{"margin": "10", "height": "100vh"}}>
  <Flex direction={`column`}>
  <Flex>
  <Heading sx={{"align": "left"}}>
  {`Upcoming Events`}
</Heading>
</Flex>
  <Box>
  <SimpleGrid columns={[3]} sx={{"height": "35vh", "width": "70vw", "rows": [2]}}>
  <Flex>
  <Link_b83765c09c8b636e960ff2e4838f640f/>
</Flex>
  <Flex>
  <Link_312058255b9b1e30935025fd73cbe93e/>
</Flex>
  <Flex>
  <Link_f6bfb04bd2fc94d8f648190d47bb1dfd/>
</Flex>
  <Flex>
  <Link_b83765c09c8b636e960ff2e4838f640f/>
</Flex>
  <Flex>
  <Link_3d7bfed674e8d3176a6c404304a216aa/>
</Flex>
</SimpleGrid>
</Box>
  <Spacer/>
</Flex>
</VStack>
  <Spacer/>
  <Box sx={{"background-color": "indigo", "text-align": "center", "p": "10"}}>
  <Text sx={{"color": "white"}}>
  {`© 2024 EngageHub`}
</Text>
</Box>
</Container>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
