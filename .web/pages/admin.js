/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Button, Container, Input, Link, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { DebounceInput } from "react-debounce-input"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, set_val } from "/utils/state"
import NextHead from "next/head"



export function Button_093dd66f76dc55c63e124d9de22a13db () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_9cb60e42aaa64d2892f2dba50cc9f35a = useCallback((_e) => addEvents([Event("state.textfield_controlled.onSubmit", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_9cb60e42aaa64d2892f2dba50cc9f35a}>
  {`submit`}
</Button>
  )
}

export function Debounceinput_01d728ea822013433f09b9baaf6b79c5 () {
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_e04f95d65ace8dfd4a46dbe2c433b3e6 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_text", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_e04f95d65ace8dfd4a46dbe2c433b3e6} type={`text`} value={state__textfield_controlled.text}/>
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
  <Debounceinput_01d728ea822013433f09b9baaf6b79c5/>
  <Button_093dd66f76dc55c63e124d9de22a13db/>
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
