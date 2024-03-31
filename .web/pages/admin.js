/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Button, Container, Heading, Input, Link, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, set_val } from "/utils/state"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



<<<<<<< HEAD
=======
export function Button_61d29497e1a1458d709705c60507e27e () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_8f057f9e2c719bb1664185300a8639aa = useCallback((_e) => addEvents([Event("state.user_form_data.update_event_data", {new_data:{"password": "123123123", "phoneNumber": "9819079774", "email": "test3@gmail.com", "name": "test3"}})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_8f057f9e2c719bb1664185300a8639aa}>
  {`Reset Password`}
</Button>
  )
}

export function Button_21ffd47966f6aa0833256e0b18a99072 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_93d8d5f678214feb8789cfdb80c79f30 = useCallback((_e) => addEvents([Event("state.user_form_data.update_event_data", {new_data:{"password": "123456", "phoneNumber": "9819079774", "email": "sutarvaibhav37@gmail.com", "name": "Vaibhav"}})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_93d8d5f678214feb8789cfdb80c79f30}>
  {`Reset Password`}
</Button>
  )
}

export function Debounceinput_edbd5e4a5def75766e71f6474da2290b () {
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_e04f95d65ace8dfd4a46dbe2c433b3e6 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_text", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_e04f95d65ace8dfd4a46dbe2c433b3e6} sx={{"margin-top": "20px"}} type={`text`} value={state__textfield_controlled.text}/>
  )
}

>>>>>>> f2170d7d345a16fd9a2765d325e65eb2f2ebdb10
export function Button_fd04abeb9678bf1d800b5887d3f7ff5d () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_0b1d7433f40e822386cd0e2298bac511 = useCallback((_e) => addEvents([Event("state.life_stream_controller.onSubmit", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_0b1d7433f40e822386cd0e2298bac511}>
  {`submit`}
</Button>
  )
}

<<<<<<< HEAD
export function Debounceinput_edbd5e4a5def75766e71f6474da2290b () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)

  const on_change_e04f95d65ace8dfd4a46dbe2c433b3e6 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_text", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_e04f95d65ace8dfd4a46dbe2c433b3e6} sx={{"margin-top": "20px"}} type={`text`} value={state__textfield_controlled.text}/>
=======
export function Button_0828e58a195caa9f19991a38b4b4f9b3 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_cf71bdd013eb68fb46ab1779d2942219 = useCallback((_e) => addEvents([Event("state.user_form_data.update_event_data", {new_data:{"password": "123456", "phoneNumber": "123123123", "email": "jjshah2110@gmail.com", "name": "Jigar Shah"}})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_cf71bdd013eb68fb46ab1779d2942219}>
  {`Reset Password`}
</Button>
>>>>>>> f2170d7d345a16fd9a2765d325e65eb2f2ebdb10
  )
}

export function Debounceinput_7bcf8d4f75c9721e43ec4e5f9fde1948 () {
<<<<<<< HEAD
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__life_stream_controller = useContext(StateContexts.state__life_stream_controller)
=======
  const state__life_stream_controller = useContext(StateContexts.state__life_stream_controller)
  const [addEvents, connectError] = useContext(EventLoopContext);
>>>>>>> f2170d7d345a16fd9a2765d325e65eb2f2ebdb10

  const on_change_1f891f3579afaf5b4dbf4b7e47feaf51 = useCallback((_e0) => addEvents([Event("state.life_stream_controller.set_text", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} onChange={on_change_1f891f3579afaf5b4dbf4b7e47feaf51} sx={{"margin-top": "20px"}} type={`text`} value={state__life_stream_controller.text}/>
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

<<<<<<< HEAD
=======
export function Button_011ea43f2c78ecc7fd31354e7a47f5d8 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_5fc90a4ce44c79c1ebb568e263192cfb = useCallback((_e) => addEvents([Event("state.user_form_data.update_event_data", {new_data:{"password": "123456", "phoneNumber": "9819079774", "email": "test4@gmail.com", "name": "Vaibhav"}})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_5fc90a4ce44c79c1ebb568e263192cfb}>
  {`Reset Password`}
</Button>
  )
}

>>>>>>> f2170d7d345a16fd9a2765d325e65eb2f2ebdb10
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
  <Button sx={{"href": "/", "color": "indigo", "marginBottom": "0.5em"}}>
  {`SignOut`}
</Button>
</VStack>
</Container>
  <Container>
  <Heading sx={{"text-align": "center", "font-size": "2rem", "color": "indigo", "margin-bottom": "2rem", "margin-top": "100px"}}>
  {`Registered Users`}
</Heading>
  <TableContainer sx={{"margin": "2rem auto", "text-align": "center", "max-width": "100vw", "overflow-x": "auto", "width": "50vw"}}>
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
  {`jjshah2110@gmail.com`}
</Td>
  <Td>
  {`Jigar Shah`}
</Td>
  <Td>
  {`123123123`}
</Td>
  <Td>
  <Button_0828e58a195caa9f19991a38b4b4f9b3/>
</Td>
</Tr>
  <Tr>
  <Td>
  {`sutarvaibhav37@gmail.com`}
</Td>
  <Td>
  {`Vaibhav`}
</Td>
  <Td>
  {`9819079774`}
</Td>
  <Td>
  <Button_21ffd47966f6aa0833256e0b18a99072/>
</Td>
</Tr>
  <Tr>
  <Td>
  {`test3@gmail.com`}
</Td>
  <Td>
  {`test3`}
</Td>
  <Td>
  {`9819079774`}
</Td>
  <Td>
  <Button_61d29497e1a1458d709705c60507e27e/>
</Td>
</Tr>
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
  <Button_011ea43f2c78ecc7fd31354e7a47f5d8/>
</Td>
</Tr>
</Tbody>
</Table>
</TableContainer>
</Container>
<<<<<<< HEAD
  <Container/>
  <Heading sx={{"width": "50vw"}}>
=======
  <Container sx={{"margin": "5rem auto", "padding": "1rem", "text-align": "center", "width": "100vw", "height": "100vh"}}>
  <Heading sx={{"text-align": "center", "font-size": "2rem", "color": "indigo", "margin-bottom": "2rem", "margin-top": "100px"}}>
>>>>>>> f2170d7d345a16fd9a2765d325e65eb2f2ebdb10
  {`Enter the Youtube Link for Home Page!`}
</Heading>
  <Debounceinput_edbd5e4a5def75766e71f6474da2290b/>
  <Button_093dd66f76dc55c63e124d9de22a13db/>
  <Heading sx={{"text-align": "center", "font-size": "2rem", "color": "indigo", "margin-bottom": "2rem", "margin-top": "100px"}}>
  {`Enter Live Stream Link`}
</Heading>
  <Debounceinput_7bcf8d4f75c9721e43ec4e5f9fde1948/>
  <Button_fd04abeb9678bf1d800b5887d3f7ff5d/>
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
