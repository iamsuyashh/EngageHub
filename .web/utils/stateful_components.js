/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { Button, Image as ChakraImage, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
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

export function Text_302c867ca52040a1c72d3bbe8cb6f26b () {
  const state = useContext(StateContexts.state)


  return (
    <Text>
  {state.router.page.raw_path}
</Text>
  )
}

export function Text_38658ec7233cb02bff9c3ad493636077 () {
  const state__cl_storage = useContext(StateContexts.state__cl_storage)


  return (
    <Text>
  {state__cl_storage.currentUser}
</Text>
  )
}

export function Image_e6408ca805ae974e6eb3e94065ff972f () {
  const state__carousel_state = useContext(StateContexts.state__carousel_state)


  return (
    <ChakraImage src={state__carousel_state.images.at(state__carousel_state.current_image_index)} sx={{"position": "relative", "width": "100vw", "height": "30vw"}}/>
  )
}

export function Button_e65140ba91c51800240365f1c3f069dd () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ded72e95921a40fca507841609cd7a38 = useCallback((_e) => addEvents([Event("state.carousel_state.previous_image", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_ded72e95921a40fca507841609cd7a38} sx={{"position": "absolute", "left": "10px", "top": "50%", "transform": "translateY(-50%)"}}>
  {`<--`}
</Button>
  )
}

export function Button_5d4e77008a1b016ea27a78202f92ed58 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_75e88266e59bd7fcf0de0ebf394b1812 = useCallback((_e) => addEvents([Event("state.carousel_state.next_image", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_75e88266e59bd7fcf0de0ebf394b1812} sx={{"position": "absolute", "right": "10px", "top": "50%", "transform": "translateY(-50%)"}}>
  {`-->`}
</Button>
  )
}
