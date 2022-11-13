import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";

const EmailAPI = () => {
  return (
    <>
      <Box h="130%" m="100px auto" w="80%">
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
                textAlign="left"
                display={"block"}
                color="#202c45"
                fontFamily={
                  "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                }
              >
                Email API for Developers
              </Heading>

              <VStack gap={4}>
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
                  Deliver emails with Mailtrap Email API or SMTP from any
                  application. Monitor deliverability and share stats with the
                  team.
                </Box>
              </VStack>

              <VStack>
                <Button
                  float={"left"}
                  bgColor={"#22d172"}
                  color={"#fff"}
                  fontSize=".875rem"
                  marginTop={9}
                >
                  Sign Up
                </Button>
              </VStack>
            </VStack>

            <Box>
              <Image
                h="80%"
                w="100%"
                src="https://mailtrap.io/wp-content/uploads/2022/02/sending_landing_hero_image_2.svg"
              />
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box h="130%" m="100px auto" w="80%">
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
              Why Use Mailtrap for Email Delivery
            </Heading>
          </VStack>

          <SimpleGrid
            columns={["1", "2"]}
            direction={["column", "row"]}
            w="100%"
            h="100%"
          >
            <Box marginTop={{ base: 10, lg: 28 }}>
              <VStack>
                <Heading
                  fontSize={"26px"}
                  fontWeight={700}
                  textAlign="left"
                  color="#202c45"
                  lineHeight={1.3}
                  fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  Deliverability Monitoring
                </Heading>
                <Text
                  fontWeight={400}
                  fontSize="14px"
                  textAlign="left"
                  lineHeight={1.7}
                  color="#202c45"
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  Monitor your deliverability as you do with Infrastructure.
                  Don’t be too late to respond to deliverability issues. With
                  Mailtrap’s alerts you can be proactive and take action as soon
                  as our system flags an issue with your emails.
                </Text>
              </VStack>
            </Box>

            <Box>
              <Image
                m={0}
                p={0}
                src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-alerts.svg"
              />
            </Box>

            <Box>
              <Image
                m={0}
                p={0}
                src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-api-smtp.svg"
              />
            </Box>

            <Box marginTop={{ base: 10, lg: 28 }}>
              <VStack>
                <Heading
                  fontSize={"26px"}
                  fontWeight={700}
                  textAlign="left"
                  color="#202c45"
                  lineHeight={1.3}
                  fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  SMTP and APIs Compatible with Sendgrid, Mailgun, Mandrill
                </Heading>
                <Text
                  fontWeight={400}
                  fontSize="14px"
                  textAlign="left"
                  lineHeight={1.7}
                  color="#202c45"
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  We support standard SMTP protocol and have compatible APIs.
                  This saves time and makes the switch to Mailtrap easier.
                </Text>
              </VStack>
            </Box>

            <Box marginTop={{ base: 10, lg: 28 }}>
              <VStack>
                <Heading
                  fontSize={"26px"}
                  fontWeight={700}
                  textAlign="left"
                  color="#202c45"
                  lineHeight={1.3}
                  fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  60 Days of Detailed Logs
                </Heading>
                <Text
                  fontWeight={400}
                  fontSize="14px"
                  textAlign="left"
                  lineHeight={1.7}
                  color="#202c45"
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  Within 60 days you get access to all messages history. You can
                  find the needed email, inspect it, troubleshoot and debug.
                </Text>
              </VStack>
            </Box>

            <Box>
              <Image
                m={0}
                p={0}
                src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-email-logs.svg"
              />
            </Box>

            <Box>
              <Image
                m={0}
                p={0}
                src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-setup.svg"
              />
            </Box>

            <Box marginTop={{ base: 15, lg: 28 }}>
              <VStack>
                <Heading
                  fontSize={"26px"}
                  fontWeight={700}
                  textAlign="left"
                  color="#202c45"
                  lineHeight={1.3}
                  fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  Secure and User-Friendly Setup
                </Heading>
                <Text
                  fontWeight={400}
                  fontSize="14px"
                  textAlign="left"
                  lineHeight={1.7}
                  color="#202c45"
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  We help you get all the necessary DNS records to ensure great
                  deliverability. We also rotate your DKIM keys to provide
                  another layer of security. Follow the step-by-step wizard to
                  complete the setup in a few minutes.
                </Text>
              </VStack>
            </Box>

            <Box marginTop={{ base: 10, lg: 28 }}>
              <VStack>
                <Heading
                  fontSize={"26px"}
                  fontWeight={700}
                  textAlign="left"
                  color="#202c45"
                  lineHeight={1.3}
                  fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  Single Screen Email Stats
                </Heading>
                <Text
                  fontWeight={400}
                  fontSize="14px"
                  textAlign="left"
                  lineHeight={1.7}
                  color="#202c45"
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  A quick look at the dashboard gives your team insight into the
                  critical metrics. When necessary, dig deeper to improve your
                  email perfomance.
                </Text>
              </VStack>
            </Box>

            <Box>
              <Image
                m={0}
                p={0}
                src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-single-screen-analytics.svg"
              />
            </Box>

            <Box>
              <Image
                m={0}
                p={0}
                src="https://mailtrap.io/wp-content/uploads/2022/02/sending-landing-all-in-one.svg"
              />
            </Box>

            <Box marginTop={{ base: 10, lg: 28 }}>
              <VStack>
                <Heading
                  fontSize={"26px"}
                  fontWeight={700}
                  textAlign="left"
                  color="#202c45"
                  lineHeight={1.3}
                  fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  Test, Send, Monitor Emails in One Place{" "}
                </Heading>
                <Text
                  fontWeight={400}
                  fontSize="14px"
                  textAlign="left"
                  lineHeight={1.7}
                  color="#202c45"
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  No need to log into a few systems and to manage billing for
                  all of them. Complete email development cycle – test and send
                  your emails within one solution.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box
        h="130%"
        m="100px auto"
        w="70%"
        bgColor="#f9c273"
        display={"block"}
        padding="1.6rem"
        marginTop={"2.4rem"}
        lineHeight={1.7}
        fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;"
        textAlign={"left"}
      >
        <VStack>
          <Heading
            fontWeight={600}
            fontSize="1.5rem"
            display={"block"}
            color="#202c45"
            fontFamily={
              "Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            }
          >
            We Help You Switch
          </Heading>
          <Text
            fontWeight={400}
            lineHeight={1.7}
            display="block"
            fontFamily={
              "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
            }
          >
            Our Support and Deliverability experts are here to help you. Don’t
            hesitate to reach out now. Our team will guide you during the whole
            process.
          </Text>
          <Button
            bgColor={"#202c45"}
            color={"#f9c273"}
            fontSize=".875rem"
            marginTop={9}
          >
            Contact us
          </Button>
        </VStack>
      </Box>

      <Box h="130%" m="100px auto" w="70%">
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
              Customers Testimonials
            </Heading>
          </VStack>

          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <Box
              h="100%"
              w="100%"
              spacing={10}
              marginTop={5}
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
              <VStack marginTop={5}>
                <Text
                  marginLeft={5}
                  marginRight={5}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  We’ve been users of mailtrap for a long time yet their new
                  sending functionality has still managed to surprise us with
                  its ease of onboarding and support, reliability and analytics.
                  It was a seamless switch from a big competitor and we’ve never
                  looked back.
                </Text>
              </VStack>
              <VStack
                rows={[1, null, 1]}
                spacing={1}
                display="block"
                textAlign="left"
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
                  Will Henderson{" "}
                </Text>
                <Text
                  lineHeight={1.7}
                  color={"#202c45"}
                  display={"block"}
                  fontSize=".75rem"
                  fontWeight={600}
                  textAlign="left"
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  CPO @ Knowa.co
                </Text>
              </VStack>
            </Box>

            <Box
              h="100%"
              w="100%"
              spacing={10}
              marginTop={5}
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
              <VStack marginTop={5}>
                <Text
                  marginLeft={5}
                  marginRight={5}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  We choose Mailtrap as sending provider for transactional
                  emails. We’ve been using Sendgrid before and didn’t have any
                  issues with the transition and our deliverability even
                  improved a little. We love how smooth the experience was.
                </Text>
              </VStack>

              <VStack
                rows={[1, null, 1]}
                spacing={1}
                display="block"
                textAlign="left"
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
                  Julia Ryzhkova
                </Text>
                <Text
                  lineHeight={1.7}
                  color={"#202c45"}
                  display={"block"}
                  fontSize=".75rem"
                  fontWeight={600}
                  textAlign="left"
                  fontFamily={
                    "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                  }
                >
                  Product Manager @ Coupler.io
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box h="130%" m="100px auto" w="73%">
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
              FAQ
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
                marginBottom={1}
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
                  Why try Mailtrap SMTP and Email API?
                </Text>
              </HStack>

              <VStack>
                <Text
                  marginLeft={5}
                  marginBottom={10}
                  marginRight={5}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  We offer comprehensive metrics and stats to help understand
                  emails performance, including alerts, logs, and content
                  previews. It takes only a few steps to switch to our SMTP and
                  if you need help – we’ll guide you through the process.
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
                marginBottom={1}
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
                  What about Pricing?
                </Text>
              </HStack>
              <VStack>
                <Text
                  marginLeft={5}
                  marginBottom={10}
                  marginRight={4}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  First 6 months are free if you send less than 100,000
                  emails/m. Further Mailtrap pricing plans are described here.
                  BTW, you don’t need to provide credit card information to get
                  started with our Sending solution.
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
                marginBottom={1}
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
                  Is your solution reliable ?
                </Text>
              </HStack>
              <VStack>
                <Text
                  marginLeft={5}
                  marginBottom={10}
                  marginRight={5}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  Yes, more than 900,000 developers have trusted Mailtrap for 9
                  years. Companies those switched to Mailtrap SMTP even report
                  some increases in deliverability rates. And we wouldn’t offer
                  something to our customers that we don’t use ourselves.
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
                marginBottom={1}
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
                  Dedicated IP?
                </Text>
              </HStack>
              <VStack>
                <Text
                  marginLeft={5}
                  marginBottom={10}
                  marginRight={5}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  We recommend to get a dedicated IP if you send more than
                  200,000 emails a month. And rest assured we keep an eye on
                  shared IPs to ensure they offer great deliverability.
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
                marginBottom={1}
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
                  What about switching from Sengrid/Mandrill/Mailgun?
                </Text>
              </HStack>
              <VStack>
                <Text
                  marginLeft={5}
                  marginBottom={10}
                  marginRight={5}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  Switching from your current sending service is pretty
                  straightforward. You can easily change the SMTPs or use
                  compatible APIs. If you need assistance contact our support
                  team. Feel free to book a call so our experts can guide you
                  during the switch
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
                marginBottom={1}
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
                  Do you offer tracking and custom domain for redirects?
                </Text>
              </HStack>
              <VStack>
                <Text
                  marginLeft={5}
                  marginBottom={10}
                  marginRight={5}
                  display={"block"}
                  fontSize="14px"
                  lineHeight={1.7}
                  fontWeight={400}
                  color="#202c45"
                  textAlign={"left"}
                  fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
                >
                  Yes, Mailtrap offers tracking of opens and clicks. You can
                  also use you own domain for links redirects.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      <Box h="80%" m="100px auto" w="100%">
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
            gap={{ base: 10, lg: 250 }}
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

export default EmailAPI;
