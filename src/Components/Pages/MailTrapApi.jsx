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


const MailTrapApi = () => {
  return (
    <>
    <Box h="130%" m="100px auto" w="90%" >
      
        <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
        
  

          <SimpleGrid columns={['1','2']} direction={['column', 'row']}  spacing={20} gap={50} >

            <VStack w={{base:"100%", lg:"82%"}} textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
              <Heading fontWeight={600} fontSize="1.875rem" lineHeight={1.3} marginBottom={12} textAlign={{base:"none",lg:"left"}} display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
              Automate Your Email Testing With Sandbox API
              </Heading>

              <VStack gap={4} w="100%" >
                <Box display={"block"} lineHeight={1.2} fontWeight={500} textAlign={{base:"none",lg:"left"}} fontSize="1.125rem" color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}  >
                Cover your code with tests and validate if emails are sent. Test multiple variables at a time.
                </Box>
               
              </VStack> 

              <VStack mb={5}>
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
              <Image h="80%" w="100%" src='https://mailtrap.io/wp-content/uploads/2021/05/img__API.svg' />
            </Box>
          </SimpleGrid>

        </VStack>

    </Box>

    <Box h="120%" m="100px auto" w="80%" >
      
        <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
          <Heading fontWeight={600} fontSize="1.875rem" lineHeight={1.3} marginBottom={20} textAlign="center" display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
          Email Sandbox API has everything you need to test your emails
          </Heading>

          <SimpleGrid columns={['1','2']} direction={['column', 'row']}  spacing={20}>
            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/icon_work.svg' />
                <VStack>
                  <Box fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Verify hundreds of variables, at once</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign={{base:"center", lg:"left"}} fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Complex workflows call for comprehensive solutions. Test any number of unique emails in a matter of seconds.</Box>
                </VStack>
              </HStack>
            </Box>
            
            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/search-icon.svg' />
                <VStack>
                  <Box justifyContent={"space-between"} fontSize={"1.125rem"} align="flex-start" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Inspect unmodified emails</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Raw headers are visible for each email you send. Validate each and easily catch any inconsistencies.</Box>
                </VStack>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/quickly-logo-1.svg' />
                <VStack>
                  <Box  fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Quickly integrate with your CI</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Our API works seamlessly with any WebCI and features an extensive documentation. There’s hardly any learning curve.</Box>
                </VStack>  
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/schedule-icon.svg' />
                <VStack>
                  <Box fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Run automated, daily checks</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Save time by letting API handle the dull checks of your emails. Be the first to know if any issues occur.</Box>
                </VStack>

              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/email-icon.svg' />
                <VStack>
                  <Box fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Test on any environment, including production</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>With features such as bcc tracking or individual email per inbox, you can monitor live emails with ease.</Box>
                </VStack>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image w={79} h={82} marginBottom={5} src='https://mailtrap.io/wp-content/uploads/2021/01/email-icon-1.svg' />
                <VStack>
                  <Box fontSize={"1.125rem"} fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} color={"#202c45"} textAlign="left" display={"block"} fontWeight={600} lineHeight={1.3} >Dig into the contents of your emails</Box>
                  <Box display={"block"} fontSize={"13px"} lineHeight={1.7} fontWeight={400} color={"#202c45"} textAlign="left" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Verifying if emails are sent is just the first step. Check their spam score, validate the headers, HTML, and a lot more.</Box>
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
              <Image boxSize={'120px'} ml={20} display={"block"}  textAlign="center"  src='https://mailtrap.io/wp-content/uploads/2021/05/img__fake-email-environment.svg' />
              <Heading textAlign={"center"} mb={"1rem"} mt={"1rem"} fontSize="1.125rem" fontWeight={600} lineHeight={1.3} display="block" color="#202c45" fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji">Fake SMTP</Heading>
              <Text display={"block"} fontSize="14px" textAlign="center" lineHeight={1.7} fontWeight={400} color="#202c45" fontFamily={"Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}>Test email sending from your project and view each email sent in your Sandbox inbox. Never send a thing to recipients’ inboxes.</Text>
              <Button>
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

export default MailTrapApi