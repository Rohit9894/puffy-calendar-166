import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
const QAAutomation = () => {
  return (
    <>
      <Box h="130%" m="100px auto" w="90%" border={"1px solid red"}>
        <VStack
          w={"100%"}
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
          marginTop={10}
        >
          <SimpleGrid
            columns={["1", "2"]}
            direction={["column", "row"]}
            spacing={20}
            gap={50}
          >
            <VStack
              w={"82%"}
              textAlign="center"
              display={"block"}
              justifyContent={"center"}
              marginTop={10}
            >
              <Heading
                fontWeight={600}
                fontSize="1.875rem"
                lineHeight={1.3}
                marginBottom={12}
                textAlign="left"
                display={"block"}
                color="#202c45"
                fontFamily={
                  "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                }
              >
                Powerful Automation For Testing Your Email Sequences
              </Heading>

              <VStack gap={4} w="100%">
                <Box
                  display={"block"}
                  lineHeight={1.2}
                  fontWeight={500}
                  textAlign={"left"}
                  fontSize="1.125rem"
                  color="#202c45"
                  fontFamily={
                    "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  Cover all your testing scenarios with Sandbox API.
                </Box>
                <Button
                  display={"block"}
                  textAlign="left"
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={5}
                >
                  Sign Up For Free
                </Button>
              </VStack>

              <Box>
                <Flex
                  w="120%"
                  direction={{ base: "column", lg: "row" }}
                  display={"flex"}
                  alignItems="center"
                  textAlign="center"
                  justifyContent={"center"}
                  marginTop={5}
                >
                  <Image
                    w={106}
                    h={33}
                    src="https://mailtrap.io/wp-content/uploads/2021/06/Selenium-110x33.png"
                    alt="Selenium"
                  />
                  <Image
                    w={106}
                    h={33}
                    src="https://mailtrap.io/wp-content/uploads/2021/06/Cucumber.svg"
                    alt="cucumber"
                  />
                  <Image
                    w={106}
                    h={33}
                    src="https://mailtrap.io/wp-content/uploads/2021/06/Protractor.svg"
                    alt="Protractor"
                  />
                  <Image
                    w={106}
                    h={33}
                    src="https://mailtrap.io/wp-content/uploads/2021/06/Cypress.svg"
                    alt="Cypress"
                  />
                  <Image
                    w={106}
                    h={33}
                    src="https://mailtrap.io/wp-content/uploads/2021/06/Jmeter.svg"
                    alt="Jmeter"
                  />
                </Flex>
              </Box>
            </VStack>

            <Box>
              <Image
                h="80%"
                w="100%"
                src="https://mailtrap.io/wp-content/uploads/2021/05/img__qa.svg"
              />
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box h="120%" m="100px auto" w="80%" border={"1px solid red"}>
        {/* <HStack w="100%" justify={"space-evenly"}> */}
        <VStack
          w={"100%"}
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
          marginTop={10}
        >
          <Heading
            fontWeight={600}
            fontSize="1.875rem"
            lineHeight={1.3}
            marginBottom={20}
            textAlign="center"
            display={"block"}
            color="#202c45"
            fontFamily={
              "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            }
          >
            Email testing essentials available with Sandbox API
          </Heading>

          <SimpleGrid
            columns={["1", "2"]}
            direction={["column", "row"]}
            spacing={20}
          >
            <Box>
              <HStack>
                <Image
                  w={79}
                  h={82}
                  marginBottom={5}
                  src="https://mailtrap.io/wp-content/uploads/2021/03/icon4.svg"
                />
                <VStack>
                  <Box
                    fontSize={"1.125rem"}
                    fontFamily={
                      "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                    color={"#202c45"}
                    textAlign="left"
                    display={"block"}
                    fontWeight={600}
                    lineHeight={1.3}
                  >
                    Integrate with your favorite environment
                  </Box>
                  <Box
                    display={"block"}
                    fontSize={"13px"}
                    lineHeight={1.7}
                    fontWeight={400}
                    color={"#202c45"}
                    textAlign="left"
                    fontFamily={
                      "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                  >
                    Sandbox Fake SMTP works seamlessly with Selenium, Cucumber,
                    Protractor, and many other testing tools.
                  </Box>
                </VStack>
              </HStack>
            </Box>

            <Box>
              <HStack>
                <Image
                  w={79}
                  h={82}
                  marginBottom={5}
                  src="https://mailtrap.io/wp-content/uploads/2021/01/icon_work.svg"
                />
                <VStack>
                  <Box
                    justifyContent={"space-between"}
                    fontSize={"1.125rem"}
                    align="flex-start"
                    fontFamily={
                      "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                    color={"#202c45"}
                    textAlign="left"
                    display={"block"}
                    fontWeight={600}
                    lineHeight={1.3}
                  >
                    Verify multiple variables at a time
                  </Box>
                  <Box
                    display={"block"}
                    fontSize={"13px"}
                    lineHeight={1.7}
                    fontWeight={400}
                    color={"#202c45"}
                    textAlign="left"
                    fontFamily={
                      "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                  >
                    Testing if emails are sent and delivered is just the first
                    step. Automatically verify email headers, subject, body,
                    attachments, and more.
                  </Box>
                </VStack>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Image
                  w={79}
                  h={82}
                  marginBottom={5}
                  src="https://mailtrap.io/wp-content/uploads/2021/03/icon2.svg"
                />
                <VStack>
                  <Box
                    fontSize={"1.125rem"}
                    fontFamily={
                      "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                    color={"#202c45"}
                    textAlign="left"
                    display={"block"}
                    fontWeight={600}
                    lineHeight={1.3}
                  >
                    Make use of well-documented API
                  </Box>
                  <Box
                    display={"block"}
                    fontSize={"13px"}
                    lineHeight={1.7}
                    fontWeight={400}
                    color={"#202c45"}
                    textAlign="left"
                    fontFamily={
                      "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                  >
                    Comprehensive documentation is available for each feature.
                    There’s no learning curve and you’ll launch the first tests
                    within minutes.
                  </Box>
                </VStack>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Image
                  w={79}
                  h={82}
                  marginBottom={5}
                  src="https://mailtrap.io/wp-content/uploads/2021/01/icon_men.svg"
                />
                <VStack>
                  <Box
                    fontSize={"1.125rem"}
                    fontFamily={
                      "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                    color={"#202c45"}
                    textAlign="left"
                    display={"block"}
                    fontWeight={600}
                    lineHeight={1.3}
                  >
                    Test complex sequences with ease
                  </Box>
                  <Box
                    display={"block"}
                    fontSize={"13px"}
                    lineHeight={1.7}
                    fontWeight={400}
                    color={"#202c45"}
                    textAlign="left"
                    fontFamily={
                      "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                  >
                    Write tests covering simple and complex scenarios. Test any
                    email-related functionality effortlessly.
                  </Box>
                </VStack>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Image
                  w={79}
                  h={82}
                  marginBottom={5}
                  src="https://mailtrap.io/wp-content/uploads/2021/03/ivon__performance.svg"
                />
                <VStack>
                  <Box
                    fontSize={"1.125rem"}
                    fontFamily={
                      "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                    color={"#202c45"}
                    textAlign="left"
                    display={"block"}
                    fontWeight={600}
                    lineHeight={1.3}
                  >
                    Collaborate with development team
                  </Box>
                  <Box
                    display={"block"}
                    fontSize={"13px"}
                    lineHeight={1.7}
                    fontWeight={400}
                    color={"#202c45"}
                    textAlign="left"
                    fontFamily={
                      "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                  >
                    Share the testing space with your dev team or set up
                    individual inboxes for each environment. Pass test emails
                    between team members effortlessly.
                  </Box>
                </VStack>
              </HStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box h="200%" m="100px auto" w="100%" border={"1px solid red"}>
        <VStack
          w={"100%"}
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
          marginTop={10}
        >
          <Heading
            fontWeight={600}
            fontSize="26px"
            lineHeight={1.3}
            marginBottom={12}
            textAlign="center"
            display={"block"}
            color="#202c45"
            fontFamily={
              "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            }
          >
            Trusted by 150,000+ monthly active users
          </Heading>
        </VStack>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={20}
          display={"flex"}
          alignItems="center"
          textAlign="center"
          justifyContent={"center"}
          marginTop={10}
        >
          <Image
            w={106}
            h={33}
            src="https://mailtrap.io/wp-content/uploads/2021/04/Adobe.svg"
            alt="Adobe"
          />
          <Image
            w={106}
            h={33}
            src="https://mailtrap.io/wp-content/uploads/2021/04/Atlassian.svg"
            alt="Atlassian"
          />
          <Image
            w={106}
            h={33}
            src="https://mailtrap.io/wp-content/uploads/2021/04/Calendly.svg"
            alt="Calendly"
          />
          <Image
            w={106}
            h={33}
            src="https://mailtrap.io/wp-content/uploads/2021/04/Yelp.svg"
            alt="Yelp"
          />
          <Image
            w={106}
            h={33}
            src="https://mailtrap.io/wp-content/uploads/2021/04/UserTesting.svg"
            alt="UserTesting"
          />
        </Flex>
      </Box>

      {/* <Box h="130%" m="100px auto" w="80%" border={"1px solid red"}>
  
        <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
       

          <SimpleGrid columns={['1','2']} direction={['column', 'row']}  spacing={20} gap={30} >
          <Box marginTop={20}>
            <Heading>How QAs use Email Sandbox</Heading>
            <UnorderedList>
            <ListItem>
                <Text>Check any emails within your end-to-end automated test suites</Text>
                <Text>Pick any, even the most complex email sequence and include it in the corresponding test.</Text>
            </ListItem>
            <ListItem>
                <Text>Launch the tests</Text>
                <Text>Use Sandbox API to build and launch automated acceptance tests for the entire sequence.</Text>

            </ListItem>
            <ListItem>
                <Text>Verify the test results automatically</Text>
                <Text>Confirm the results automatically using the Sandbox API. Validate if email headers and content are as expected and if the sending triggers work properly. Validate subject lines, links, attachments, and others.</Text>
            </ListItem>
            
            </UnorderedList>
              
              
            </Box>
            <Box>
              <Image src='https://mailtrap.io/wp-content/uploads/2021/05/img__qa-how.svg' />
            </Box>
            
          </SimpleGrid>

        </VStack>

    </Box> */}

      {/* <Box h="130%" m="100px auto" w="90%" border={"1px solid red"}>
      
      <VStack w={"100%"}  textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
      


        <SimpleGrid columns={['1','2']} direction={['column', 'row']}  spacing={20} gap={50} >

          <VStack w={"76%"} textAlign="center" display={"block"} justifyContent={"center"} marginTop={10}>
            <Heading fontWeight={600} fontSize="1.875rem" lineHeight={1.3} marginBottom={12} textAlign="left" display={"block"} color="#202c45" fontFamily={"Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"} >
            How QAs use Email Sandbox
            </Heading>

            <List spacing={3} alignItems={"flex-start"} w="100%" >
            <ListItem alignItems={"flex-start"} w="100%">
                <ListIcon as={IoMdCheckmarkCircle} color='green.500' />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <Text ml={5}>ABCD</Text>
            <ListItem alignItems={"flex-start"} w="100%">
                <ListIcon as={IoMdCheckmarkCircle} color='green.500' />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem alignItems={"flex-start"} w="100%">
                <ListIcon as={IoMdCheckmarkCircle} color='green.500' />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
           
            
            </List>

           
              
           
       
          </VStack>

          <Box>
            <Image h="80%" w="100%" src='https://mailtrap.io/wp-content/uploads/2021/05/img__qa.svg' />
          </Box>
        </SimpleGrid>

      </VStack>

  </Box> */}
    </>
  );
};

export default QAAutomation;
