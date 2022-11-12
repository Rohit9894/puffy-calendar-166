import { Box, Button,  Flex,  Heading, HStack, Icon, Image,  List,  ListItem, SimpleGrid,  Text,  VStack } from "@chakra-ui/react";
import React from "react";


const CircleIcon = (props) => (
  <Icon viewBox='0 0 200 200' {...props}>
    <path
      fill='currentColor'
      d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    />
  </Icon>
)


const HtmlCheck = () => {
  return (
    <>
    <Box h="130%" m="120px auto" w="90%" >
      
        <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
        
  

          <SimpleGrid columns={['1','2']} direction={['column', 'row']}  spacing={30} gap={30} >

            <VStack w={{base:"100%", lg:"82%"}} textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
                <VStack>
                    <Heading fontWeight={600} fontSize="1.875rem" lineHeight={1.3} marginBottom={10} textAlign={{base:"none",lg:"left"}} display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
                        Check The HTML & CSS Support For Top Email Clients
                    </Heading>
                </VStack>
              

              <VStack gap={4} w="100%" >
                <Box display={"block"} lineHeight={1.2} fontWeight={500} textAlign={{base:"none",lg:"left"}} fontSize="1.125rem" color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}  >
                See how Gmail, Outlook, Apple Mail, and others will treat your emails. Fix the issues right away.
                </Box>
              </VStack> 

              <VStack mb={5}>
                <Button display={"block"} textAlign="left"  bgColor={"#22d172"} color={"#fff"} fontSize=".875rem" marginTop={5}>Sign Up For Free</Button>
              </VStack>
                
              <Box mt={15}>
              <Flex w={{base:"100%",lg:"120%"}} direction={{base:"column",lg:"row"}}  display={"flex"} alignItems="center" textAlign="center" justifyContent={"center"} marginTop={5} gap={2}>
                <Image w={106} h={33} src='https://mailtrap.io/wp-content/uploads/2021/05/logo__gmail.svg' alt='Gmail' />
                <Image w={106} h={33} src='https://mailtrap.io/wp-content/uploads/2021/05/logo__apple-mail.svg' alt='Apple' />
                <Image w={106} h={33} src='https://mailtrap.io/wp-content/uploads/2021/05/logo__yahoo-mail.svg' alt='Yahoo' />
                <Image w={106} h={33} src='https://mailtrap.io/wp-content/uploads/2021/05/logo__outlook.svg' alt='Outlook' />
                <Image w={106} h={33} src='https://mailtrap.io/wp-content/uploads/2021/05/logo__thunderbird.svg' alt='Thunderbird' />
            
              </Flex>

              </Box>
         
            </VStack>

            <Box mt={5}>
              <Image h="100%" w="100%" src='https://mailtrap.io/wp-content/uploads/2021/06/html_check_main_image.png' />
            </Box>
          </SimpleGrid>

        </VStack>

    </Box>

    <Box h="120%" m="100px auto" w="80%" mt={5} >
      
        <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} mt={20}>
          <Heading fontWeight={600} fontSize="1.875rem" lineHeight={1.3} marginBottom={20} textAlign="center" display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
            Everything you need to validate your HTML/CSS
          </Heading>

          <SimpleGrid columns={['1','2']} direction={['column', 'row']}  spacing={20}>
            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/logo-computer.svg' />
                <VStack>
                  <Box fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Verify email client support</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign={{base:"center", lg:"left"}} fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>See how many of your recipients will have no trouble displaying your emails.</Box>
                </VStack>
              </HStack>
            </Box>
            
            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/comp.svg' />
                <VStack>
                  <Box justifyContent={"space-between"} fontSize={"1.125rem"} align="flex-start" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Check each HTML/CSS element</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>View the list of unsupported elements and find out which email clients lack compatibility.</Box>
                </VStack>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/person-icon.svg' />
                <VStack>
                  <Box  fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Optimize for your audience</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Enhance your emails for mobile or focus only on a particular email client, if you wish.</Box>
                </VStack>  
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/comment-icon.svg' />
                <VStack>
                  <Box fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Find problematic lines in code</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Jump directly to the unsupported elements in your email’s code. Fix them, resend an email and check for improvements.</Box>
                </VStack>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/email-icon-1.svg' />
                <VStack>
                  <Box fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Preview each iteration</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>See how each email renders on desktop, mobile and a tablet. Validate each new version without leaving your Sandbox inbox.</Box>
                </VStack>

              </HStack>
            </Box>
          </SimpleGrid>

        </VStack>
    </Box>


    <Box h="200%" m="100px auto" w="100%" >

        <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
            <Heading fontWeight={600} fontSize="26px" lineHeight={1.3} marginBottom={12} textAlign="center" display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
                Trusted by 150,000+ monthly active users
            </Heading>


        </VStack>

        <Flex direction={{base:"column",lg:"row"}} gap={20}  display={"flex"} alignItems="center" textAlign="center" justifyContent={"center"} marginTop={10}>
            <Image w={106} h={33} src='https://mailtrap.io/wp-content/uploads/2021/04/Adobe.svg' alt='Adobe' />
            <Image w={106} h={33} src='https://mailtrap.io/wp-content/uploads/2021/04/Atlassian.svg' alt='Atlassian' />
            <Image w={106} h={33} src='https://mailtrap.io/wp-content/uploads/2021/04/Calendly.svg' alt='Calendly' />
            <Image w={106} h={33} src='https://mailtrap.io/wp-content/uploads/2021/04/Yelp.svg' alt='Yelp' />
            <Image w={106} h={33} src='https://mailtrap.io/wp-content/uploads/2021/04/UserTesting.svg' alt='UserTesting' />

        </Flex>

    </Box>

   

 <Box h="130%" m="100px auto" w="90%" >
      
      <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
      


        <SimpleGrid columns={['1','2']} direction={['column', 'row']}  spacing={20} gap={50} >

          <VStack w={"90%"}  display={"block"} textAlign="left" marginTop={10}>
            <Heading fontWeight={600} fontSize="1.875rem" lineHeight={1.3} marginBottom={12} textAlign="left" display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
                Check your HTML in a few simple steps
            </Heading>

            <List spacing={3} alignItems={"flex-start"} w="100%" >
                <ListItem alignItems={"flex-start"} w="100%" display={"block"} color="#202c45" fontSize={"1.125rem"} fontWeight={600} lineHeight={1.3} fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">
                    <CircleIcon color='#22d172' />
                        Integrate Email Sandbox with your app
                </ListItem>
                <Text ml={5} marginTop="1.2rem" display={"block"} fontSize="14px" lineHeight={1.7} fontWeight="400" color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Copy the credentials or use the ready code available for over 20 frameworks and libraries. Trigger the first email and watch as it arrives into your Sandbox inbox.</Text>
                <ListItem alignItems={"flex-start"} w="100%" display={"block"} color="#202c45" fontSize={"1.125rem"} fontWeight={600} lineHeight={1.3} fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">
                <CircleIcon color='#22d172' />
                    Check the HTML
                </ListItem>
                <Text ml={5} marginTop="1.2rem" display={"block"} fontSize="14px" lineHeight={1.7} fontWeight="400" color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>View the market support score for your emails. See the list of unsupported elements and find the problematic lines in the email code.</Text>
                <ListItem alignItems={"flex-start"} w="100%" display={"block"} color="#202c45" fontSize={"1.125rem"} fontWeight={600} lineHeight={1.3} fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">
                    <CircleIcon color='#22d172' />
                        Iterate on your template
                </ListItem>
                <Text ml={5} marginTop="1.2rem" display={"block"} fontSize="14px" lineHeight={1.7} fontWeight="400" color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Fix the outlined issues and send in the new copies of your emails into your Sandbox inbox. Repeat until you’re happy with the results.</Text>
                
            
            </List>

            <VStack>
              <Button display={"block"} textAlign="left"  bgColor={"#1a2e44"} color={"#fff"} fontSize=".875rem" marginTop={5}>Sign Up For Free</Button>

            </VStack>
       
          </VStack>

          <Box>
            <Image h="100%" w="100%" src='https://mailtrap.io/wp-content/uploads/2021/06/image_checker_retina-700x760.png' />
          </Box>

        </SimpleGrid>

      </VStack>

  </Box> 


  <Box h="130%" m="100px auto" w="70%" >
        
        <VStack w={"100%"} textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
          <VStack marginBottom={20}>
            <Heading fontWeight={600} fontSize="1.875rem" lineHeight={1.3} textAlign="center" display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
              From our #BestClientEver
            </Heading>
          </VStack>

          <SimpleGrid columns={[1, null, 2]} spacing={10}  >

            <Box h="100%" spacing={10} borderRadius={"0.625rem"} bgColor="#fff" display={"block"} lineHeight={1.7} boxShadow={"0 0.3125rem 1rem rgb(0 0 0 / 7%)"} textAlign="left" color="#202c45" fontWeight={400} fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">
              <HStack columns={[1, null, 2]} spacing={2} marginLeft={5} marginTop={5}>
                <Text fontSize={"1.125rem"} textAlign="left" color="#202c45" display={"block"} fontWeight={600} lineHeight={1.7} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>DeveloperMitch </Text>
                <Text lineHeight={1.7} color={"GrayText"} fontSize="14px" fontWeight={400} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>@mitchellfinlay</Text>
              </HStack>
              <VStack>
                <Text marginLeft={5} display={"block"} fontSize="14px" lineHeight={1.7} fontWeight={400} color="#202c45" textAlign={"left"} fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji" >

                  After all these years of web development, how have I only  JUST started using @Mailtrap. I had heard about it, but never got round to using it. An awesome way of testing emails.
                </Text>
              </VStack>
              <Text marginLeft={5} marginBottom={5} textAlign={"left"} fontSize="14px" color={"GrayText"} lineHeight={1.7} fontWeight={400} fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">7:38 PM – Jan 13, 2021</Text>

            </Box>

            <Box h="100%" spacing={10} borderRadius={"0.625rem"} bgColor="#fff" display={"block"} lineHeight={1.7} boxShadow={"0 0.3125rem 1rem rgb(0 0 0 / 7%)"} textAlign="left" color="#202c45" fontWeight={400} fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">
              <HStack columns={[1, null, 2]} spacing={2} marginLeft={5} marginTop={5}>
                <Text fontSize={"1.125rem"} textAlign="left" color="#202c45" display={"block"} fontWeight={600} lineHeight={1.7} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Alessandro Rodi</Text>
                <Text lineHeight={1.7} color={"GrayText"} fontSize="14px" fontWeight={400} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>@coorasse</Text>
              </HStack>
              <VStack>
                <Text marginLeft={5} display={"block"} fontSize="14px" lineHeight={1.7} fontWeight={400} color="#202c45" textAlign={"left"} fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji" >
                  I love @Mailtrap. It removes all the asshole of configuring email servers in test environments. Great service! Is totally worth your money!
                </Text>
              </VStack>
              <Text marginLeft={5} marginBottom={5} textAlign={"left"} fontSize="14px" color={"GrayText"} lineHeight={1.7} fontWeight={400} fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">1:15 PM – Oct 20, 2020  </Text>

            </Box>

          </SimpleGrid>
        </VStack>

      </Box>


      <Box h="130%" m="100px auto" w="80%" >
       
        <VStack w={"100%"} textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
          <VStack marginBottom={20}>
            <Heading fontWeight={600} fontSize="1.875rem" lineHeight={1.3} textAlign="center" display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
              Email testing toolset available with Email Sandbox
            </Heading>
          
          </VStack>

          <SimpleGrid columns={[1, null, 3]} spacing='40px' w="100%" gap={10}>
            <Box w="90%"  textAlign="center">
              <Image boxSize={'120px'} ml={20} display={"block"}  textAlign="center"  src='https://mailtrap.io/wp-content/uploads/2021/01/auomation-logo.svg' />
              <Heading textAlign={"center"} mb={"1rem"} mt={"1rem"} fontSize="1.125rem" fontWeight={600} lineHeight={1.3} display="block" color="#202c45" fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">QA Automation</Heading>
              <Text display={"block"} fontSize="14px" textAlign="center" lineHeight={1.7} fontWeight={400} color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Build automated tests of your email sequences and include them in your testing suite. Verify each component of a message with Sandbox API.</Text>
              <Button colorScheme='#1a2e44' variant='outline' fontSize=".875rem" marginTop={2} >
                Learn More
              </Button>          
            </Box>

            <Box w="90%"  textAlign="center">
              <Image boxSize={'120px'} ml={20} display={"block"}  textAlign="center"  src='https://mailtrap.io/wp-content/uploads/2021/01/mailtrap-logo.svg' />
              <Heading textAlign={"center"} mb={"1rem"} mt={"1rem"} fontSize="1.125rem" fontWeight={600} lineHeight={1.3} display="block" color="#202c45" fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">Sandbox API</Heading>
              <Text display={"block"} fontSize="14px" textAlign="center" lineHeight={1.7} fontWeight={400} color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Cover your code with automated tests and validate each message sent dev, and staging. Verify emails sent from live sites as well.</Text>
              <Button colorScheme='#1a2e44' variant='outline' fontSize=".875rem" marginTop={2} >
                Learn More
              </Button>          
            </Box>

            <Box w="90%"  textAlign="center">
              <Image boxSize={'120px'} ml={20} display={"block"}  textAlign="center"  src='https://mailtrap.io/wp-content/uploads/2021/05/img__fake-email-environment.svg' />
              <Heading textAlign={"center"} mb={"1rem"} mt={"1rem"} fontSize="1.125rem" fontWeight={600} lineHeight={1.3} display="block" color="#202c45" fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">Fake SMTP</Heading>
              <Text display={"block"} fontSize="14px" textAlign="center" lineHeight={1.7} fontWeight={400} color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Test email sending from your project and view each email sent in your Sandbox inbox. Never send a thing to the recipience inboxes.</Text>
              <Button colorScheme='#1a2e44' variant='outline' fontSize=".875rem" marginTop={2} >
                Learn More
              </Button>          
            </Box>

          </SimpleGrid>

          
        </VStack>

      </Box>

      
      <Box h="80%" m="100px auto" w="100%" >
        <VStack w={"100%"} textAlign="center" display={"block"} justifyContent={"center"} >

          <SimpleGrid columns={['1', '2']} direction={['column', 'row']} spacing={20} gap={{base:10,lg:250}} bgColor="#1a2e44"  >
            <Box marginTop='25%' >
              <VStack>
                <Text fontWeight={700} fontSize="1.25rem" lineHeight={1} color="#fff" textAlign={"left"} fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Create Your Free Account</Text>
                <Text fontSize={"2.375rem"} lineHeight={1} fontWeight={600} display="block" color={"#fff"} textAlign="left" fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">In 3 Clicks</Text>

              </VStack>
              <Button bgColor={"#22d172"} color={"#fff"} fontSize=".875rem" marginTop={9}>Sign Up For Free</Button>

            </Box>

            <Box>
              <Image boxSize='sm' textAlign={"right"} src='https://mailtrap.io/wp-content/uploads/2021/01/img__cta.svg' />
            </Box>
          </SimpleGrid>

        </VStack>

      </Box>

    </>
  )
}

export default HtmlCheck