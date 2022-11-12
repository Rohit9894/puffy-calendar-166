import { Box, Button,  Flex, Heading, HStack, Icon, Image,  List,  ListItem, SimpleGrid,  Text,  VStack } from "@chakra-ui/react";
import React from "react";



const CircleIcon = (props) => (
  <Icon viewBox='0 0 200 200' {...props}>
    <path
      fill='currentColor'
      d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
    />
  </Icon>
)


const FakeServer = () => {
  return (
    <>
    <Box h="130%" m="100px auto" w="90%" >
      
        <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
        
          <SimpleGrid columns={['1','2']} direction={['column', 'row']}  spacing={20} gap={50} >

            <VStack w={{base:"100%", lg:"82%"}} textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
              <Heading fontWeight={600} fontSize="1.875rem" lineHeight={1.3} marginBottom={12} textAlign={{base:"none",lg:"left"}} display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
              Safe Email Testing With Fake SMTP Server
              </Heading>

              <VStack gap={4} w="100%" >
                <Box display={"block"} lineHeight={1.2} fontWeight={500} textAlign={{base:"none",lg:"left"}} fontSize="1.125rem" color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}  >
                Test emails safely, with 5-minute setup, zero maintenance, and no risk of spamming recipients’ inboxes
                </Box>
                <Button display={"block"} textAlign="left"  bgColor={"#22d172"} color={"#fff"} fontSize=".875rem" marginTop={5}>Sign Up For Free</Button>
              </VStack> 
                
              <Box mt={10}>
                <Flex w={{base:"100%",lg:"120%"}} direction={{base:"column",lg:"row"}}  display={"flex"} alignItems="center" textAlign="center" justifyContent={"center"} marginTop={5}>
                    <Image w={106} h={30} src='https://mailtrap.io/wp-content/uploads/2021/01/logo__rails.svg' alt='Selenium' />
                    <Image w={106} h={30} src='https://mailtrap.io/wp-content/uploads/2021/05/logo__java.svg' alt='cucumber' />
                    <Image w={106} h={30} src='https://mailtrap.io/wp-content/uploads/2021/01/logo__net.svg' alt='Protractor' />
                    <Image w={106} h={30} src='https://mailtrap.io/wp-content/uploads/2021/05/Python.svg' alt='Cypress' />
                    <Image w={106} h={30} src='https://mailtrap.io/wp-content/uploads/2021/01/logo__php.svg' alt='Jmeter' />
                
                </Flex>
              </Box>
         
            </VStack>

            <Box>
              <Image h="80%" w="100%" src='https://mailtrap.io/wp-content/uploads/2021/05/img__qa.svg' />
            </Box>
          </SimpleGrid>

        </VStack>

    </Box>

    <Box h="120%" m="100px auto" w="80%" >
      
        <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
          <Heading fontWeight={600} fontSize="1.875rem" lineHeight={1.3} marginBottom={20} textAlign="center" display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
            Everything you need for your testing environment
          </Heading>

          <SimpleGrid columns={['1','2']} direction={['column', 'row']}  spacing={20}>
            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/logo-clock.svg' />
                <VStack>
                  <Box fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Testing environment ready in 5 minutes</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign={{base:"center", lg:"left"}} fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Each Email Sandbox account comes with an individual testing environment. Integrate it with your app in just a few clicks.</Box>
                </VStack>
              </HStack>
            </Box>
            
            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/logo-computer.svg' />
                <VStack>
                  <Box justifyContent={"space-between"} fontSize={"1.125rem"} align="flex-start" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Simple UI for your fake email server</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>No experience with setting up SMTP server required. Paste the credentials into your app to capture and view the emails in Sandbox.</Box>
                </VStack>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/logo-boxes.svg' />
                <VStack>
                  <Box  fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Separate inboxes for each of your environments</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Create individual inboxes for different environments or review servers. Or route all emails into one inbox if you prefer.</Box>
                </VStack>  
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/logo-email-1.svg' />
                <VStack>
                  <Box fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >No real emails are sent</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Email Sandbox doesn’t connect to mail servers and captures all emails into a virtual inbox. There’s zero chance of accidentally emailing your users.</Box>
                </VStack>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/icon-smtp.svg' />
                <VStack>
                  <Box fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Use fake SMTP with any tool</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Mailtrap can be integrated with any tool that supports SMTP. Use fake SMTP credentials in external tools to test what’s sent on your behalf.</Box>
                </VStack>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/logo-data.svg' />
                <VStack>
                  <Box fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Ditch maintaining your infrastructure</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Say farewell to downtimes, upgrades or performance monitoring. We take care of them for you with 99,9%+ uptime.</Box>
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
                Capturing emails is easy with Fake SMTP Server
                </Heading>

                <List spacing={3} alignItems={"flex-start"} w="100%" >
                    <ListItem alignItems={"flex-start"} w="100%" display={"block"} color="#202c45" fontSize={"1.125rem"} fontWeight={600} lineHeight={1.3} fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">
                        <CircleIcon color='#22d172' />
                        Sign up and copy the fake SMTP credentials
                    </ListItem>
                    <Text ml={5} marginTop="1.2rem" display={"block"} fontSize="14px" lineHeight={1.7} fontWeight="400" color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Create an account and open the configuration of your testing environment. Copy the credentials or grab the ready code available for 20+ frameworks and libraries</Text>
                    <ListItem alignItems={"flex-start"} w="100%" display={"block"} color="#202c45" fontSize={"1.125rem"} fontWeight={600} lineHeight={1.3} fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">
                    <CircleIcon color='#22d172' />
                    Integrate your app and send the first email
                    </ListItem>
                    <Text ml={5} marginTop="1.2rem" display={"block"} fontSize="14px" lineHeight={1.7} fontWeight="400" color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Add Mailtrap Email Sandbox as your SMTP server and trigger the first email to be sent. After a second or two, it will arrive into your Sandbox inbox.</Text>
                    <ListItem alignItems={"flex-start"} w="100%" display={"block"} color="#202c45" fontSize={"1.125rem"} fontWeight={600} lineHeight={1.3} fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">
                        <CircleIcon color='#22d172' />
                        Check the email content manually or automate the process
                    </ListItem>
                    <Text ml={5} marginTop="1.2rem" display={"block"} fontSize="14px" lineHeight={1.7} fontWeight="400" color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Preview the email, check its HTML, spam score or raw headers. Use Sandbox API to do all of these automatically.</Text>
                </List>

                <VStack>
                    <Button display={"block"} textAlign="left"  bgColor={"#1a2e44"} color={"#fff"} fontSize=".875rem" marginTop={5}>Sign Up For Free</Button>
                </VStack>
       
            </VStack>

            <Box>
                <Image h="100%" w="100%" src='https://mailtrap.io/wp-content/uploads/2021/05/img__capturing.svg' />
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
              <Image boxSize={'120px'} ml={20} display={"block"}  textAlign="center"  src='https://mailtrap.io/wp-content/uploads/2021/01/html-checkef.svg' />
              <Heading textAlign={"center"} mb={"1rem"} mt={"1rem"} fontSize="1.125rem" fontWeight={600} lineHeight={1.3} display="block" color="#202c45" fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">HTML Check</Heading>
              <Text display={"block"} fontSize="14px" textAlign="center" lineHeight={1.7} fontWeight={400} color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Validate the HTML/CSS rules included in your emails template. Gauge the support across popular clients – on web, mobile, and desktop.</Text>
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
              <Image boxSize={'120px'} ml={20} display={"block"}  textAlign="center"  src='https://mailtrap.io/wp-content/uploads/2021/01/auomation-logo.svg' />
              <Heading textAlign={"center"} mb={"1rem"} mt={"1rem"} fontSize="1.125rem" fontWeight={600} lineHeight={1.3} display="block" color="#202c45" fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">QA Automation</Heading>
              <Text display={"block"} fontSize="14px" textAlign="center" lineHeight={1.7} fontWeight={400} color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Build automated tests of your email sequences and include them in your testing suite. Verify each component of a message with Sandbox API.</Text>
              <Button colorScheme='#1a2e44' variant='outline' fontSize=".875rem" marginTop={2} >
                Learn More
              </Button>
              
            </Box>

          </SimpleGrid>

        </VStack>

      </Box>

      
      <Box h="80%" m="100px auto" w="100%" >
        <VStack w={"100%"} textAlign="center" display={"block"} justifyContent={"center"} >

          <SimpleGrid columns={['1', '2']} direction={['column', 'row']} spacing={20} gap={250} bgColor="#1a2e44"  >
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

export default FakeServer