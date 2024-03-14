/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Container, Flex, Heading, HStack, Image as ChakraImage, Link, SimpleGrid, Spacer, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container sx={{"max-width": "100%", "background-color": "#F8F8FA", "max-height": "100%", "width": "100%", "height": "100%"}}>
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
  <Flex sx={{"width": "100vw", "heigth": "80vh", "justify-content": "space-between", "align-content": "center"}}>
  <Flex sx={{"margin": "10", "justify-content": "center"}}>
  <Text as={`span`} sx={{"fontSize": "30px", "color": "indigo", "fontWeight": "bold", "size": 20}}>
  {`Engage Hub `}
</Text>
  <Text as={`span`} sx={{"color": "black", "fontSize": "30px"}}>
  {`: Where Events Come to Life!`}
</Text>
</Flex>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`} sx={{"width": "30vw", "heigth": "30vh", "align-content": "center", "justify-content": "center"}}/>
</Flex>
  <Flex sx={{"margin": "5"}}>
  <Text as={`span`} sx={{"fontSize": "25px", "margin-right": "10px", "color": "indigo", "fontWeight": "bold"}}>
  {`Event  `}
</Text>
  <Text as={`span`} sx={{"fontSize": "25px"}}>
  {`Gallery`}
</Text>
</Flex>
  <Flex sx={{"width": "70vw", "height": "auto", "justify-content": "center", "align-content": "center", "margin-left": "20%"}}>
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
  {`Bhayander`}
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
  <ChakraImage src={`https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_640.jpg`}/>
  <Heading>
  {`Vaibhav`}
</Heading>
  <Text>
  {`Kandivali`}
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
