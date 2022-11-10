import {
  Box,
  Button,
  Center,
  Circle,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const Home = () => {
  return (
    <>
      <Box h="200%" m="100px auto" w="100%">
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
        {/* <HStack w="100%" justify={"space-evenly"}> */}
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
    </>
  );
};
