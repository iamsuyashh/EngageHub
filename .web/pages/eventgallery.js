/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Container, Flex, Heading, HStack, Image as ChakraImage, Link, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Button_e65140ba91c51800240365f1c3f069dd () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ded72e95921a40fca507841609cd7a38 = useCallback((_e) => addEvents([Event("state.carousel_state.previous_image", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_ded72e95921a40fca507841609cd7a38} sx={{"position": "absolute", "left": "10px", "top": "50%", "transform": "translateY(-50%)"}}>
  {`<--`}
</Button>
  )
}

export function Image_10572dada479d5b718036c6ed1d3ba67 () {
  const state__carousel_state = useContext(StateContexts.state__carousel_state)


  return (
    <ChakraImage src={state__carousel_state.images.at(state__carousel_state.current_image_index)} sx={{"object-fit": "cover", "width": "100vw", "height": "35vw"}}/>
  )
}

export function Button_5d4e77008a1b016ea27a78202f92ed58 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_75e88266e59bd7fcf0de0ebf394b1812 = useCallback((_e) => addEvents([Event("state.carousel_state.next_image", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_75e88266e59bd7fcf0de0ebf394b1812} sx={{"position": "absolute", "right": "10px", "top": "50%", "transform": "translateY(-50%)"}}>
  {`-->`}
</Button>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container sx={{"max-width": "100%", "max-height": "100%", "width": "100%", "height": "100%"}}>
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
  <Link as={NextLink} href={`/live`} sx={{"button": true}}>
  <Button colorScheme={`none`} size={`lg`} sx={{"color": "indigo"}}>
  {`Live Event`}
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
  <Spacer/>
  <Flex sx={{"display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center", "margin-top": "10px"}}>
  <Flex sx={{"margin": "5"}}>
  <Text as={`span`} sx={{"fontSize": "30px", "color": "indigo", "fontWeight": "bold", "size": 20}}>
  {`EngageHub `}
</Text>
  <Container sx={{"color": "black", "fontSize": "30px"}}>
  {`: Where Events Come to Life!`}
</Container>
</Flex>
  <Container sx={{"max-width": "100vw", "position": "relative", "overflow": "hidden", "margin-bottom": "10px"}}>
  <Image_10572dada479d5b718036c6ed1d3ba67/>
  <Container sx={{"position": "absolute", "top": "10", "left": "444", "width": "100vw", "height": "50vw", "opacity": "0.5", "resizeMode": "cover"}}>
  <Button_e65140ba91c51800240365f1c3f069dd/>
  <Button_5d4e77008a1b016ea27a78202f92ed58/>
</Container>
</Container>
</Flex>
  <Flex sx={{"justify-content": "center", "align-content": "center", "margin-top": "10px"}}>
  <Text as={`span`} sx={{"fontSize": "25px", "margin-right": "10px", "color": "indigo", "fontWeight": "bold"}}>
  {`Event  `}
</Text>
  <Text as={`span`} sx={{"fontSize": "25px"}}>
  {`Gallery`}
</Text>
</Flex>
  <Flex sx={{"width": "70vw", "height": "auto", "justify-content": "center", "align-content": "center", "margin-left": "15%"}}>
  <Box>
  <SimpleGrid columns={[4]} sx={{"height": "40vh", "width": "80vw", "rows": [3]}}>
  <Flex sx={{"marginY": "1em", "marginX": "1em"}}>
  <Card size={`lg`} sx={{"height": "100%", "width": "100%", "drop-shadow": "1", "text-decoration": "none", "asChild": true}}>
  <CardBody>
  <Box>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`}/>
  <Heading>
  {`TantraUtsav`}
</Heading>
  <Text>
  {`Vasai`}
</Text>
  <Link as={NextLink} href={`eventInfo/`}>
  <Button>
  {`Register`}
</Button>
</Link>
</Box>
</CardBody>
</Card>
</Flex>
  <Flex sx={{"marginY": "1em", "marginX": "1em"}}>
  <Card size={`lg`} sx={{"height": "100%", "width": "100%", "drop-shadow": "1", "text-decoration": "none", "asChild": true}}>
  <CardBody>
  <Box>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`}/>
  <Heading>
  {`Coloqium`}
</Heading>
  <Text>
  {`borivali`}
</Text>
  <Link as={NextLink} href={`/`}>
  <Button>
  {`Register`}
</Button>
</Link>
</Box>
</CardBody>
</Card>
</Flex>
</SimpleGrid>
</Box>
</Flex>
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
