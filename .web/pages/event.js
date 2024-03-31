/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Container, Heading, Input, Link, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { EventLoopContext } from "/utils/context"
import { Event, getRefValue, getRefValues, set_val } from "/utils/state"
import NextHead from "next/head"



<<<<<<< HEAD
export function Box_f93ad882f1e00d39cbf98d3e70d3dbb4 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
=======
export function Box_6ee4585e064760d180df466da789a9d5 () {
>>>>>>> f2170d7d345a16fd9a2765d325e65eb2f2ebdb10
  
    const handleSubmit_1a22818765961d4ab16b647c43fc5157 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.create_event_data.handle_submit", {form_data:form_data})])

        if (true) {
            $form.reset()
        }
    })
    
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Box as={`form`} onSubmit={handleSubmit_1a22818765961d4ab16b647c43fc5157} sx={{"padding": "2em", "width": "500px", "margin-top": "3em"}}>
  <VStack>
  <Input name={`header`} placeholder={`Enter your Event Title`} sx={{"margin-bottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`description`} placeholder={`Event Description`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`location`} placeholder={`Address`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`venue`} placeholder={`Venue`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`date`} placeholder={`Date`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`date`}/>
  <Input name={`time`} placeholder={`Time`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`time`}/>
  <Input name={`url`} placeholder={`Image link`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`text`}/>
  <Input name={`link`} placeholder={`Link`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`text`}/>
  <Button sx={{"margin-top": "3em", "bg": "indigo", "color": "white", "marginTop": "5em"}} type={`submit`} variant={`outline`}>
  {`Submit`}
</Button>
</VStack>
</Box>
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
  <Button sx={{"href": "/", "color": "indigo", "marginBottom": "0.5em"}}>
  {`SignOut`}
</Button>
</VStack>
</Container>
  <VStack>
  <Heading sx={{"margin-top": "20px"}}>
  {`Create `}
  <Text as={`span`} sx={{"color": "Indigo"}}>
  {` Event`}
</Text>
</Heading>
<<<<<<< HEAD
  <Box_f93ad882f1e00d39cbf98d3e70d3dbb4/>
=======
  <Box_6ee4585e064760d180df466da789a9d5/>
>>>>>>> f2170d7d345a16fd9a2765d325e65eb2f2ebdb10
</VStack>
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
