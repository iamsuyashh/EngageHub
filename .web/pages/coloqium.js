/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Flex, Heading, HStack, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



<<<<<<< HEAD
export function Box_acf2c4e2e8fef16816545212e653d189 () {
  
    const handleSubmit_17388008c9d876f4b3f6fa35cdde2ebd = useCallback((ev) => {
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
    <Box as={`form`} onSubmit={handleSubmit_17388008c9d876f4b3f6fa35cdde2ebd} sx={{"padding": "2em", "width": "500px", "margin-top": "3em"}}>
  <VStack>
  <Input name={`name`} placeholder={`Name`} sx={{"width": "100%"}} type={`text`}/>
  <Input name={`email`} placeholder={`Enter your email`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`email`}/>
  <Input name={`header`} type={`hidden`} value={`Coloqium`}/>
  <Input name={`pid_number`} placeholder={`Enter PID`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`number`}/>
  <Input name={`ph_number`} placeholder={`Enter your Phone Number`} sx={{"margin-bottom": "1em", "marginBottom": "1em", "width": "100%"}} type={`number`}/>
  <Button sx={{"margin-top": "3em", "bg": "indigo", "color": "white", "marginTop": "5em"}} type={`submit`} variant={`outline`}>
  {`Register`}
</Button>
</VStack>
</Box>
  )
}

=======
>>>>>>> f2170d7d345a16fd9a2765d325e65eb2f2ebdb10
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
  <Text>
  {`Loading...`}
</Text>
<<<<<<< HEAD
</Container>
  <Container sx={{"margin-top": "0.5rem"}}>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Date: 2024-03-14`}
</Text>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Time: 10:51`}
</Text>
  <Text sx={{"font-weight": "bold", "color": "black"}}>
  {`Location: borivali, Malad`}
</Text>
</Container>
  <VStack>
  <Box_acf2c4e2e8fef16816545212e653d189/>
</VStack>
</Container>
</Container>
=======
>>>>>>> f2170d7d345a16fd9a2765d325e65eb2f2ebdb10
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
