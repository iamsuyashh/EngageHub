/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Flex, Heading, HStack, Image as ChakraImage, Link, List, Text } from "@chakra-ui/react"
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
  <Container sx={{"max-width": "800px", "margin": "0 auto", "padding": "20px", "background-color": "#f8f9fa", "border-radius": "8px", "box-shadow": "0 0 10px rgba(0, 0, 0, 0.1)", "text-align": "center"}}>
  <Heading sx={{"color": "indigo", "text-align": "center", "margin-bottom": "15px", "level": 1}}>
  {`About Us`}
</Heading>
  <ChakraImage alt={`ITSA Logo`} src={`https://i.ibb.co/tbxGhMn/itsa-logo.png`} sx={{"display": "block", "margin": "0 auto", "max-width": "20vw", "height": "auto", "margin-bottom": "20px", "border-radius": "8px"}}/>
  <Text sx={{"margin-bottom": "20px", "text-align": "center"}}>
  {`ITSA is a departmental organization for Information Technology. Founded in the year 2011-12, our committee organizes events to bridge the gap between classroom education and the technical skills required by students to be industry-ready.`}
</Text>
  <Text sx={{"margin-bottom": "20px", "text-align": "center"}}>
  {`Our workshops foster students' exposure to leading domains in technology to offer a headstart. We focus on holistic growth, so our students become complete engineers.`}
</Text>
  <Heading sx={{"color": "indigo", "text-align": "center", "margin-bottom": "15px", "level": 2}}>
  {`Objectives of ITSA`}
</Heading>
  <List>
  <List sx={{"margin-bottom": "5px", "text-align": "center"}}>
  {`Inspire, Enable, Empower, and Energize our student members to enhance their technical interests`}
</List>
  <List sx={{"margin-bottom": "5px", "text-align": "center"}}>
  {`To bridge the gap between academic and industry through organizing regular Events/Seminars/Workshops`}
</List>
  <List sx={{"margin-bottom": "5px", "text-align": "center"}}>
  {`To organize technical awareness programs for young professionals specifically targeted for placement activities`}
</List>
  <List sx={{"margin-bottom": "5px", "text-align": "center"}}>
  {`To kindle students' interest in research activities and projects`}
</List>
</List>
  <Heading sx={{"color": "indigo", "text-align": "center", "margin-bottom": "15px", "level": 2}}>
  {`Vision`}
</Heading>
  <Text sx={{"margin-bottom": "20px", "text-align": "center"}}>
  {`To be a chrysalis where bright youngsters are transformed into technological entrepreneurs and innovative leaders of tomorrow’s world, consistent with the Franciscan vision of integrity, peace, and love.`}
</Text>
  <Heading sx={{"color": "indigo", "text-align": "center", "margin-bottom": "15px", "level": 2}}>
  {`Mission`}
</Heading>
  <Text sx={{"margin-bottom": "20px", "text-align": "center"}}>
  {`To churn highly competent engineering graduates with a commitment to result-oriented work, a perennial zest for learning, a quest for excellence, an open mind, and the universal values of honesty, dignity, and mutual care.`}
</Text>
  <Text sx={{"margin-bottom": "20px", "text-align": "center"}}>
  {`To continually improve and progress on the path of developing postgraduate scholars who will be competent in exploring, developing, and disseminating new knowledge in their areas of specialization so that the repository of new knowledge and innovation and its dissemination will be enhanced in scope and effectiveness.`}
</Text>
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
