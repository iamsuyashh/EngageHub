/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Flex, Heading, HStack, Image as ChakraImage, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { AddIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container sx={{"max-width": "100vw"}}>
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
  <Container sx={{"max-width": "100vw", "padding": "2rem", "display": "flex", "flex-direction": "column", "align-items": "center", "gap": "1rem", "background-color": "#ffffff", "border": "1px solid #ddd", "border-radius": "10px", "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`} sx={{"object-fit": "cover", "border-radius": "10px", "position": "relative", "width": "100%", "height": "30vw"}}/>
  <Link as={NextLink} href={`/register`} sx={{"textDecoration": "none"}}>
  <Button sx={{"background-color": "Indigo", "color": "white", "dark": "true", "padding": "15px 30px", "border": "none", "border-radius": "8px", "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)", "opacity": "0.8", "font-size": "1.5rem"}}>
  {`Register`}
</Button>
</Link>
  <Container sx={{"display": "flex", "flex-direction": "column", "align-items": "center", "gap": "1rem"}}>
  <Heading sx={{"color": "black", "font-size": "2rem", "margin-bottom": "0.5rem"}}>
  {`TantraUtsav`}
</Heading>
  <Container sx={{"flex": "1", "margin-right": "2rem"}}>
  <Text sx={{"margin-bottom": "0.2rem", "color": "black"}}>
  {`EngageHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.`}
</Text>
</Container>
  <Container sx={{"margin-top": "0.5rem"}}>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Date: February 16, 2023`}
</Text>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Time: 9 PM`}
</Text>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Location: Mira , Bhayander`}
</Text>
</Container>
</Container>
</Container>
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
