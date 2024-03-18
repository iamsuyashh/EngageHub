/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Heading, HStack, Image as ChakraImage, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
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
  <ChakraImage src={`https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_640.jpg`} sx={{"object-fit": "cover", "border-radius": "10px", "position": "relative", "width": "100%", "height": "30vw"}}/>
  <Link as={NextLink} href={`/register`} sx={{"textDecoration": "none"}}>
  <Button sx={{"background-color": "Indigo", "color": "white", "dark": "true", "padding": "15px 30px", "border": "none", "border-radius": "8px", "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)", "opacity": "0.8", "font-size": "1.5rem"}}>
  {`Register`}
</Button>
</Link>
  <Container sx={{"display": "flex", "flex-direction": "column", "align-items": "center", "gap": "1rem"}}>
  <Heading sx={{"color": "black", "font-size": "2rem", "margin-bottom": "0.5rem"}}>
  {`Vaibhav`}
</Heading>
  <Container sx={{"flex": "1", "margin-right": "2rem"}}>
  <Text sx={{"margin-bottom": "0.2rem", "color": "black"}}>
  {`Sutar`}
</Text>
</Container>
  <Container sx={{"margin-top": "0.5rem"}}>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Date: 2024-03-16`}
</Text>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Time: 10:48`}
</Text>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Location: Dmart, Kandivali`}
</Text>
</Container>
</Container>
</Container>
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
