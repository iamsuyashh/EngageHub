/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Button_5d4e77008a1b016ea27a78202f92ed58, Button_e65140ba91c51800240365f1c3f069dd, Fragment_fd0e7cb8f9fb4669a6805377d925fba0, Image_e6408ca805ae974e6eb3e94065ff972f } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Container, Flex, Heading, HStack, Image as ChakraImage, Link, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



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
  <Image_e6408ca805ae974e6eb3e94065ff972f/>
  <Container sx={{"position": "absolute", "top": "10", "left": "444", "width": "100vw", "height": "50vw", "opacity": "0.5"}}>
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
  {`Hackstomp`}
</Heading>
  <Text>
  {`Mira Road`}
</Text>
  <Link as={NextLink} href={`/eventdetails`}>
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
  {`ITSA`}
</Heading>
  <Text>
  {`Borivali`}
</Text>
  <Link as={NextLink} href={`/eventdetails`}>
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
  {`TantraUtsav`}
</Heading>
  <Text>
  {`Bhayander`}
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
  <ChakraImage src={`https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_640.jpg`}/>
  <Heading>
  {`Vaibhav`}
</Heading>
  <Text>
  {`Kandivali`}
</Text>
  <Link as={NextLink} href={`/eventdetails/TantraUtsav`}>
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
