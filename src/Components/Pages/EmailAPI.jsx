import { Box, Button, Center, Circle, Container, Flex, FormControl, FormLabel, Grid, GridItem, Heading, HStack, Image, Input, List, ListIcon, ListItem, SimpleGrid, Spacer, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react";
import React from "react";

const EmailAPI = () => {
  return (
    <>
    <Box h="130%" m="100px auto" w="100%" border={"1px solid red"}>
      {/* <HStack w="100%" justify={"space-evenly"}> */}
        <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
        
  

          <SimpleGrid columns={['1','2']} direction={['column', 'row']}  spacing={20} gap={50} >

          <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
          <Heading fontWeight={600} fontSize="1.875rem" lineHeight={1.3} marginBottom={12} textAlign="center" display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
            Email Sandbox Service
          </Heading>

          <VStack gap={4}>
            <Box display={"block"} lineHeight={1.2} fontWeight={500} textAlign={"center"} fontSize="1.125rem" color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}  >
              Capture SMTP traffic from staging and dev environments
            </Box>
            <Box display={"block"} lineHeight={1.2} fontWeight={500} textAlign={"center"}  fontSize="1.125rem" color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>
              Automate test flows and scenarios with flexible API
            </Box>
            <Box display={"block"} lineHeight={1.2} fontWeight={500} textAlign={"center"}  fontSize="1.125rem" color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>
              Analyze email content for spam score and validate HTML/CSS
            </Box>
          </VStack> 

          <VStack>
            <Button bgColor={"#22d172"} color={"#fff"} fontSize=".875rem" marginTop={9}>Sign Up For Free</Button>
          </VStack>

        </VStack>
    
            {/* <Box marginTop={20}>
              <VStack>
                <HStack alignItems={"flex-start"} w="100%">
                  <Circle w='40px' h='40px' bg='#22d172' color='white'>
                    <Box as='span' fontWeight='bold' fontSize='lg'>
                      1
                    </Box>
                  </Circle>
                  <Box fontSize={"1.125rem"} fontWeight={600} lineHeight={1.3} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} display={"block"} color="#202c45" textAlign={"left"}>Select your integration from 20+ code samples or copy SMTP credentials</Box>
                </HStack>
                <HStack alignItems={"flex-start"} w="100%">
                  <Circle w='40px' h='40px' bg='#22d172' color='white'>
                    <Box as='span' fontWeight='bold' fontSize='lg'>
                      2
                    </Box>
                  </Circle>
                  <Box fontSize={"1.125rem"} fontWeight={600} lineHeight={1.3} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} display={"block"} color="#202c45" textAlign={"left"}>Paste the configuration to your project</Box>
                </HStack>
                <HStack alignItems={"flex-start"} w="100%">
                  <Circle w='40px' h='40px' bg='#22d172' color='white'>
                      <Box as='span' fontWeight='bold' fontSize='lg'>
                        3
                      </Box>
                    </Circle>
                  <Box fontSize={"1.125rem"} fontWeight={600} lineHeight={1.3} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} display={"block"} color="#202c45" textAlign={"left"}>Run your email sending code</Box>
                </HStack>
                <HStack alignItems={"flex-start"} w="100%">
                  <Circle w='40px' h='40px' bg='#22d172' color='white'>
                    <Box as='span' fontWeight='bold' fontSize='lg'>
                      4
                    </Box>
                  </Circle>
                  <Box fontSize={"1.125rem"} fontWeight={600} lineHeight={1.3} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} display={"block"} color="#202c45" textAlign={"left"}>Instantly receive a message in your Mailtrap inbox</Box>
                </HStack>
              </VStack>
              
            </Box> */}
            <Box>
              <Image h="80%" w="100%" src='https://mailtrap.io/wp-content/uploads/2022/02/sending_landing_hero_image_2.svg' />
            </Box>
          </SimpleGrid>

        </VStack>

    </Box>


    </>
  )
}

export default EmailAPI