/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Container, Flex, Heading, HStack, Image as ChakraImage, Link, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import dynamic from "next/dynamic"
import { AddIcon } from "@chakra-ui/icons"
import NextHead from "next/head"

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


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
  <ReactPlayer controls={false} height={`60vh`} url={`https://www.youtube.com/embed/eu1QGisT8jg?si=xG3uJmqZfGbgF-EA&amp;controls=0`} width={`100%`}/>
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
  <Link as={NextLink} href={`eventInfo//TantraUtsav`} sx={{"marginY": "1em", "marginX": "1em"}}>
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
</Box>
</CardBody>
</Card>
</Link>
</Flex>
  <Flex>
  <Link as={NextLink} href={`//coloqium`} sx={{"marginY": "1em", "marginX": "1em"}}>
  <Card size={`lg`} sx={{"height": "100%", "width": "100%", "drop-shadow": "1", "text-decoration": "none", "asChild": true}}>
  <CardBody>
  <Box>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`}/>
  <Heading>
  {`coloqium`}
</Heading>
  <Text>
  {`borivali`}
</Text>
</Box>
</CardBody>
</Card>
</Link>
</Flex>
</SimpleGrid>
</Box>
  <Spacer/>
</Flex>
</VStack>
  <Spacer/>
  <Box sx={{"background-color": "indigo", "text-align": "center", "padding": "1rem"}}>
  <Flex sx={{"margin-bottom": "1rem"}}>
  <AddIcon sx={{"name": "fab fa-twitter", "color": "white", "size": "lg", "mr": "2"}}/>
  <AddIcon sx={{"name": "fab fa-facebook-f", "color": "white", "size": "lg", "mr": "2"}}/>
  <AddIcon sx={{"name": "fab fa-instagram", "color": "white", "size": "lg", "mr": "2"}}/>
  <AddIcon sx={{"name": "fab fa-linkedin-in", "color": "white", "size": "lg", "mr": "2"}}/>
</Flex>
  <Text sx={{"color": "white", "size": "sm", "mb": "2"}}>
  {`Connect with us on social media`}
</Text>
  <Text sx={{"color": "white", "size": "sm", "mb": "2"}}>
  {`For inquiries, contact us at info@engagehub.com`}
</Text>
  <Text sx={{"color": "white", "size": "sm"}}>
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
