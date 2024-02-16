/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, CardHeader, Container, Grid, Heading, HStack, Link, Text } from "@chakra-ui/react"
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
  <Link as={NextLink} href={`/gallery`} sx={{"button": true}}>
  <Button colorScheme={`none`} size={`lg`} sx={{"color": "indigo"}}>
  {`Event Gallery`}
</Button>
</Link>
  <Link as={NextLink} href={`https://reflex.dev`} sx={{"button": true}}>
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
  <Container sx={{"max-width": "100vw"}}>
  <Grid sx={{"gap": 1}} templateColumns={`repeat(3, 1fr)`}>
  <Card sx={{"templateColumns": "repeat(1, 1fr)", "h": "em", "width": "80%", "gap": 1}}>
  <CardHeader>
  <Heading size={`lg`}>
  {`Card 1`}
</Heading>
</CardHeader>
  <CardBody>
  <Text>
  {`Body of Card 1`}
</Text>
</CardBody>
</Card>
  <Card sx={{"templateColumns": "repeat(2, 1fr)", "h": "10em", "width": "80%", "gap": 2}}>
  <CardHeader>
  <Heading size={`lg`}>
  {`Card 2`}
</Heading>
</CardHeader>
  <CardBody>
  <Text>
  {`Body of Card 2`}
</Text>
</CardBody>
</Card>
  <Card sx={{"templateColumns": "repeat(3, 1fr)", "h": "10em", "width": "80%", "gap": 3}}>
  <CardHeader>
  <Heading size={`lg`}>
  {`Card 3`}
</Heading>
</CardHeader>
  <CardBody>
  <Text>
  {`Body of Card 3`}
</Text>
</CardBody>
</Card>
</Grid>
</Container>
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
