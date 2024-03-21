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



export function Debounceinput_edbd5e4a5def75766e71f6474da2290b () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)

  const on_change_e04f95d65ace8dfd4a46dbe2c433b3e6 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_text", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_e04f95d65ace8dfd4a46dbe2c433b3e6} sx={{"margin-top": "20px"}} type={`text`} value={state__textfield_controlled.text}/>
  )
}

export function Debounceinput_7bcf8d4f75c9721e43ec4e5f9fde1948 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__life_stream_controller = useContext(StateContexts.state__life_stream_controller)

  const on_change_1f891f3579afaf5b4dbf4b7e47feaf51 = useCallback((_e0) => addEvents([Event("state.life_stream_controller.set_text", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_1f891f3579afaf5b4dbf4b7e47feaf51} sx={{"margin-top": "20px"}} type={`text`} value={state__life_stream_controller.text}/>
  )
}

export function Button_fd04abeb9678bf1d800b5887d3f7ff5d () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_0b1d7433f40e822386cd0e2298bac511 = useCallback((_e) => addEvents([Event("state.life_stream_controller.onSubmit", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_0b1d7433f40e822386cd0e2298bac511}>
  {`submit`}
</Button>
  )
}

export function Button_093dd66f76dc55c63e124d9de22a13db () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_9cb60e42aaa64d2892f2dba50cc9f35a = useCallback((_e) => addEvents([Event("state.textfield_controlled.onSubmit", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_9cb60e42aaa64d2892f2dba50cc9f35a}>
  {`submit`}
</Button>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container sx={{"margin": "5rem auto", "padding": "1rem", "text-align": "center", "width": "100vw", "height": "100vh"}}>
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
  <TableContainer sx={{"margin": "2rem auto", "text-align": "center", "margin-top": "50vh", "margin-left": "6vh", "transform": "translateY(-50%)", "max-width": "90%"}}>
  <Table sx={{"margin": "5rem auto", "padding": "1rem", "text-align": "center"}}>
  <Thead>
  <Tr>
  <Th>
  {`Email`}
</Th>
  <Th>
  {`Name`}
</Th>
  <Th>
  {`Phone Number`}
</Th>
  <Th>
  {`Actions`}
</Th>
</Tr>
</Thead>
  <Tbody>
  <Tr>
  <Td>
  {`test4@gmail.com`}
</Td>
  <Td>
  {`Vaibhav`}
</Td>
  <Td>
  {`9819079774`}
</Td>
  <Td>
  <Button>
  {`Reset Password`}
</Button>
</Td>
</Tr>
</Tbody>
</Table>
</TableContainer>
</Container>
  <Container/>
  <Heading>
  {`Enter the Youtube Link for Home Page!`}
</Heading>
  <Debounceinput_edbd5e4a5def75766e71f6474da2290b/>
  <Button_093dd66f76dc55c63e124d9de22a13db/>
  <Heading>
  {`Enter Live Stream Link`}
</Heading>
  <Debounceinput_7bcf8d4f75c9721e43ec4e5f9fde1948/>
  <Button_fd04abeb9678bf1d800b5887d3f7ff5d/>
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
