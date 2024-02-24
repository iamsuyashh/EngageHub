/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Card, CardBody, Heading, HStack, Image as ChakraImage, Link, SimpleGrid, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <SimpleGrid columns={[4]} sx={{"rows": [3]}}>
  <SimpleGrid spacing={`2`}>
  <Card size={`lg`} sx={{"spacing": "2"}}>
  <CardBody>
  <HStack sx={{"asChild": true}}>
  <Box>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`}/>
  <Heading>
  {`Event 1`}
</Heading>
  <Text>
  {`Location 1`}
</Text>
  <Link as={NextLink} href={`/`}>
  <Button>
  {`Submit`}
</Button>
</Link>
</Box>
</HStack>
</CardBody>
</Card>
</SimpleGrid>
  <SimpleGrid spacing={`2`}>
  <Card size={`lg`} sx={{"spacing": "2"}}>
  <CardBody>
  <HStack sx={{"asChild": true}}>
  <Box>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`}/>
  <Heading>
  {`Event 1`}
</Heading>
  <Text>
  {`Location 1`}
</Text>
  <Link as={NextLink} href={`/register`}>
  <Button>
  {`Submit`}
</Button>
</Link>
</Box>
</HStack>
</CardBody>
</Card>
</SimpleGrid>
  <SimpleGrid spacing={`2`}>
  <Card size={`lg`} sx={{"spacing": "2"}}>
  <CardBody>
  <HStack sx={{"asChild": true}}>
  <Box>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`}/>
  <Heading>
  {`Event 1`}
</Heading>
  <Text>
  {`Location 1`}
</Text>
  <Link as={NextLink} href={`/`}>
  <Button>
  {`Submit`}
</Button>
</Link>
</Box>
</HStack>
</CardBody>
</Card>
</SimpleGrid>
  <SimpleGrid spacing={`2`}>
  <Card size={`lg`} sx={{"spacing": "2"}}>
  <CardBody>
  <HStack sx={{"asChild": true}}>
  <Box>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`}/>
  <Heading>
  {`Event 1`}
</Heading>
  <Text>
  {`Location 1`}
</Text>
  <Link as={NextLink} href={`/register`}>
  <Button>
  {`Submit`}
</Button>
</Link>
</Box>
</HStack>
</CardBody>
</Card>
</SimpleGrid>
</SimpleGrid>
</Box>
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
