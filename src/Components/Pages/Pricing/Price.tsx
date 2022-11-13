import React from "react";

import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Hide,
  Text,
  Image,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Price = () => {
 
  const style = {
    border: "1px solid black",
  };
  return (
    <Box w="100%" p={4} marginTop={"100px"} color="black">
      {/* upper chart */}

      <Hide below="xl">
        <Box width="100%">
          <Box margin={"auto"} alignItems={"center"} textAlign={"center"}>
            <Heading>Choose A Plan That Suits Your Needs</Heading>
          </Box>
          {/* table */}
          <Center margin="auto" display="flex" marginTop={"5pc"} width="100%">
            <Box
              w="15%"
              border="1px solid gray"
              h="400px"
              borderLeftRadius={"5px"}
            >
              <Box>
                <Box
                  fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="30%"
                >
                  <Text fontWeight="bold" textAlign="center">
                    Free
                  </Text>
                  <Box
                    display={"flex"}
                    alignContent="center"
                    textAlign="center"
                    marginLeft="39%"
                  >
                    <Text textAlign="center">$ </Text>
                    <Text fontSize="42px" textAlign="center">
                      0
                    </Text>
                  </Box>

                  <Text
                    textAlign="center"
                    fontWeight={"normal"}
                    color="gray.500"
                  >
                    Forever
                  </Text>
                </Box>
                <hr />
                <Box bg="rgb(234,242,254)" height="200px">
                  <Text padding={["10px", "10px", "10px", "10px"]}>
                    For new users who want to evaluate Mailtrap or intend to
                    apply it on a personal side project.
                  </Text>
                </Box>
                <hr />
                <Box
                  height="20%"
                  alignItems="center"
                  textAlign="center"
                  margin={["10px", "10px", "10px", "10px"]}
                >
                  <Link to="/payment" state={0}>
                    <Button
                      bg="rgb(26,46,68)"
                      color="white"
                      position={"revert"}
                    >
                      {" "}
                      Try Free
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box w="15%" border="1px solid gray" h="400px">
              <Box>
                <Box
                  fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="30%"
                >
                  <Text fontWeight="bold" textAlign="center">
                    {" "}
                    Individual
                  </Text>
                  <Box
                    display={"flex"}
                    alignContent="center"
                    textAlign="center"
                    marginLeft="37%"
                    color="rgb(34,209,114)"
                  >
                    <Text textAlign="center">$ </Text>
                    <Text fontSize="42px" textAlign="center">
                      9
                    </Text>
                    <Text textAlign="center">99 </Text>
                  </Box>

                  <Text
                    textAlign="center"
                    fontWeight={"normal"}
                    color="gray.500"
                  >
                    Monthly
                  </Text>
                </Box>
                <hr />
                <Box bg="rgb(249,249,247)" height="200px">
                  <Text padding={["10px", "10px", "10px", "10px"]}>
                    For freelancers and individuals working in a one-person
                    team, who want to benefit from higher email sending rate
                    limits.
                  </Text>
                </Box>
                <hr />
                <Box
                  height="20%"
                  alignItems="center"
                  textAlign="center"
                  margin={["10px", "10px", "10px", "10px"]}
                >
                  <Link to="/payment" state={9}>
                    <Button
                      bg="rgb(34,209,114)"
                      color="white"
                      position={"revert"}
                    >
                      {" "}
                      Buy Now
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box w="15%" border="1px solid gray" h="400px">
              <Box>
                <Box
                  fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="30%"
                >
                  <Text fontWeight="bold" textAlign="center">
                    {" "}
                    Team
                  </Text>
                  <Box
                    display={"flex"}
                    alignContent="center"
                    textAlign="center"
                    marginLeft="32%"
                    color="rgb(34,209,114)"
                  >
                    <Text textAlign="center">$ </Text>
                    <Text fontSize="42px" textAlign="center">
                      24
                    </Text>
                    <Text textAlign="center">99 </Text>
                  </Box>

                  <Text
                    textAlign="center"
                    fontWeight={"normal"}
                    color="gray.500"
                  >
                    Monthly
                  </Text>
                </Box>
                <hr />
                <Box bg="rgb(249,249,247)" height="200px">
                  <Text padding={["10px", "10px", "10px", "10px"]}>
                    For an established team where users may invite others to
                    join their project, which has a moderate volume of emails to
                    test.
                  </Text>
                </Box>
                <hr />
                <Box
                  height="20%"
                  alignItems="center"
                  textAlign="center"
                  margin={["10px", "10px", "10px", "10px"]}
                >
                  <Link to="/payment" state={24}>
                    <Button
                      bg="rgb(34,209,114)"
                      color="white"
                      position={"revert"}
                    >
                      {" "}
                      Buy now
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box
              w="15%"
              border="1px solid rgb(34,209,114)"
              h="500px"
              borderRadius={"10px"}
              boxShadow="xl"
            >
              <Box
                bg={"rgb(34,209,114)"}
                width="70%"
                margin={"auto"}
                borderBottomRadius="5px"
                marginTop="-1px"
                textAlign="center"
                fontWeight="bold"
                color="white"
              >
                <Text fontSize="10px">Recommended</Text>
              </Box>
              <Box>
                <Box
                  fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="30%"
                >
                  <Text fontWeight="bold" textAlign="center">
                    {" "}
                    Business
                  </Text>
                  <Box
                    display={"flex"}
                    alignContent="center"
                    textAlign="center"
                    marginLeft="32%"
                    color="rgb(34,209,114)"
                  >
                    <Text textAlign="center">$ </Text>
                    <Text fontSize="42px" textAlign="center">
                      49
                    </Text>
                    <Text textAlign="center">99 </Text>
                  </Box>

                  <Text
                    textAlign="center"
                    fontWeight={"normal"}
                    color="gray.500"
                  >
                    Monthly
                  </Text>
                </Box>
                <hr />
                <Box bg="rgb(249,249,247)" height="290px">
                  <Text padding={["10px", "10px", "10px", "10px"]}>
                    For companies with multiple tech teams working on several of
                    their own or client projects that require higher rate
                    limits, more emails, extra inboxes and a dedicated email
                    address.
                  </Text>
                </Box>
                <hr />
                <Box
                  height="20%"
                  alignItems="center"
                  textAlign="center"
                  margin={["10px", "10px", "10px", "10px"]}
                >
                  <Link to="/payment" state={49}>
                    <Button
                      bg="rgb(34,209,114)"
                      color="white"
                      position={"revert"}
                    >
                      Buy Now
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box w="15%" border="1px solid gray" h="400px">
              <Box>
                <Box
                  fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="30%"
                >
                  <Text fontWeight="bold" textAlign="center">
                    Premium
                  </Text>
                  <Box
                    display={"flex"}
                    alignContent="center"
                    textAlign="center"
                    marginLeft="32%"
                    color="rgb(34,209,114)"
                  >
                    <Text textAlign="center">$ </Text>
                    <Text fontSize="42px" textAlign="center">
                      99
                    </Text>
                    <Text textAlign="center">99 </Text>
                  </Box>

                  <Text
                    textAlign="center"
                    fontWeight={"normal"}
                    color="gray.500"
                  >
                    Monthly
                  </Text>
                </Box>
                <hr />
                <Box bg="rgb(249,249,247)" height="200px">
                  <Text padding={["10px", "10px", "10px", "10px"]}>
                    For large organizations looking for a reliable system to
                    handle large-scale email testing backed up by prime limits
                    and rich collaboration possibilities.
                  </Text>
                </Box>
                <hr />
                <Box
                  height="20%"
                  alignItems="center"
                  textAlign="center"
                  margin={["10px", "10px", "10px", "10px"]}
                >
                  <Link to="/payment" state={99}>
                    <Button
                      bg="rgb(34,209,114)"
                      color="white"
                      position={"revert"}
                    >
                      Buy Now
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>

            <Box
              w="15%"
              border="1px solid gray"
              h="400px"
              borderRightRadius={"5px"}
            >
              <Box>
                <Box
                  fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="30%"
                >
                  <Text fontWeight="bold" textAlign="center">
                    {" "}
                    Enterprise
                  </Text>
                  <Box
                    display={"flex"}
                    alignContent="center"
                    textAlign="center"
                    marginLeft="28%"
                    color="rgb(34,209,114)"
                  >
                    <Text textAlign="center">$ </Text>
                    <Text fontSize="42px" textAlign="center">
                      299
                    </Text>
                    <Text textAlign="center">99 </Text>
                  </Box>

                  <Text
                    textAlign="center"
                    fontWeight={"normal"}
                    color="gray.500"
                  >
                    Monthly
                  </Text>
                </Box>
                <hr />
                <Box bg="rgb(249,249,247)" height="200px">
                  <Text padding={["10px", "10px", "10px", "10px"]}>
                    For clients who are capable of challenging Mailtrap by
                    loading it with email testing from both development and
                    staging environments with virtually no limits.
                  </Text>
                </Box>
                <hr />
                <Box
                  height="20%"
                  alignItems="center"
                  textAlign="center"
                  margin={["10px", "10px", "10px", "10px"]}
                >
                  <Link to="/payment" state={299}>
                    {" "}
                    <Button
                      bg="rgb(34,209,114)"
                      color="white"
                      position={"revert"}
                    >
                      Buy Now
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Center>
        </Box>
      </Hide>
      {/* day one work done
      chart */}
      <Box backgroundColor={"lightpink.200"}>
        <Box textAlign="center" marginTop={"5pc"}>
          <Heading> See How Much We Offer</Heading>
        </Box>
        <Box width={"90%"} margin="auto">
          <TableContainer marginTop={"2pc"}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <Table
                variant="striped"
                colorScheme="rgb(249,249,247)"
                size={["md", "md", "md", "md"]}
              >
                <Thead>
                  <Tr>
                    <Th> </Th>
                    <Th style={style}>Free</Th>
                    <Th style={style}>Indevidual</Th>
                    <Th style={style} height="50px">
                      Team
                    </Th>
                    <Th border={"1px solid green"} color="green">
                      Business
                    </Th>
                    <Th style={style}>Premium</Th>
                    <Th style={style}>Enterprise</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {" "}
                  <Tr style={style}>
                    {" "}
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>Total test emails per month</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          The maximum number of emails you can test with
                          Mailtrap and get in all your Mailtrap Inboxes
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>
                    <Td style={style}>500</Td>
                    <Td style={style}>5K</Td>
                    <Td style={style}>15K</Td>
                    <Td style={style}>50K</Td>
                    <Td style={style}>100K</Td>
                    <Td style={style}>10M</Td>
                  </Tr>
                  <Tr style={style}>
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>Sending rate limits per 10 sec</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          The number of emails you can send to each of your
                          Inboxes every 10 seconds.
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>
                    <Td style={style}>5</Td>
                    <Td style={style}>10</Td>
                    <Td style={style}>25</Td>
                    <Td style={style}>50</Td>
                    <Td style={style}>100</Td>
                    <Td style={style}>150</Td>
                  </Tr>
                  <Tr style={style}>
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>Inboxes</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          Separate folders to capture you test messages from
                          different environments(dev, QA,staging).
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>
                    <Td style={style}>1</Td>
                    <Td style={style}>5</Td>
                    <Td style={style}>15</Td>
                    <Td style={style}>40</Td>
                    <Td style={style}>80</Td>
                    <Td style={style}>999</Td>
                  </Tr>
                  <Tr style={style}>
                    {" "}
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>Max emails per inbox</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          The maximum number of emails you can test with
                          Mailtrap and get in all your Mailtrap Inoxes
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>
                    <Td style={style}>50</Td>
                    <Td style={style}>200</Td>
                    <Td style={style}>400</Td>
                    <Td style={style}>600</Td>
                    <Td style={style}>800</Td>
                    <Td style={style}>1000</Td>
                  </Tr>
                  <Tr style={style}>
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>API</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          Mailtrap API allows developers to run integrational or
                          load tests and receive messages or email lists via API
                          to make sure the sendiing works correctly.
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>

                    <Td style={style}>✅</Td>
                    <Td style={style}>✅</Td>
                    <Td style={style}>✅</Td>
                    <Td style={style}>✅</Td>
                    <Td style={style}>✅</Td>
                    <Td style={style}>✅</Td>
                  </Tr>
                  <Tr style={style}>
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>Inbox email address</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          Ted dedicated email address for each of your Inboxes
                          to send messages from other email accounts or right
                          from your application during the testing process.
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>

                    <Td style={style}></Td>
                    <Td style={style}></Td>
                    <Td style={style}> </Td>
                    <Td style={style}>✅</Td>
                    <Td style={style}>✅</Td>
                    <Td style={style}>✅</Td>
                  </Tr>
                  <Tr style={style}>
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td> email size</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          The maximum allowed size of each email message
                          including attachments, in megabytes(1MB = 1024KB).
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>

                    <Td style={style}>5</Td>
                    <Td style={style}>7</Td>
                    <Td style={style}>10</Td>
                    <Td style={style}>15</Td>
                    <Td style={style}>20</Td>
                    <Td style={style}>25</Td>
                  </Tr>
                  <Tr style={style}>
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>Tech info and Bcc</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          The detailed information about SMTP transactions and
                          email headers. Bcc'ed email addresses are displayed in
                          a Separate field.
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>

                    <Td style={style}></Td>
                    <Td style={style}></Td>
                    <Td style={style}>✅</Td>
                    <Td style={style}>✅</Td>
                    <Td style={style}>✅</Td>
                    <Td style={style}>✅</Td>
                  </Tr>
                  <Tr style={style}>
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>Total forwarded emails per month</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          The maximum number of emails that can be sent to
                          whitelisted recipients with both Manual Forwarding and
                          Auto Forwarding Rules.
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>

                    <Td style={style}></Td>
                    <Td style={style}>100</Td>
                    <Td style={style}>500</Td>
                    <Td style={style}>2K</Td>
                    <Td style={style}>5K</Td>
                    <Td style={style}>10K</Td>
                  </Tr>
                  <Tr style={style}>
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>Manual forwarding recipients</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          The number of email addresses you can whitelist for
                          manual forwarding
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>

                    <Td style={style}></Td>
                    <Td style={style}>10</Td>
                    <Td style={style}>25</Td>
                    <Td style={style}>100</Td>
                    <Td style={style}>100</Td>
                    <Td style={style}>300</Td>
                  </Tr>
                  <Tr style={style}>
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>Projects</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          The maximum number of Projects to arrage Mailtrap
                          Inboxes and distinguish different tasks.
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>

                    <Td style={style}>1</Td>
                    <Td style={style}>5</Td>
                    <Td style={style}>15</Td>
                    <Td style={style}>40</Td>
                    <Td style={style}>80</Td>
                    <Td style={style}>300</Td>
                  </Tr>
                  <Tr style={style}>
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>Support</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          =The email support we provide you with on Monday-
                          Friday from 9 am till 6 pm (UTC)
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>
                    <Td style={style}>non-priority</Td>
                    <Td style={style}>priority</Td>
                    <Td style={style}>priority</Td>
                    <Td style={style}>priority</Td>
                    <Td style={style}>priority</Td>
                    <Td style={style}>priority</Td>
                  </Tr>
                  <Tr style={style}>
                    <AccordionItem>
                      <AccordionButton backgroundColor={"lavender"}>
                        <Td>Single Sign-on(SSO)</Td>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Tr>
                          Integrate Mailtrap into you SSO platform and manage
                          all users and permissions from one place.
                        </Tr>
                      </AccordionPanel>
                    </AccordionItem>

                    <Td style={style}></Td>
                    <Td style={style}></Td>
                    <Td style={style}></Td>
                    <Td style={style}></Td>
                    <Td style={style}></Td>
                    <Td style={style}>✅</Td>
                  </Tr>
                  <Tr style={style}>
                    <Td border={"none"}></Td>

                    <Td
                      style={style}
                      fontWeight="bold"
                      padding={["10px", "10px", "10px", "10px"]}
                      h="150px"
                    >
                      <Box>
                        <Box
                          display={"flex"}
                          // alignContent="center"
                          textAlign="center"
                          marginLeft={["auto", "auto", "auto", "30%"]}
                          color="rgb(34,209,114)"
                          width={"75px"}
                        >
                          <Text>$ </Text>
                          <Text fontSize="42px">0</Text>
                        </Box>
                      </Box>

                      <Link to="/payment" state={0}>
                        {" "}
                        <Button
                          bg="rgb(34,209,114)"
                          color="white"
                          marginLeft={["auto", "auto", "auto", "15%"]}
                          position={"revert"}
                          marginTop="30px"
                        >
                          Buy Now
                        </Button>
                      </Link>
                    </Td>
                    <Td
                      style={style}
                      fontWeight="bold"
                      padding={["10px", "10px", "10px", "10px"]}
                      h="150px"
                    >
                      <Box>
                        <Box
                          display={"flex"}
                          // alignContent="center"
                          textAlign="center"
                          marginLeft="20%"
                          color="rgb(34,209,114)"
                          width={"75px"}
                          justifyContent="space-between"
                        >
                          <Text textAlign="center">$ </Text>
                          <Text fontSize="42px" textAlign="center">
                            9
                          </Text>
                          <Text textAlign="center">99 </Text>
                        </Box>
                      </Box>

                      <Link to="/payment" state={9}>
                        <Button
                          bg="rgb(34,209,114)"
                          color="white"
                          marginLeft={["auto", "auto", "auto", "8%"]}
                          position={"revert"}
                          marginTop="30px"
                        >
                          Buy Now
                        </Button>
                      </Link>
                    </Td>
                    <Td
                      style={style}
                      fontWeight="bold"
                      padding={["10px", "10px", "10px", "10px"]}
                      h="150px"
                    >
                      <Box>
                        <Box
                          display={"flex"}
                          // alignContent="center"
                          textAlign="center"
                          marginLeft="10%"
                          color="rgb(34,209,114)"
                          width={"75px"}
                          justifyContent="space-between"
                        >
                          <Text textAlign="center">$ </Text>
                          <Text fontSize="42px" textAlign="center">
                            24
                          </Text>
                          <Text textAlign="center">99 </Text>
                        </Box>
                      </Box>

                      <Link to="/payment" state={24}>
                        <Button
                          bg="rgb(34,209,114)"
                          color="white"
                          marginLeft={["auto", "auto", "auto", "auto"]}
                          position={"revert"}
                          marginTop="30px"
                        >
                          Buy Now
                        </Button>
                      </Link>
                    </Td>
                    <Td
                      style={style}
                      fontWeight="bold"
                      padding={["10px", "10px", "10px", "10px"]}
                      h="150px"
                    >
                      <Box>
                        <Box
                          display={"flex"}
                          // alignContent="center"
                          textAlign="center"
                          marginLeft="20%"
                          color="rgb(34,209,114)"
                          width={"75px"}
                          justifyContent="space-between"
                        >
                          <Text textAlign="center">$ </Text>
                          <Text fontSize="42px" textAlign="center">
                            49
                          </Text>
                          <Text textAlign="center">99 </Text>
                        </Box>
                      </Box>
                      <Link to="/payment" state={49}>
                      <Button
                        bg="rgb(34,209,114)"
                        color="white"
                        marginLeft={["auto", "auto", "auto", "auto"]}
                        position={"revert"}
                        marginTop="30px"
                      >
                        Buy Now
                      </Button>
                      </Link>
                    </Td>
                    <Td
                      style={style}
                      fontWeight="bold"
                      padding={["10px", "10px", "10px", "10px"]}
                      h="150px"
                    >
                      <Box>
                        <Box
                          display={"flex"}
                          // alignContent="center"
                          textAlign="center"
                          marginLeft="20%"
                          color="rgb(34,209,114)"
                          width={"75px"}
                          justifyContent="space-between"
                        >
                          <Text textAlign="center">$ </Text>
                          <Text fontSize="42px" textAlign="center">
                            99
                          </Text>
                          <Text textAlign="center">99 </Text>
                        </Box>
                      </Box>
                      <Link to="/payment" state={99}>
                      <Button
                        bg="rgb(34,209,114)"
                        color="white"
                        marginLeft={["auto", "auto", "auto", "auto"]}
                        position={"revert"}
                        marginTop="30px"
                      >
                        Buy Now
                      </Button>
                      </Link>
                    </Td>
                    <Td
                      style={style}
                      fontWeight="bold"
                      padding={["10px", "10px", "10px", "10px"]}
                      h="150px"
                    >
                      <Box>
                        <Box
                          display={"flex"}
                          // alignContent="center"
                          textAlign="center"
                          marginLeft={["auto", "10%", "10%", "10%"]}
                          color="rgb(34,209,114)"
                          width={"75px"}
                          justifyContent="space-between"
                        >
                          <Text textAlign="center">$ </Text>
                          <Text fontSize="42px" textAlign="center">
                            299
                          </Text>
                          <Text textAlign="center">99 </Text>
                        </Box>
                      </Box>

                      <Link to="/payment" state ={299}>
                      <Button
                        bg="rgb(34,209,114)"
                        color="white"
                        marginLeft={["auto", "auto", "auto", "auto"]}
                        position={"revert"}
                        marginTop="30px"
                      >
                        Buy Now
                      </Button>
                      </Link>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Accordion>
          </TableContainer>
        </Box>
      </Box>

      <Box
        display={["block", "block", "flex"]}
        textAlign={"center"}
        marginTop="3pc"
        marginLeft={["0%", "0%", "20%", "30%"]}
      >
        <Box color={"green"} fontWeight="bold" marginRight={"5px"}>
          Save 20%
        </Box>{" "}
        With annual subscription! Contact us{" "}
        <Box
          color={"blue.1200"}
          marginLeft={"5px"}
          textDecoration="underline"
          cursor={"pointer"}
        >
          {" "}
          support@mailtrap{" "}
        </Box>
      </Box>
      {/* last part of template */}
      <Box
        bg="rgb(26,46,68)"
        marginTop={"5pc"}
        w="100%"
        p={4}
        color="white"
        display={["block", "block", "flex", "flex"]}
        justifyContent="space-between"
      >
        <Box
          marginLeft={["10%", "10%", "20%", "20%"]}
          marginTop={["1%", "1%", "5%", "10%"]}
        >
          <Text fontSize={"30px"} fontWeight={"bold"}>
            Create Your Free Account
          </Text>
          <Text fontSize={["50px", "50px", "50px", "70px"]} fontWeight={600}>
            In 3 Clicks
          </Text>
          <Button color="white" bg={"rgb(34,209,114)"} position="revert">
            Sign Up Now
          </Button>
        </Box>
        <Box>
          <Image
            src="https://mailtrap.io/wp-content/uploads/2021/01/img__cta.svg"
            alt="Dan Abramov"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Price;
