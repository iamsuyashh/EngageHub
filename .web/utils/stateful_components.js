/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getRefValue, getRefValues, isTrue, set_val } from "/utils/state"
import { Box, Button, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from "@chakra-ui/react"
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

export function Box_1d2e65bd1d5e52f5559121b3b1621f3b () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_17388008c9d876f4b3f6fa35cdde2ebd = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.register_event_data.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    


  return (
    <Box as={`form`} onSubmit={handleSubmit_17388008c9d876f4b3f6fa35cdde2ebd} sx={{"padding": "2em", "width": "500px", "margin-top": "3em"}}>
  <VStack>
  <Input name={`name`} placeholder={`Name`} sx={{"width": "100%"}} type={`text`}/>
  <Input name={`email`} placeholder={`Enter your email`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`email`}/>
  <Input name={`header`} type={`hidden`} value={`TantraUtsav`}/>
  <Input name={`pid_number`} placeholder={`Enter PID`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`number`}/>
  <Input name={`ph_number`} placeholder={`Enter your Phone Number`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`number`}/>
  <Button sx={{"margin-top": "3em", "bg": "indigo", "color": "white", "marginTop": "5em"}} type={`submit`} variant={`outline`}>
  {`Register`}
</Button>
</VStack>
</Box>
  )
}
