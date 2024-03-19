/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue, set_val } from "/utils/state"
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getEventURL } from "/utils/state.js"




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

export function Input_dcdc4ad4dcaea7427a2964b3366f2748 () {
  const state__auth_state = useContext(StateContexts.state__auth_state)


  return (
    <Input type={`text`} value={state__auth_state.is_logged_in}/>
  )
}

export function Fragment_e0824044528a5eb3af991544f9cc0799 () {
  const state__auth_state = useContext(StateContexts.state__auth_state)


  return (
    <Fragment>
  {isTrue((state__auth_state.is_logged_in === "true")) ? (
  <Fragment>
  <Button>
  {`Log out`}
</Button>
</Fragment>
) : (
  <Fragment>
  <Button>
  {`Log In`}
</Button>
</Fragment>
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
