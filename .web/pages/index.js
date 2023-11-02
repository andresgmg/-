import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Center, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, Tooltip, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
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
  <Box sx={{"bg": "linear-gradient(160deg, rgb(109, 220, 225), rgb(83, 90, 229))", "width": "100vw", "height": "100vh"}}>
  <Center sx={{"paddingTop": "24px", "width": "100vw"}}>
  <VStack>
  <VStack spacing={`0`}>
  <Image src={`profile.png`} sx={{"width": "168", "height": "168", "borderRadius": "50%", "marginButton": "8px"}}/>
  <Text sx={{"fontWeight": "700", "fontSize": "36px", "lineHeight": "1.5em", "fontFamily": "DM Sans", "textAlign": "center", "width": "100%", "color": "rgb(255,255,255)", "paddingBotton": "3px"}}>
  {`Andres Marquez`}
</Text>
  <Text sx={{"fontWeight": "500", "fontSize": "18px", "fontFamily": "DM Sans", "textAlign": "center", "width": "100%", "color": "rgb(255,255,255)", "paddingBotton": "30px"}}>
  {`Python & TypeScript Full-Stack Developer`}
</Text>
</VStack>
  <VStack spacing={`0.9em`}>
  <Link as={NextLink} href={`https://www.linkedin.com/in/andresgmg/`} isExternal={true} sx={{"_hover": {}}}>
  <HStack sx={{"padding": "9px 7px", "width": "95vw", "maxWidth": "700px", "border": "1px solid rgb(128,160,201)", "borderRadius": "5px", "bg": "white", "boxShadow": "rgb(128,160,201) 8px 8px 0px 0px", "_hover": {"cursor": "pointer", "translate": "4px 4px", "boxShadow": "rgb(128,160,201) 8px 8px 0px 0px"}}}>
  <Image src={`linkedin.png`} sx={{"width": "30px"}}/>
  <Text sx={{"fontSize": "20px", "fontWeight": "500", "fontFamily": "DM Sans", "textAlign": "center", "width": "calc(100% - 80px)", "color": "#57618A"}}>
  {`Visit my Linkedin - Visita mi Linkedin`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`https://github.com/andresgmg/`} isExternal={true} sx={{"_hover": {}}}>
  <HStack sx={{"padding": "9px 7px", "width": "95vw", "maxWidth": "700px", "border": "1px solid rgb(128,160,201)", "borderRadius": "5px", "bg": "white", "boxShadow": "rgb(128,160,201) 8px 8px 0px 0px", "_hover": {"cursor": "pointer", "translate": "4px 4px", "boxShadow": "rgb(128,160,201) 8px 8px 0px 0px"}}}>
  <Image src={`github.png`} sx={{"width": "30px"}}/>
  <Text sx={{"fontSize": "20px", "fontWeight": "500", "fontFamily": "DM Sans", "textAlign": "center", "width": "calc(100% - 80px)", "color": "#57618A"}}>
  {`Visit my Github - Visita mi Github`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`https://www.facelad.com/`} isExternal={true} sx={{"_hover": {}}}>
  <HStack sx={{"padding": "9px 7px", "width": "95vw", "maxWidth": "700px", "border": "1px solid rgb(128,160,201)", "borderRadius": "5px", "bg": "white", "boxShadow": "rgb(128,160,201) 8px 8px 0px 0px", "_hover": {"cursor": "pointer", "translate": "4px 4px", "boxShadow": "rgb(128,160,201) 8px 8px 0px 0px"}}}>
  <Image src={`portfolio.png`} sx={{"width": "30px"}}/>
  <Text sx={{"fontSize": "20px", "fontWeight": "500", "fontFamily": "DM Sans", "textAlign": "center", "width": "calc(100% - 80px)", "color": "#57618A"}}>
  {`Visit my Webpage & Portfolio - Visita mi pagina web y portafolio`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`https://drive.google.com/file/d/1TtFWpmas_-TVenOlimbaGqxwC11BCnry/view?usp=sharing`} isExternal={true} sx={{"_hover": {}}}>
  <HStack sx={{"padding": "9px 7px", "width": "95vw", "maxWidth": "700px", "border": "1px solid rgb(128,160,201)", "borderRadius": "5px", "bg": "white", "boxShadow": "rgb(128,160,201) 8px 8px 0px 0px", "_hover": {"cursor": "pointer", "translate": "4px 4px", "boxShadow": "rgb(128,160,201) 8px 8px 0px 0px"}}}>
  <Image src={`google-drive.png`} sx={{"width": "30px"}}/>
  <Text sx={{"fontSize": "20px", "fontWeight": "500", "fontFamily": "DM Sans", "textAlign": "center", "width": "calc(100% - 80px)", "color": "#57618A"}}>
  {`Download my CV in Spanish - Descarga mi CV en Español`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`https://drive.google.com/file/d/1HRv1SahcV94pUdS2buuAhcksZz9pJmni/view?usp=sharing`} isExternal={true} sx={{"_hover": {}}}>
  <HStack sx={{"padding": "9px 7px", "width": "95vw", "maxWidth": "700px", "border": "1px solid rgb(128,160,201)", "borderRadius": "5px", "bg": "white", "boxShadow": "rgb(128,160,201) 8px 8px 0px 0px", "_hover": {"cursor": "pointer", "translate": "4px 4px", "boxShadow": "rgb(128,160,201) 8px 8px 0px 0px"}}}>
  <Image src={`google-drive.png`} sx={{"width": "30px"}}/>
  <Text sx={{"fontSize": "20px", "fontWeight": "500", "fontFamily": "DM Sans", "textAlign": "center", "width": "calc(100% - 80px)", "color": "#57618A"}}>
  {`Download my CV in English - Descarga mi CV en Ingles`}
</Text>
</HStack>
</Link>
  <HStack spacing={`1.5em`}>
  <Tooltip label={`My Email - Mi Correo`}>
  <Link as={NextLink} href={`mailto:andres.gmg1997@gmail.com`} isExternal={true} sx={{"_hover": {}}}>
  <Image src={`gmail.png`} sx={{"width": "48px", "_hover": {"cursor": "pointer", "transform": "scale(1.1)"}}}/>
</Link>
</Tooltip>
  <Tooltip label={`My WhatsApp - Mi WhatsApp`}>
  <Link as={NextLink} href={`https://api.whatsapp.com/send/?phone=56991279911`} isExternal={true} sx={{"_hover": {}}}>
  <Image src={`whatsapp.png`} sx={{"width": "48px", "_hover": {"cursor": "pointer", "transform": "scale(1.1)"}}}/>
</Link>
</Tooltip>
  <Tooltip label={`My Instagram - Mi Instagram`}>
  <Link as={NextLink} href={`https://www.instagram.com/andres.gmg/`} isExternal={true} sx={{"_hover": {}}}>
  <Image src={`instagram.png`} sx={{"width": "48px", "_hover": {"cursor": "pointer", "transform": "scale(1.1)"}}}/>
</Link>
</Tooltip>
  <Tooltip label={`My Telegram - Mi telegram`}>
  <Link as={NextLink} href={`https://t.me/CriptoAmerica`} isExternal={true} sx={{"_hover": {}}}>
  <Image src={`telegram.png`} sx={{"width": "48px", "_hover": {"cursor": "pointer", "transform": "scale(1.1)"}}}/>
</Link>
</Tooltip>
</HStack>
  <HStack>
  <Text sx={{"fontFamily": "DM Sans", "fontWeight": "300", "fontSize": "14px", "color": "rgb(255,255,255)"}}>
  {`pagina hecha con tecnologia `}
</Text>
  <Link as={NextLink} href={`https://reflex.dev/`} isExternal={true} sx={{"_hover": {"cursor": "pointer", "transform": "scale(1.05)"}}}>
  <Text sx={{"fontWeight": "300", "fontSize": "14px", "fontFamily": "DM Sans", "textAlign": "center", "width": "100%", "color": "rgb(255,255,255)", "paddingBotton": "5px"}}>
  {`Reflex Framework`}
</Text>
</Link>
  <Text sx={{"fontFamily": "DM Sans", "fontWeight": "300", "fontSize": "14px", "color": "rgb(255,255,255)"}}>
  {` en python - Mira aqui el `}
</Text>
  <Link as={NextLink} href={`https://github.com/andresgmg/andresgmg.github.io`} isExternal={true} sx={{"_hover": {"cursor": "pointer", "transform": "scale(1.05)"}}}>
  <Text sx={{"fontWeight": "300", "fontSize": "14px", "fontFamily": "DM Sans", "textAlign": "center", "width": "100%", "color": "rgb(255,255,255)", "paddingBotton": "5px"}}>
  {`Source Code`}
</Text>
</Link>
</HStack>
</VStack>
</VStack>
</Center>
</Box>
  <NextHead>
  <title>
  {`Andres Marquez`}
</title>
  <meta content={`My portfolio built with Reflex`} name={`description`}/>
  <meta content={`/portfolio.png`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
