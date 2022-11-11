import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Box h="200%" m="100px auto" w="100%">
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
            marginBottom={12}
            textAlign="center"
            display={"block"}
            color="#202c45"
            fontFamily={
              "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            }
          >
            Email Sandbox Service
          </Heading>

          <VStack gap={4}>
            <Box
              display={"block"}
              lineHeight={1.2}
              fontWeight={500}
              textAlign={"center"}
              fontSize="1.125rem"
              color="#202c45"
              fontFamily={
                "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              }
            >
              Capture SMTP traffic from staging and dev environments
            </Box>
            <Box
              display={"block"}
              lineHeight={1.2}
              fontWeight={500}
              textAlign={"center"}
              fontSize="1.125rem"
              color="#202c45"
              fontFamily={
                "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              }
            >
              Automate test flows and scenarios with flexible API
            </Box>
            <Box
              display={"block"}
              lineHeight={1.2}
              fontWeight={500}
              textAlign={"center"}
              fontSize="1.125rem"
              color="#202c45"
              fontFamily={
                "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              }
            >
              Analyze email content for spam score and validate HTML/CSS
            </Box>
          </VStack>

          <VStack>
            <Button
              bgColor={"#22d172"}
              color={"#fff"}
              fontSize=".875rem"
              marginTop={9}
            >
              Sign Up For Free
            </Button>
          </VStack>
        </VStack>

        <Flex
          direction={{ base: "column", lg: "row" }}
          display={"flex"}
          alignItems="center"
          textAlign="center"
          justifyContent={"center"}
          marginTop={10}
        >
          <Image
            w={106}
            h={33}
            src="https://mailtrap.io/wp-content/uploads/2021/04/Rails.svg"
            alt="Rails"
          />
          <Image
            w={106}
            h={33}
            src="https://mailtrap.io/wp-content/uploads/2021/04/Python.svg"
            alt="Python"
          />
          <Image
            w={106}
            h={33}
            src="https://mailtrap.io/wp-content/uploads/2021/04/NET.svg"
            alt="NET"
          />
          <Image
            w={106}
            h={33}
            src="https://mailtrap.io/wp-content/uploads/2021/04/Symfony.svg"
            alt="Symfony"
          />
          <Image
            w={106}
            h={33}
            src="https://mailtrap.io/wp-content/uploads/2021/04/Laravel.svg"
            alt="Laravel"
          />
        </Flex>
        <VStack marginTop={20}>
          <Image
            h="80%"
            w="80%"
            src="https://mailtrap.io/wp-content/uploads/2021/05/img__homepage.png"
          />
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
            Email testing challenges that Mailtrap solves
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
                    Configure your testing environment in 5 minutes
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
                    Each Mailtrap account comes with an individual testing
                    environment. Integrate it with your app in just a few
                    clicks.
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
                  src="https://mailtrap.io/wp-content/uploads/2021/03/icon__mail.svg"
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
                    Keep all testing data organized in one place
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
                    Create individual inboxes for different environments or
                    review servers and group them into relevant projects.
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
                    Quickly integrate with Mailtrap API
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
                    Get started quickly with our well-documented API and
                    configure automated testing with unlimited API calls.
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
                    Dig into both the content and source of your emails
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
                    View messages, check spam scores, validate headers, analyze
                    the HTML support across email clients, and more.
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
                    Easily share test emails with your team
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
                    Manage access to your inboxes for colleagues or clients.
                    Send selected test emails to whitelisted real recipients.
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
                    Test your email sending service
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
                    Send emails to Mailtrap directly from your CRM or email
                    sending service. Simulate sending to multiple recipients.
                  </Box>
                </VStack>
              </HStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box h="130%" m="100px auto" w="80%" border={"1px solid red"}>
        <VStack
          w={"100%"}
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
          marginTop={10}
        >
          <VStack marginBottom={10}>
            <Heading
              fontWeight={600}
              fontSize="1.875rem"
              lineHeight={1.3}
              textAlign="center"
              display={"block"}
              color="#202c45"
              fontFamily={
                "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              }
            >
              Setup takes less than 5 minutes
            </Heading>
            <Text marginBottom={10}>
              Mailtrap is compatible with any app or framework that supports
              SMTP
            </Text>
          </VStack>

          <SimpleGrid
            columns={["1", "2"]}
            direction={["column", "row"]}
            spacing={20}
            gap={30}
          >
            <Box>
              <Image src="https://mailtrap.io/wp-content/uploads/2021/03/setup-final-752x540.png" />
            </Box>
            <Box marginTop={20}>
              <VStack>
                <HStack alignItems={"flex-start"} w="100%">
                  <Circle w="40px" h="40px" bg="#22d172" color="white">
                    <Box as="span" fontWeight="bold" fontSize="lg">
                      1
                    </Box>
                  </Circle>
                  <Box
                    fontSize={"1.125rem"}
                    fontWeight={600}
                    lineHeight={1.3}
                    fontFamily={
                      "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                    display={"block"}
                    color="#202c45"
                    textAlign={"left"}
                  >
                    Select your integration from 20+ code samples or copy SMTP
                    credentials
                  </Box>
                </HStack>
                <HStack alignItems={"flex-start"} w="100%">
                  <Circle w="40px" h="40px" bg="#22d172" color="white">
                    <Box as="span" fontWeight="bold" fontSize="lg">
                      2
                    </Box>
                  </Circle>
                  <Box
                    fontSize={"1.125rem"}
                    fontWeight={600}
                    lineHeight={1.3}
                    fontFamily={
                      "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                    display={"block"}
                    color="#202c45"
                    textAlign={"left"}
                  >
                    Paste the configuration to your project
                  </Box>
                </HStack>
                <HStack alignItems={"flex-start"} w="100%">
                  <Circle w="40px" h="40px" bg="#22d172" color="white">
                    <Box as="span" fontWeight="bold" fontSize="lg">
                      3
                    </Box>
                  </Circle>
                  <Box
                    fontSize={"1.125rem"}
                    fontWeight={600}
                    lineHeight={1.3}
                    fontFamily={
                      "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                    display={"block"}
                    color="#202c45"
                    textAlign={"left"}
                  >
                    Run your email sending code
                  </Box>
                </HStack>
                <HStack alignItems={"flex-start"} w="100%">
                  <Circle w="40px" h="40px" bg="#22d172" color="white">
                    <Box as="span" fontWeight="bold" fontSize="lg">
                      4
                    </Box>
                  </Circle>
                  <Box
                    fontSize={"1.125rem"}
                    fontWeight={600}
                    lineHeight={1.3}
                    fontFamily={
                      "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                    }
                    display={"block"}
                    color="#202c45"
                    textAlign={"left"}
                  >
                    Instantly receive a message in your Mailtrap inbox
                  </Box>
                </HStack>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box h="130%" m="100px auto" w="80%" border={"1px solid red"}>
        {/* <HStack w="100%" justify={"space-evenly"}> */}
        <VStack
          w={"100%"}
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
          marginTop={10}
        >
          <VStack marginBottom={20}>
            <Heading
              fontWeight={600}
              fontSize="1.875rem"
              lineHeight={1.3}
              textAlign="center"
              display={"block"}
              color="#202c45"
              fontFamily={
                "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              }
            >
              How different teams use Mailtrap
            </Heading>
            <Image src="https://mailtrap.io/wp-content/uploads/2021/03/img_team.svg" />
          </VStack>

          <SimpleGrid columns={[1, null, 3]} spacing="40px" w="100%" gap={10}>
            <Box w="90%" alignItems={"flex-start"}>
              <Text
                fontSize={"1.125rem"}
                marginBottom={4}
                fontWeight={600}
                lineHeight={1.3}
                fontFamily={
                  "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                }
                display={"block"}
                color="#202c45"
                textAlign={"left"}
              >
                Developers
              </Text>
              <UnorderedList
                spacing={5}
                w="100%"
                textAlign={"left"}
                fontSize="14px"
                fontFamily={
                  "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                }
                fontWeight={400}
                color="#202c45"
                display={"block"}
              >
                <ListItem>
                  Experiment with the email sending functionality
                </ListItem>
                <ListItem>
                  Cover code with tests to run automated checks via Mailtrap API
                </ListItem>
                <ListItem>
                  Verify different email aspects, debug sending script and HTML
                  template
                </ListItem>
              </UnorderedList>
            </Box>
            <Box w="90%" alignItems={"flex-start"}>
              <Text
                fontSize={"1.125rem"}
                marginBottom={4}
                fontWeight={600}
                lineHeight={1.3}
                fontFamily={
                  "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                }
                display={"block"}
                color="#202c45"
                textAlign={"left"}
              >
                QAs
              </Text>
              <UnorderedList
                spacing={5}
                w="100%"
                textAlign={"left"}
                fontSize="14px"
                fontFamily={
                  "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                }
                fontWeight={400}
                color="#202c45"
                display={"block"}
              >
                <ListItem>
                  Run safe email tests in staging and/or testing environment
                </ListItem>
                <ListItem>
                  Integrate Mailtrap with automated testing tools
                </ListItem>
                <ListItem>
                  Compare revised emails with their previous versions
                </ListItem>
              </UnorderedList>
            </Box>

            <Box w="95%" alignItems={"flex-start"}>
              <Text
                fontSize={"1.125rem"}
                marginBottom={4}
                fontWeight={600}
                lineHeight={1.3}
                fontFamily={
                  "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                }
                display={"block"}
                color="#202c45"
                textAlign={"left"}
              >
                Marketers and managers
              </Text>

              <UnorderedList
                spacing={5}
                w="100%"
                textAlign={"left"}
                fontSize="14px"
                fontFamily={
                  "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                }
                fontWeight={400}
                color="#202c45"
                display={"block"}
              >
                <ListItem w="100%">
                  Smoothly collaborate with development and QA teams
                </ListItem>
                <ListItem w="100%">
                  View test emails in shared inboxes or forward to real
                  recipients
                </ListItem>
                <ListItem w="100%">
                  Send emails to Mailtrap inboxes from CRMs and common sending
                  tools
                </ListItem>
              </UnorderedList>
            </Box>
          </SimpleGrid>

          <VStack>
            <Button
              bgColor={"#22d172"}
              color={"#fff"}
              fontSize=".875rem"
              marginTop={9}
            >
              Sign Up For Free
            </Button>
          </VStack>
        </VStack>
      </Box>

      <Box h="130%" m="100px auto" w="70%">
        {/* <HStack w="100%" justify={"space-evenly"}> */}
        <VStack
          w={"100%"}
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
          marginTop={10}
        >
          <VStack marginBottom={20}>
            <Heading
              fontWeight={600}
              fontSize="1.875rem"
              lineHeight={1.3}
              textAlign="center"
              display={"block"}
              color="#202c45"
              fontFamily={
                "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              }
            >
              From our #BestClientEver
            </Heading>
          </VStack>

          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <Box
              h="100%"
              spacing={10}
              borderRadius={"0.625rem"}
              bgColor="#fff"
              display={"block"}
              lineHeight={1.7}
              boxShadow={"0 0.3125rem 1rem rgb(0 0 0 / 7%)"}
              textAlign="left"
              color="#202c45"
              fontWeight={400}
              fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              <HStack
                columns={[1, null, 2]}
                spacing={2}
                marginLeft={5}
                marginTop={5}
              >
                <Text
                  fontSize={"1.125rem"}
                  textAlign="left"
                  color="#202c45"
                  display={"block"}
                  fontWeight={600}
                  lineHeight={1.7}
                  fontFamily={
                    "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  DeveloperMitch{" "}
                </Text>
                <Text
                  lineHeight={1.7}
                  color={"GrayText"}
                  fontSize="14px"
                  fontWeight={400}
                  textAlign="left"
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  @mitchellfinlay
                </Text>
              </HStack>
              <VStack>
                <Text
                  marginLeft={5}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  After all these years of web development, how have I only JUST
                  started using @Mailtrap. I had heard about it, but never got
                  round to using it. An awesome way of testing emails.
                </Text>
              </VStack>
              <Text
                marginLeft={5}
                marginBottom={5}
                textAlign={"left"}
                fontSize="14px"
                color={"GrayText"}
                lineHeight={1.7}
                fontWeight={400}
                fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              >
                7:38 PM – Jan 13, 2021
              </Text>
            </Box>

            <Box
              h="100%"
              spacing={10}
              borderRadius={"0.625rem"}
              bgColor="#fff"
              display={"block"}
              lineHeight={1.7}
              boxShadow={"0 0.3125rem 1rem rgb(0 0 0 / 7%)"}
              textAlign="left"
              color="#202c45"
              fontWeight={400}
              fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              <HStack
                columns={[1, null, 2]}
                spacing={2}
                marginLeft={5}
                marginTop={5}
              >
                <Text
                  fontSize={"1.125rem"}
                  textAlign="left"
                  color="#202c45"
                  display={"block"}
                  fontWeight={600}
                  lineHeight={1.7}
                  fontFamily={
                    "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  Alessandro Rodi
                </Text>
                <Text
                  lineHeight={1.7}
                  color={"GrayText"}
                  fontSize="14px"
                  fontWeight={400}
                  textAlign="left"
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  @coorasse
                </Text>
              </HStack>
              <VStack>
                <Text
                  marginLeft={5}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  I love @Mailtrap. It removes all the asshole of configuring
                  email servers in test environments. Great service! Is totally
                  worth your money!
                </Text>
              </VStack>
              <Text
                marginLeft={5}
                marginBottom={5}
                textAlign={"left"}
                fontSize="14px"
                color={"GrayText"}
                lineHeight={1.7}
                fontWeight={400}
                fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              >
                1:15 PM – Oct 20, 2020{" "}
              </Text>
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

      <Box h="130%" m="100px auto" w="70%">
        {/* <HStack w="100%" justify={"space-evenly"}> */}
        <VStack
          w={"100%"}
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
          marginTop={10}
        >
          <VStack marginBottom={20}>
            <Heading
              fontWeight={600}
              fontSize="1.875rem"
              lineHeight={1.3}
              textAlign="center"
              display={"block"}
              color="#202c45"
              fontFamily={
                "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
              }
            >
              Frequently Asked Questions
            </Heading>
          </VStack>

          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <Box
              h="100%"
              spacing={10}
              borderRadius={"0.625rem"}
              bgColor="#fff"
              display={"block"}
              lineHeight={1.7}
              boxShadow={"0 0.3125rem 1rem rgb(0 0 0 / 7%)"}
              textAlign="left"
              color="#202c45"
              fontWeight={400}
              fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              <HStack
                columns={[1, null, 2]}
                spacing={2}
                marginLeft={5}
                marginTop={5}
              >
                <Text
                  fontSize={"1.125rem"}
                  textAlign="left"
                  color="#202c45"
                  display={"block"}
                  fontWeight={600}
                  lineHeight={1.7}
                  fontFamily={
                    "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  Can Email Sandbox send emails to real recipients inboxes?
                </Text>
              </HStack>
              <VStack>
                <Text
                  marginLeft={5}
                  marginBottom={10}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  Email Sandbox is a testing tool and is not designed to deliver
                  emails to real email addresses. But you can use our Email API
                  or SMTP Service to send emails to your recipients.
                </Text>
              </VStack>
            </Box>

            <Box
              h="100%"
              spacing={10}
              borderRadius={"0.625rem"}
              bgColor="#fff"
              display={"block"}
              lineHeight={1.7}
              boxShadow={"0 0.3125rem 1rem rgb(0 0 0 / 7%)"}
              textAlign="left"
              color="#202c45"
              fontWeight={400}
              fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              <HStack
                columns={[1, null, 2]}
                spacing={2}
                marginLeft={5}
                marginTop={5}
              >
                <Text
                  fontSize={"1.125rem"}
                  textAlign="left"
                  color="#202c45"
                  display={"block"}
                  fontWeight={600}
                  lineHeight={1.7}
                  fontFamily={
                    "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  How can I preview my email in different email clients?
                </Text>
              </HStack>
              <VStack>
                <Text
                  marginLeft={5}
                  marginBottom={10}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  HTML Check analyzes your template for support with popular
                  email clients and explains how to fix errors right away. This
                  is more efficient than manual comparison of previews from
                  email clients, but you still can forward your test emails to
                  real recipients and open them in specific email clients.
                </Text>
              </VStack>
            </Box>

            <Box
              h="100%"
              spacing={10}
              borderRadius={"0.625rem"}
              bgColor="#fff"
              display={"block"}
              lineHeight={1.7}
              boxShadow={"0 0.3125rem 1rem rgb(0 0 0 / 7%)"}
              textAlign="left"
              color="#202c45"
              fontWeight={400}
              fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              <HStack
                columns={[1, null, 2]}
                spacing={2}
                marginLeft={5}
                marginTop={5}
              >
                <Text
                  fontSize={"1.125rem"}
                  textAlign="left"
                  color="#202c45"
                  display={"block"}
                  fontWeight={600}
                  lineHeight={1.7}
                  fontFamily={
                    "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  Can I send a test email to Sandbox from my Gmail?
                </Text>
              </HStack>
              <VStack>
                <Text
                  marginLeft={5}
                  marginBottom={10}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  Yes, you can! On Business, Premium, and Enterprise plans,
                  there is a separate email address available for each of your
                  inboxes. With it, you can send messages from any CRM, email
                  sending app or client, such as Gmail, Hubspot, Sendgrid, etc.
                </Text>
              </VStack>
            </Box>

            <Box
              h="100%"
              spacing={10}
              borderRadius={"0.625rem"}
              bgColor="#fff"
              display={"block"}
              lineHeight={1.7}
              boxShadow={"0 0.3125rem 1rem rgb(0 0 0 / 7%)"}
              textAlign="left"
              color="#202c45"
              fontWeight={400}
              fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            >
              <HStack
                columns={[1, null, 2]}
                spacing={2}
                marginLeft={5}
                marginTop={5}
              >
                <Text
                  fontSize={"1.125rem"}
                  textAlign="left"
                  color="#202c45"
                  display={"block"}
                  fontWeight={600}
                  lineHeight={1.7}
                  fontFamily={
                    "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  How much does Email Sandbox cost?
                </Text>
              </HStack>
              <VStack>
                <Text
                  marginLeft={5}
                  marginBottom={10}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  Mailtrap features a forever free plan that offers the basic
                  functionality for personal use of Email Sandbox. Paid plans
                  start from $9.99 per month, and are suitable for companies of
                  different sizes. View the Mailtrap pricing for more details.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box h="80%" m="100px auto" w="100%" border={"1px solid red"}>
        <VStack
          w={"100%"}
          textAlign="center"
          display={"block"}
          justifyContent={"center"}
        >
          <SimpleGrid
            columns={["1", "2"]}
            direction={["column", "row"]}
            spacing={20}
            gap={250}
            bgColor="#1a2e44"
          >
            <Box marginTop="25%">
              <VStack>
                <Text
                  fontWeight={700}
                  fontSize="1.25rem"
                  lineHeight={1}
                  color="#fff"
                  textAlign={"left"}
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  Create Your Free Account
                </Text>
                <Text
                  fontSize={"2.375rem"}
                  lineHeight={1}
                  fontWeight={600}
                  display="block"
                  color={"#fff"}
                  textAlign="left"
                  fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  In 3 Clicks
                </Text>
              </VStack>
              <Button
                bgColor={"#22d172"}
                color={"#fff"}
                fontSize=".875rem"
                marginTop={9}
              >
                Sign Up For Free
              </Button>
            </Box>

            <Box>
              <Image
                boxSize="sm"
                textAlign={"right"}
                src="https://mailtrap.io/wp-content/uploads/2021/01/img__cta.svg"
              />
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  );
};
