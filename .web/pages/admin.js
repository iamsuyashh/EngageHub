/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Button, Container, Heading, Input, Link, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { DebounceInput } from "react-debounce-input"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, set_val } from "/utils/state"
import NextHead from "next/head"



export function Button_693313095b8f5f5d87956603f0669ece () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_9cb60e42aaa64d2892f2dba50cc9f35a = useCallback((_e) => addEvents([Event("state.textfield_controlled.onSubmit", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_9cb60e42aaa64d2892f2dba50cc9f35a} sx={{"margin-top": "10px", "color": "white", "background-color": "indigo"}}>
  {`submit`}
</Button>
  )
}

export function Debounceinput_edbd5e4a5def75766e71f6474da2290b () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)

  const on_change_e04f95d65ace8dfd4a46dbe2c433b3e6 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_text", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_e04f95d65ace8dfd4a46dbe2c433b3e6} sx={{"margin-top": "20px"}} type={`text`} value={state__textfield_controlled.text}/>
  )
}

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
  <Link as={NextLink} href={`/adminEvents`} sx={{"color": "indigo", "marginBottom": "0.5em"}}>
  {`Events`}
</Link>
  <Link as={NextLink} href={`/event`} sx={{"color": "indigo", "marginBottom": "0.5em"}}>
  {`Create Event`}
</Link>
  <Link as={NextLink} href={`/upcomingEvents`} sx={{"color": "indigo", "marginBottom": "0.5em"}}>
  {`Create upcoming Events`}
</Link>
</VStack>
</Container>
  <Container>
  <Heading sx={{"text-align": "center", "font-size": "2rem", "color": "indigo", "margin-bottom": "2rem", "margin-top": "100px"}}>
  {`Registered Users`}
</Heading>
  <TableContainer sx={{"margin": "2rem auto", "text-align": "center", "max-width": "100vw", "overflow-x": "auto", "width": "50vw"}}>
  <Table sx={{"margin": "0 auto", "padding": "1rem", "text-align": "center", "font-size": "1.2rem", "width": "100%", "margin-top": "50px"}}>
  <Thead>
  <Tr>
  <Th sx={{"font-weight": "bold", "color": "indigo", "padding": "10px"}}>
  {`Email`}
</Th>
  <Th sx={{"font-weight": "bold", "color": "indigo", "padding": "10px"}}>
  {`Name`}
</Th>
  <Th sx={{"font-weight": "bold", "color": "indigo", "padding": "10px"}}>
  {`Phone Number`}
</Th>
  <Th sx={{"font-weight": "bold", "color": "indigo", "padding": "10px"}}>
  {`Actions`}
</Th>
</Tr>
</Thead>
  <Tbody>
  <Tr>
  <Td sx={{"font-weight": "bold", "color": "black", "padding": "10px"}}>
  {`test4@gmail.com`}
</Td>
  <Td sx={{"font-weight": "bold", "color": "black", "padding": "10px"}}>
  {`Vaibhav`}
</Td>
  <Td sx={{"font-weight": "bold", "color": "black", "padding": "10px"}}>
  {`9819079774`}
</Td>
  <Td>
  <Button sx={{"background-color": "indigo", "color": "white", "font-weight": "bold", "width": "100%", "padding": "10px"}}>
  {`Reset Password`}
</Button>
</Td>
</Tr>
</Tbody>
</Table>
</TableContainer>
</Container>
  <Container/>
  <Heading sx={{"width": "50vw"}}>
  {`Enter the Youtube Link for Home Page!`}
</Heading>
  <Debounceinput_edbd5e4a5def75766e71f6474da2290b/>
  <Button_693313095b8f5f5d87956603f0669ece/>
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
