/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Heading, HStack, Image as ChakraImage, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import dynamic from "next/dynamic"
import NextHead from "next/head"

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


export function Button_5d4e77008a1b016ea27a78202f92ed58 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_75e88266e59bd7fcf0de0ebf394b1812 = useCallback((_e) => addEvents([Event("state.carousel_state.next_image", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_75e88266e59bd7fcf0de0ebf394b1812} sx={{"position": "absolute", "right": "10px", "top": "50%", "transform": "translateY(-50%)"}}>
  {`-->`}
</Button>
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

export function Image_e6408ca805ae974e6eb3e94065ff972f () {
  const state__carousel_state = useContext(StateContexts.state__carousel_state)


  return (
    <ChakraImage src={state__carousel_state.images.at(state__carousel_state.current_image_index)} sx={{"position": "relative", "width": "100vw", "height": "30vw"}}/>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container sx={{"max-width": "100vw", "width": "100vw", "margin": "0"}}>
  <Box sx={{"backdropFilter": "auto", "backdropBlur": "lg", "p": "4", "position": "sticky", "top": "0", "zIndex": "100"}}>
  <HStack justify={`space-between`}>
  <HStack>
  <Breadcrumb>
  <BreadcrumbItem>
  <BreadcrumbLink as={NextLink} href={`/`}>
  <Heading size={`xl`} sx={{"color": "indigo"}}>
  {`EngageHub`}
</Heading>
</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</HStack>
  <HStack>
  <Link as={NextLink} href={`/eventgallery`} sx={{"button": true}}>
  <Button colorScheme={`none`} size={`lg`} sx={{"color": "indigo"}}>
  {`Event Gallery`}
</Button>
</Link>
  <Link as={NextLink} href={`/about`} sx={{"button": true}}>
  <Button colorScheme={`none`} size={`lg`} sx={{"color": "indigo"}}>
  {`About Us`}
</Button>
</Link>
</HStack>
  <HStack spacing={`8`}>
  <Link as={NextLink} href={`/signIn`} sx={{"color": "indigo", "mr": "2"}}>
  {`Login`}
</Link>
  <Link as={NextLink} href={`/signUp`} sx={{"button": true}}>
  <Button sx={{"bg": "indigo", "color": "white"}}>
  {`SignUp`}
</Button>
</Link>
  <Link as={NextLink} href={`/admin`} sx={{"button": true}}>
  <Button sx={{"bg": "indigo", "color": "white"}}>
  {`Admin`}
</Button>
</Link>
</HStack>
</HStack>
</Box>
  <Container sx={{"max-width": "100vw", "position": "relative", "overflow": "hidden", "margin-bottom": "10px"}}>
  <Image_e6408ca805ae974e6eb3e94065ff972f/>
  <Container sx={{"position": "absolute", "top": "10", "left": "444", "width": "100vw", "height": "50vw", "opacity": "0.5"}}>
  <Button_e65140ba91c51800240365f1c3f069dd/>
  <Button_5d4e77008a1b016ea27a78202f92ed58/>
</Container>
</Container>
  <ReactPlayer controls={false} height={`90vh`} url={`https://www.youtube.com/live/CY8m6Xrzsk0?feature=shared`} width={`100%`}/>
  <Box sx={{"background-color": "indigo", "text-align": "center", "p": "10"}}>
  <Text sx={{"color": "white"}}>
  {`© 2024 EngageHub`}
</Text>
</Box>
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
