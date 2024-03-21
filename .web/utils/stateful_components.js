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

export function Box_367958c0d2626cdf5b619f9bf794a5b3 () {
  
    const handleSubmit_158b22f76ba0dcc4d61b38dab63a8d26 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.register_event_data.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Box as={`form`} onSubmit={handleSubmit_158b22f76ba0dcc4d61b38dab63a8d26} sx={{"padding": "2em", "width": "500px", "margin-top": "3em"}}>
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
