/** @jsxImportSource @emotion/react */


import { Fragment, useCallback } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Heading, HStack, Input, Link, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { getRefValue, getRefValues, set_val } from "/utils/state"
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
</HStack>
</HStack>
</Box>
  <VStack>
  <Heading sx={{"margin-top": "20px"}}>
  {`Create `}
  <Text as={`span`} sx={{"color": "Indigo"}}>
  {` Event`}
</Text>
</Heading>
  <Box as={`form`} sx={{"padding": "2em", "width": "500px", "margin-top": "3em"}}>
  <VStack>
  <Input name={`event_title`} placeholder={`Enter your Event Title`} sx={{"margin-bottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`event_title`} placeholder={`Enter your email`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`email`} placeholder={`Enter Your phone number`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`email`}/>
  <Input name={`start_date`} placeholder={`Start date`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`date`}/>
  <Input name={`end_time`} placeholder={`End time`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`end_date`} placeholder={`End date`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`date`}/>
  <Input name={`email`} placeholder={`Enter Your Password`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`email`}/>
  <Input name={`email`} placeholder={`Confirm your password`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`email`}/>
  <Button sx={{"margin-top": "3em", "bg": "indigo", "color": "white", "marginTop": "5em"}} type={`submit`} variant={`outline`}>
  {`Login`}
</Button>
</VStack>
</Box>
</VStack>
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
