import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import image1 from "./sandboxinactive.svg";
import image2 from "./emailapi.svg";
import "./home.css";
export const LoginHome = () => {
  return (
    <Box px="10px" py="10px" w="full">
      <Heading fontSize={"22px"}>Welcome!</Heading>
      <Flex
        m="10px auto"
        w="full"
        justify={"space-between"}
        align="flex-start"
        flexDir={["column", "column", "column", "row"]}
        gap="20px"
      >
        <Box
          borderRadius={"15px"}
          border="1px solid #ebebf3"
          w="full"
          h="fit-content"
        >
          <Image borderTopRadius="15px" src={image1} w="full" />
          <Flex
            align={"center"}
            justify="space-between"
            p="25px"
            borderBottom={"1px solid #ebebf3"}
          >
            <Box>
              <Heading>Sandbox</Heading>
              <Text color="#566583">Test Emails on Staging</Text>
            </Box>
            <Box>
              <button className="dashboardbtn">Setup Inbox</button>
            </Box>
          </Flex>
          <Accordion allowMultiple>
            <AccordionItem py="10px">
              <AccordionButton _hover={{ background: "transparent" }}>
                <AccordionIcon />
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"bold"} fontSize="18px">
                    Fake SMTP Server
                  </Text>
                </Box>
              </AccordionButton>
              <AccordionPanel pt="0" pb="4" px="35px" m="0">
                <Text fontSize={"14px"}>
                  Capture SMTP traffic from staging and dev environments.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem py="10px">
              <AccordionButton _hover={{ background: "transparent" }}>
                <AccordionIcon />
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"bold"} fontSize="18px">
                    QA Automation
                  </Text>
                </Box>
              </AccordionButton>
              <AccordionPanel pt="0" pb="4" px="35px" m="0">
                <Text fontSize={"14px"}>
                  Cover all your testing scenarios with Mailtrap’s
                  well-documented API.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem py="10px">
              <AccordionButton _hover={{ background: "transparent" }}>
                <AccordionIcon />
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"bold"} fontSize="18px">
                    Preview and validate HTML/CSS
                  </Text>
                </Box>
              </AccordionButton>
              <AccordionPanel pt="0" pb="4" px="35px" m="0">
                <Text fontSize={"14px"}>
                  View messages, check spam scores, validate headers. Check the
                  HTML & CSS support for top email clients.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem pt="10px" pb="20px" borderBottom="none">
              <AccordionButton _hover={{ background: "transparent" }}>
                <AccordionIcon />
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"bold"} fontSize="18px">
                    Inbox email address
                  </Text>
                </Box>
              </AccordionButton>
              <AccordionPanel pt="0" pb="4" px="35px" m="0">
                <Text fontSize={"14px"}>
                  Dedicated email address for each of your Inboxes to send
                  messages from other email accounts or from your application.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box borderRadius={"15px"} border="1px solid #ebebf3" w="full">
          <Image borderTopRadius="15px" src={image2} w="full" />
          <Flex
            align={"center"}
            justify="space-between"
            p="25px"
            borderBottom={"1px solid #ebebf3"}
          >
            <Box>
              <Heading>Email API</Heading>
              <Text color="#566583">Send Emails on Production</Text>
            </Box>
            <Box>
              <button className="dashboardbtn">Setup Domain</button>
            </Box>
          </Flex>
          <Accordion allowMultiple>
            <AccordionItem py="10px">
              <AccordionButton _hover={{ background: "transparent" }}>
                <AccordionIcon />
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"bold"} fontSize="18px">
                    SMTP Service, API/SDK
                  </Text>
                </Box>
              </AccordionButton>
              <AccordionPanel pt="0" pb="4" px="35px" m="0">
                <Text fontSize={"14px"}>
                  Integrate with our scalable cloud MTA cluster to send your
                  production emails. Well-documented API compatible with common
                  email providers.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem py="10px">
              <AccordionButton _hover={{ background: "transparent" }}>
                <AccordionIcon />
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"bold"} fontSize="18px">
                    SPF, DKIM, DMARC, Dedicated IP
                  </Text>
                </Box>
              </AccordionButton>
              <AccordionPanel pt="0" pb="4" px="35px" m="0">
                <Text fontSize={"14px"}>
                  SPF, DKIM, DMARC configuration aligned with major mailbox
                  providers (GMail, Outlook, ProtonMail, Yahoo, etc.). Dedicated
                  IPs. Support and monitoring by deliverability experts.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem py="10px">
              <AccordionButton _hover={{ background: "transparent" }}>
                <AccordionIcon />
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"bold"} fontSize="18px">
                    Deliverability Alerts
                  </Text>
                </Box>
              </AccordionButton>
              <AccordionPanel pt="0" pb="4" px="35px" m="0">
                <Text fontSize={"14px"}>
                  Special alerts similar to servers performance monitoring.
                  Triggered by drop in vital metrics such as bounces, open,
                  click and spam rates.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem pt="10px" pb="20px" borderBottom="none">
              <AccordionButton _hover={{ background: "transparent" }}>
                <AccordionIcon />
                <Box flex="1" textAlign="left">
                  <Text fontWeight={"bold"} fontSize="18px">
                    Email content and logs
                  </Text>
                </Box>
              </AccordionButton>
              <AccordionPanel pt="0" pb="4" px="35px" m="0">
                <Text fontSize={"14px"}>
                  60 days of content retention. Detailed diagnostic logs. Rich
                  filters. History of events. Email preview. Spam and blocklist
                  analysis.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};
