/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Heading, HStack, Input, Link, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { EventLoopContext } from "/utils/context"
import { Event, getRefValue, getRefValues, set_val } from "/utils/state"
import NextHead from "next/head"



export function Box_c29f1f98ef374767b45b66158abc0a22 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_1481f77324dceaf7e603b81f7184595c = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.register_data.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    


  return (
    <Box as={`form`} onSubmit={handleSubmit_1481f77324dceaf7e603b81f7184595c} sx={{"padding": "2em", "width": "500px", "margin-top": "3em"}}>
  <VStack>
  <Input name={`event_title`} placeholder={`Enter your Name`} sx={{"margin-bottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`email`} placeholder={`Enter your email`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`email`}/>
  <Input name={`number`} placeholder={`Enter Your phone number`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`tel`}/>
  <Input name={`password`} placeholder={`Enter Your Password`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`password`}/>
  <Button sx={{"margin-top": "3em", "bg": "indigo", "color": "white", "marginTop": "5em"}} type={`submit`} variant={`outline`}>
  {`Login`}
</Button>
</VStack>
</Box>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container sx={{"max-width": "100vw", "height": "100vh", "text-align": "center", "background-color": "#F8F8FA"}}>
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
  <Heading sx={{"color": "indigo"}}>
  {`Sign up`}
</Heading>
  <VStack>
  <Box_c29f1f98ef374767b45b66158abc0a22/>
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
