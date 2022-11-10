import React from "react";
import { Navbar } from "../Navbar/Navbar";
import {useState} from "react"
import { Box, Button, Center, Heading, Hide, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { BsOctagon } from "react-icons/bs";


const Price = () => {
  const [table,setTable] = useState(false)
  const style = {
    border:"1px solid black"
  }
  return (
    <Box
      border={"1px solid gray"}
      w="100%"
      p={4}
      marginTop={"100px"}
      color="black"
    >
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
                  <Button bg="rgb(26,46,68)" color="white" position={"revert"}>
                    {" "}
                    Try Free
                  </Button>
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
                  <Button bg="rgb(34,209,114)" color="white" position={"revert"}>
                    {" "}
                    Buy Now
                  </Button>
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
                  <Button bg="rgb(34,209,114)" color="white" position={"revert"}>
                    {" "}
                    Buy now
                  </Button>
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
                  <Button bg="rgb(34,209,114)" color="white" position={"revert"}>
                    Buy Now
                  </Button>
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
                  <Button bg="rgb(34,209,114)" color="white" position={"revert"}>
                   
                    Buy Now
                  </Button>
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
                  <Button bg="rgb(34,209,114)" color="white" position={"revert"}>
                
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Center>
        </Box>
      </Hide>
      {/* day one work done
      chart */}
      <Box backgroundColor={"lightpink"}>
        <Box textAlign="center" marginTop={"5pc"}>
          <Heading> See How Much We Offer</Heading>
        </Box>
        <Box width={"90%"} margin="auto">
          <TableContainer marginTop={"2pc"}>
            <Table variant="striped" colorScheme="rgb(249,249,247)">
              <Thead>
                <Tr>
                  <Th>    </Th>
                  <Th style={style} >Free</Th>
                  <Th style= {style}>Indevidual</Th>
                  <Th style = {style}>Team</Th>
                  <Th  height="50px"  w="150px" border={"1px solid green"}>Business</Th>
                  <Th style = { style}>Premium</Th>
                  <Th style = { style}>Enterprise</Th>
                </Tr>
              </Thead>
              <Tbody>
              
                <Tr style={style}>
                  <Td style={style}>Total test emails per month</Td>
                  <Td style={style}>500</Td>
                  <Td style={style}>5K</Td>
                  <Td style={style}>15K</Td>
                  <Td style={style}>50K</Td>
                  <Td style={style}>100K</Td>
                  <Td style ={style}>10M</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>Sending rate limits per 10 sec</Td>
                  <Td style={style}>5</Td>
                  <Td style={style}>10</Td>
                  <Td style={style}>25</Td>
                  <Td style={style}>50</Td>
                  <Td style={style}>100</Td>
                  <Td style ={style}>150</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>Inboxes</Td>
                  <Td style={style}>1</Td>
                  <Td style={style}>5</Td>
                  <Td style={style}>15</Td>
                  <Td style={style}>40</Td>
                  <Td style={style}>80</Td>
                  <Td style ={style}>999</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>Max emails per inbox</Td>
                  <Td style={style}>50</Td>
                  <Td style={style}>200</Td>
                  <Td style={style}>400</Td>
                  <Td style={style}>600</Td>
                  <Td style={style}>800</Td>
                  <Td style ={style}>1000</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>API</Td>
                  <Td style={style}>✅</Td>
                  <Td style={style}>✅</Td>
                  <Td style={style}>✅</Td>
                  <Td style={style}>✅</Td>
                  <Td style={style}>✅</Td>
                  <Td style ={style}>✅</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>Inbox email address</Td>
                  <Td style={style}></Td>
                  <Td style={style}></Td>
                  <Td style={style}>             </Td>
                  <Td style={style}>✅</Td>
                  <Td style={style}>✅</Td>
                  <Td style ={style}>✅</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>Email size</Td>
                  <Td style={style}>5</Td>
                  <Td style={style}>7
                  </Td>
                  <Td style={style}>10</Td>
                  <Td style={style}>15</Td>
                  <Td style={style}>20</Td>
                  <Td style ={style}>25</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>Tech info and Bcc</Td>
                  <Td style={style}></Td>
                  <Td style={style}></Td>
                  <Td style={style}>✅</Td>
                  <Td style={style}>✅</Td>
                  <Td style={style}>✅</Td>
                  <Td style ={style}>✅</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>Total forwarded emails per month</Td>
                  <Td style={style}></Td>
                  <Td style={style}>100</Td>
                  <Td style={style}>500</Td>
                  <Td style={style}>2K</Td>
                  <Td style={style}>5K</Td>
                  <Td style ={style}>10K</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>Manual forwarding recipients</Td>
                  <Td style={style}></Td>
                  <Td style={style}>10</Td>
                  <Td style={style}>25</Td>
                  <Td style={style}>100</Td>
                  <Td style={style}>100</Td>
                  <Td style ={style}>300</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>Projects</Td>
                  <Td style={style}>1</Td>
                  <Td style={style}>5</Td>
                  <Td style={style}>15</Td>
                  <Td style={style}>40</Td>
                  <Td style={style}>80</Td>
                  <Td style ={style}>300</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>Support</Td>
                  <Td style={style}>non-priority</Td>
                  <Td style={style}>priority</Td>
                  <Td style={style}>priority</Td>
                  <Td style={style}>priority</Td>
                  <Td style={style}>priority</Td>
                  <Td style ={style}>priority</Td>
                </Tr>
                <Tr style={style}>
                  <Td style={style}>Single Sign-ON(SSO)</Td>
                  <Td style={style}></Td>
                  <Td style={style}></Td>
                  <Td style={style}></Td>
                  <Td style={style}></Td>
                  <Td style={style}></Td>
                  <Td style ={style}>✅</Td>
                </Tr>
                <Tr style={style}>
                  <Td border={"none"}></Td>

                  <Td style={style} fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="150px">
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
                      0
                    </Text>
                    
                  </Box>
                  </Box> 
                  
                   <Button bg="rgb(34,209,114)" color="white" position={"revert"} marginTop="30px" marginLeft={"15%"}>
                   
                   Buy Now
                 </Button></Td>
                 <Td style={style} fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="150px">
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
                  
                   <Button bg="rgb(34,209,114)" color="white" position={"revert"} marginTop="30px" marginLeft={"15%"}>
                   
                   Buy Now
                 </Button></Td>
                 <Td style={style} fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="150px">
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
                      24
                    </Text>
                    <Text textAlign="center">99 </Text>
                  </Box>
                  </Box> 
                  
                   <Button bg="rgb(34,209,114)" color="white" position={"revert"} marginTop="30px" marginLeft={"15%"}>
                   
                   Buy Now
                 </Button></Td>
                 <Td style={style} fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="150px">
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
                  
                   <Button bg="rgb(34,209,114)" color="white" position={"revert"} marginTop="30px" marginLeft={"15%"}>
                   
                   Buy Now
                 </Button></Td>
                 <Td style={style} fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="150px">
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
                  
                   <Button bg="rgb(34,209,114)" color="white" position={"revert"} marginTop="30px" marginLeft={"15%"}>
                   
                   Buy Now
                 </Button></Td>
                 <Td style={style} fontWeight="bold"
                  padding={["10px", "10px", "10px", "10px"]}
                  h="150px">
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
                      299
                    </Text>
                    <Text textAlign="center">99 </Text>
                  </Box>
                  </Box> 
                  
                   <Button bg="rgb(34,209,114)" color="white" position={"revert"} marginTop="30px" marginLeft={"15%"}>
                   
                   Buy Now
                 </Button></Td>
                </Tr>
              
              </Tbody>
            </Table>
          </TableContainer>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Price;
