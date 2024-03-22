/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Container, Flex, Heading, HStack, Image as ChakraImage, Link, List, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import dynamic from "next/dynamic"
import NextHead from "next/head"

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container sx={{"max-width": "100vw", "background-color": "#F8F8FA"}}>
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
  <ReactPlayer controls={false} height={`60vh`} url={`https://youtu.be/hvVGFVUadvA?feature=shared`} width={`100%`}/>
  <VStack sx={{"margin": "10", "height": "100vh"}}>
  <Flex direction={`column`}>
  <Flex>
  <Heading sx={{"align": "left"}}>
  {`Upcoming Events`}
</Heading>
</Flex>
  <Box>
  <SimpleGrid columns={[3]} sx={{"height": "35vh", "width": "70vw", "rows": [2]}}>
  <Flex>
  <Link as={NextLink} href={`/eventInfo/hackstomp/`} sx={{"marginY": "1em", "marginX": "1em"}}>
  <Card size={`lg`} sx={{"height": "100%", "width": "100%", "drop-shadow": "1", "text-decoration": "none", "asChild": true}}>
  <CardBody>
  <Box>
  <ChakraImage src={`https://i.ibb.co/7RLzM8k/mosiac.jpg`}/>
  <Heading>
  {`Hackstomp`}
</Heading>
  <Text>
  {`BORIVALI `}
</Text>
</Box>
</CardBody>
</Card>
</Link>
</Flex>
  <Flex>
  <Link as={NextLink} href={`/eventInfo/TantraUtsav/`} sx={{"marginY": "1em", "marginX": "1em"}}>
  <Card size={`lg`} sx={{"height": "100%", "width": "100%", "drop-shadow": "1", "text-decoration": "none", "asChild": true}}>
  <CardBody>
  <Box>
  <ChakraImage src={`https://i.ibb.co/LtXsngP/ielts.jpg`}/>
  <Heading>
  {`TantraUtsav`}
</Heading>
  <Text>
  {`borivali`}
</Text>
</Box>
</CardBody>
</Card>
</Link>
</Flex>
</SimpleGrid>
</Box>
  <Spacer/>
</Flex>
</VStack>
  <Container sx={{"max-width": "800px", "margin": "0 auto", "padding": "20px", "background-color": "#f8f9fa", "border-radius": "8px", "box-shadow": "0 0 10px rgba(0, 0, 0, 0.1)", "margin-top": "-20vw", "justify-content": "center", "align-items": "center"}}>
  <Heading sx={{"margin-bottom": "20px", "font-size": "2em", "level": 1}}>
  {`Blog`}
</Heading>
  <ChakraImage alt={`ITSA Logo`} src={`https://i.ibb.co/tbxGhMn/itsa-logo.png`} sx={{"display": "block", "margin": "0 auto", "max-width": "20vw", "height": "auto", "margin-bottom": "20px", "border-radius": "8px"}}/>
  <Text sx={{"margin-bottom": "20px"}}>
  {`ITSA is a departmental organization for Information Technology. Founded in the year 2011-12, our committee organizes events to bridge the gap between classroom education and the technical skills required by students to be industry-ready.`}
</Text>
  <Text sx={{"margin-bottom": "20px"}}>
  {`Our workshops foster students' exposure to leading domains in technology to offer a headstart. We focus on holistic growth, so our students become complete engineers.`}
</Text>
  <Heading sx={{"margin-bottom": "10px", "level": 2}}>
  {`Objectives of ITSA`}
</Heading>
  <List>
  <List sx={{"margin-bottom": "5px"}}>
  {`Inspire, Enable, Empower, and Energize our student members to enhance their technical interests`}
</List>
  <List sx={{"margin-bottom": "5px"}}>
  {`To bridge the gap between academic and industry through organizing regular Events/Seminars/Workshops`}
</List>
  <List sx={{"margin-bottom": "5px"}}>
  {`To organize technical awareness programs for young professionals specifically targeted for placement activities`}
</List>
  <List sx={{"margin-bottom": "5px"}}>
  {`To kindle students' interest in research activities and projects`}
</List>
</List>
  <Heading sx={{"margin-bottom": "10px", "level": 2}}>
  {`Vision`}
</Heading>
  <Text sx={{"margin-bottom": "20px"}}>
  {`To be a chrysalis where bright youngsters are transformed into technological entrepreneurs and innovative leaders of tomorrow’s world, consistent with the Franciscan vision of integrity, peace, and love.`}
</Text>
  <Heading sx={{"margin-bottom": "10px", "level": 2}}>
  {`Mission`}
</Heading>
  <Text sx={{"margin-bottom": "20px"}}>
  {`To churn highly competent engineering graduates with a commitment to result-oriented work, a perennial zest for learning, a quest for excellence, an open mind, and the universal values of honesty, dignity, and mutual care.`}
</Text>
  <Spacer/>
  <Text sx={{"margin-bottom": "20px"}}>
  {`To continually improve and progress on the path of developing postgraduate scholars who will be competent in exploring, developing, and disseminating new knowledge in their areas of specialization so that the repository of new knowledge and innovation and its dissemination will be enhanced in scope and effectiveness`}
</Text>
</Container>
  <Spacer/>
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
