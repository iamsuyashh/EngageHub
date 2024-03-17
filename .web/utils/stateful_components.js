/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { Box, Card, CardBody, Heading, Image as ChakraImage, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"




export function Fragment_fd0e7cb8f9fb4669a6805377d925fba0 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Text_302c867ca52040a1c72d3bbe8cb6f26b () {
  const state = useContext(StateContexts.state)


  return (
    <Text>
  {state.router.page.raw_path}
</Text>
  )
}

export function Text_e6b8ad8c047c78d9f8539beb6922e735 () {
  const state__event_state = useContext(StateContexts.state__event_state)


  return (
    <Text>
  {state__event_state.eventName}
</Text>
  )
}

export function Link_b83765c09c8b636e960ff2e4838f640f () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_71208a9e6253415073992c5cb924826b = useCallback((_e) => addEvents([Event("state.event_state.set_event_name", {})], (_e), {}), [addEvents, Event])

  return (
    <Link as={NextLink} href={`/eventdetails?param=TantraUtsav`} onClick={on_click_71208a9e6253415073992c5cb924826b} sx={{"marginY": "1em", "marginX": "1em"}}>
  <Card size={`lg`} sx={{"height": "100%", "width": "100%", "drop-shadow": "1", "text-decoration": "none", "asChild": true}}>
  <CardBody>
  <Box>
  <ChakraImage src={`https://i.ibb.co/SBgYbZt/audience-1853662-640.jpg`}/>
  <Heading>
  {`TantraUtsav`}
</Heading>
  <Text>
  {`Bhayander`}
  <Text_302c867ca52040a1c72d3bbe8cb6f26b/>
  <Text_e6b8ad8c047c78d9f8539beb6922e735/>
</Text>
</Box>
</CardBody>
</Card>
</Link>
  )
}
