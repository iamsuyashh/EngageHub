/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box_1d2e65bd1d5e52f5559121b3b1621f3b, Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Flex, Heading, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container sx={{"max-width": "100vw"}}>
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
  <Link as={NextLink} href={`/live`} sx={{"button": true}}>
  <Button colorScheme={`none`} size={`lg`} sx={{"color": "indigo"}}>
  {`Live Event`}
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
  <Container sx={{"max-width": "100vw", "padding": "2rem", "display": "flex", "flex-direction": "column", "align-items": "center", "gap": "1rem", "background-color": "#ffffff", "border": "1px solid #ddd", "border-radius": "10px", "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
  <ChakraImage src={`https://i.ibb.co/sR2jPYR/prolog.jpg`} sx={{"object-fit": "cover", "border-radius": "10px", "position": "relative", "width": "100%", "height": "30vw"}}/>
  <Container sx={{"display": "flex", "flex-direction": "column", "align-items": "center", "gap": "1rem"}}>
  <Heading sx={{"color": "black", "font-size": "2rem", "margin-bottom": "0.5rem"}}>
  {`TantraUtsav`}
</Heading>
  <Container sx={{"flex": "1", "margin-right": "2rem"}}>
  <Text sx={{"margin-bottom": "0.2rem", "color": "black"}}>
  {`"TantraUtsav" is a technical event focused on exploring the intersection of technology with the ancient tradition of Tantra. It features keynote speeches, panel discussions, workshops, and demonstrations showcasing innovative applications of technology in spiritual practices, meditation, and holistic wellness. Participants have the opportunity to network with experts, engage in hands-on activities, and collaborate on projects aimed at leveraging technology for personal growth and spiritual awakening.`}
</Text>
</Container>
  <Container sx={{"margin-top": "0.5rem"}}>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Date: 2024-03-30`}
</Text>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Time: 12:00`}
</Text>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Location: Auditorium, Vasai`}
</Text>
</Container>
  <VStack>
  <Box_1d2e65bd1d5e52f5559121b3b1621f3b/>
</VStack>
</Container>
</Container>
  <Box sx={{"background-color": "indigo", "text-align": "center", "padding": "0rem"}}>
  <Container sx={{"padding": "1rem", "background-color": "indigo", "text-align": "center"}}>
  <Text sx={{"color": "white", "size": "sm", "mb": "2"}}>
  {`Connect with us on social media`}
</Text>
  <Flex sx={{"margin-bottom": "1rem", "justify-content": "center", "color": "white"}}>
  <Box dangerouslySetInnerHTML={{"__html": "<a href='https://www.instagram.com/sfit_itsa/'><img src='https://img.icons8.com/color/48/instagram-new--v1.png' alt='Twitter' style='margin-right:8px'></a>"}}/>
  <Box dangerouslySetInnerHTML={{"__html": "<a href='https://github.com/VaibhavSutar/EngageHub'><img src='https://img.icons8.com/color/48/github--v1.png' alt='Facebook' style='margin-right:8px'></a>"}}/>
  <Box dangerouslySetInnerHTML={{"__html": "<a href='https://www.linkedin.com/school/sfit/?originalSubdomain=in'><img src='https://img.icons8.com/color/48/linkedin.png' style='margin-right:8px'></a>"}}/>
</Flex>
  <Text sx={{"color": "white", "size": "sm", "mb": "2"}}>
  {`For inquiries, contact us at info@engagehub.com`}
</Text>
  <Text sx={{"color": "white", "size": "sm"}}>
  {`© 2024 EngageHub`}
</Text>
</Container>
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
