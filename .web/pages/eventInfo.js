/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Flex, Heading, HStack, Link, Text } from "@chakra-ui/react"
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
  <Text>
  {`Loading...`}
</Text>
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
