/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Button, Container, Heading, Link, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container>
  <Container sx={{"borderRadius": "10px", "boxShadow": "0 0 10px rgba(0, 0, 0, 0.1)"}}>
  <VStack alignItems={`left`} sx={{"position": "fixed", "height": "100%", "left": "0px", "top": "0px", "zIndex": "5", "paddingX": "2em", "paddingY": "1em", "backgroundColor": "rgba(255, 255, 255, 0.9)", "width": "250px", "borderRadius": "10px", "boxShadow": "0 0 10px rgba(0, 0, 0, 0.1)"}}>
  <Heading sx={{"marginBottom": "1em", "color": "indigo", "fontWeight": "bold", "fontSize": "1.5em"}}>
  {`Engage HUB`}
</Heading>
  <Link as={NextLink} href={`/home`} sx={{"color": "indigo", "marginBottom": "0.5em"}}>
  {`Home`}
</Link>
  <Link as={NextLink} href={`/services`} sx={{"color": "indigo", "marginBottom": "0.5em"}}>
  {`Services`}
</Link>
  <Link as={NextLink} href={`/about`} sx={{"color": "indigo", "marginBottom": "0.5em"}}>
  {`About Us`}
</Link>
  <Link as={NextLink} href={`/contact`} sx={{"color": "indigo", "marginBottom": "0.5em"}}>
  {`Contact`}
</Link>
  <Button sx={{"color": "indigo", "backgroundColor": "white", "borderColor": "indigo", "marginTop": "1em"}}>
  {`Sign Up`}
</Button>
  <Button sx={{"color": "white", "backgroundColor": "indigo", "marginTop": "0.5em"}}>
  {`Create Event`}
</Button>
</VStack>
</Container>
  <Container/>
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
