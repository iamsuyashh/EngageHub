/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Container, Link, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container>
  <Container sx={{"borderRadius": "10px", "boxShadow": "0 0 10px rgba(0, 0, 0, 0.1)"}}>
  <VStack alignItems={`left`} sx={{"position": "fixed", "height": "100%", "left": "0px", "top": "0px", "zIndex": "5", "paddingX": "2em", "paddingY": "1em", "backgroundColor": "rgba(255, 255, 255, 0.9)", "width": "250px", "borderRadius": "10px", "boxShadow": "0 0 10px rgba(0, 0, 0, 0.1)"}}>
  <Link as={NextLink} href={`/`} sx={{"marginBottom": "1em", "color": "indigo", "fontWeight": "bold", "fontSize": "1.5em"}}>
  {`Engage HUB`}
</Link>
  <Link as={NextLink} href={`/admin`} sx={{"color": "indigo", "marginBottom": "0.5em"}}>
  {`Home`}
</Link>
  <Link as={NextLink} href={`admin/event`} sx={{"color": "indigo", "marginBottom": "0.5em"}}>
  {`Create event`}
</Link>
</VStack>
</Container>
  <Container>
  <TableContainer sx={{"margin": "2rem auto", "text-align": "center", "margin-top": "50vh", "margin-left": "6vh", "transform": "translateY(-50%)", "max-width": "90%"}}>
  <Table sx={{"margin": "2rem auto", "padding": "1rem", "text-align": "center"}}>
  <Thead>
  <Tr>
  <Th>
  {`Name`}
</Th>
  <Th>
  {`Age`}
</Th>
  <Th>
  {`Location`}
</Th>
</Tr>
</Thead>
  <Tbody>
  <Tr>
  <Td>
  {`John`}
</Td>
  <Td>
  {`30`}
</Td>
  <Td>
  {`New York`}
</Td>
</Tr>
  <Tr>
  <Td>
  {`Jane`}
</Td>
  <Td>
  {`31`}
</Td>
  <Td>
  {`San Francisco`}
</Td>
</Tr>
  <Tr>
  <Td>
  {`Joe`}
</Td>
  <Td>
  {`32`}
</Td>
  <Td>
  {`Los Angeles`}
</Td>
</Tr>
</Tbody>
</Table>
</TableContainer>
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
