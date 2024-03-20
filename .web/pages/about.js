/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Heading, HStack, Link, Text } from "@chakra-ui/react"
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
  <Box sx={{"max-width": "800px", "margin": "auto", "padding": "2em", "font-family": "Arial, sans-serif", "line-height": "1.6", "color": "black"}}>
  <Heading sx={{"color": "indigo", "text-align": "center", "margin-bottom": "15px"}}>
  {`About Engage Hub`}
</Heading>
  <Text>
  {`Welcome to Engage Hub - Your Ultimate Event Update and Information Hub for College and IT Departments! Engage Hub is a dedicated platform designed to streamline and enhance your college experience by providing up-to-date information on events, activities, and crucial information related to the Information Technology department.`}
</Text>
  <Heading sx={{"color": "indigo", "text-align": "center", "margin-bottom": "15px"}}>
  {`Our Mission`}
</Heading>
  <Text>
  {`At Engage Hub, our mission is to empower students, faculty, and staff with the latest and most relevant information to foster a connected and informed community. We believe that staying informed is the key to a successful and engaging college experience.`}
</Text>
  <Heading sx={{"color": "indigo", "text-align": "center", "margin-bottom": "15px"}}>
  {`Features`}
</Heading>
  <Box sx={{"margin-bottom": "1em"}}>
  <Text sx={{"margin-bottom": "0.5em"}}>
  {`Event Updates: Stay in the loop with real-time updates on upcoming events, workshops, seminars, and social gatherings within your college and IT department.`}
</Text>
  <Text sx={{"margin-bottom": "0.5em"}}>
  {`Department Information: Access essential information about the Information Technology department, including faculty details, departmental announcements, and academic resources.`}
</Text>
  <Text sx={{"margin-bottom": "0.5em"}}>
  {`Seamless Communication: Connect with fellow students, faculty, and department staff through our integrated communication features, facilitating collaboration and community building.`}
</Text>
  <Text sx={{"margin-bottom": "1em"}}>
  {`Personalized Experience: Customize your preferences to receive notifications and updates tailored to your specific interests and academic needs.`}
</Text>
</Box>
  <Heading sx={{"color": "indigo", "text-align": "center", "margin-bottom": "15px"}}>
  {`Why Choose Engage Hub?`}
</Heading>
  <Box sx={{"margin-bottom": "1em"}}>
  <Text sx={{"margin-bottom": "0.5em"}}>
  {`Efficiency: Save time and effort by having all event updates and departmental information in one central hub.`}
</Text>
  <Text sx={{"margin-bottom": "0.5em"}}>
  {`Community Building: Foster a sense of community within your college and IT department through enhanced communication and collaboration.`}
</Text>
  <Text sx={{"margin-bottom": "1em"}}>
  {`Empowerment: Empower yourself with the knowledge needed to make the most of your college experience and academic journey.`}
</Text>
</Box>
  <Box sx={{"text-align": "center"}}>
  <Button sx={{"href": "/register", "color": "indigo", "dark": true}}>
  {`Get Started Today!`}
</Button>
</Box>
</Box>
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
