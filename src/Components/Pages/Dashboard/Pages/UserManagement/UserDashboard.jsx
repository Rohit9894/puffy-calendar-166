import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";

import { IoMdCheckmarkCircle } from "react-icons/io";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { List, ListItem, ListIcon } from "@chakra-ui/react";

const UserDashboard = () => {
  return (
    <>
      <Box mt="50px">
        <Flex w="100%">
          <Box
            p="4"
            fontSize="1.375rem"
            fontWeight={600}
            lineHeight={1.21}
            display="block"
            color="#1a2e44"
            fontFamily={
              "Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif"
            }
          >
            User Management
          </Box>
          <Spacer />
          <Box
            p="4"
            mr={{ base: "0", lg: "5" }}
            fontWeight={700}
            display="block"
            color="#1a2e44"
            fontFamily={
              "Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif"
            }
          >
            Total users: 0
          </Box>
        </Flex>

        <Box
          h="100%"
          w={["99%", "99%", "80%", "50%", "max-content"]}
          p="4"
          borderRadius={"0.625rem"}
          bgColor={"#fff"}
          lineHeight={1.5}
          boxShadow={"0 0.3125rem 1rem rgb(0 0 0 / 7%)"}
          textAlign="left"
          color="#202c45"
          fontWeight={400}
          fontFamily="Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
        >
          <Flex
            w="100%"
            p="2"
            color="#1a2e44"
            fontFamily={
              "Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif"
            }
          >
            <List spacing={2} w="100%">
              <ListItem>
                <ListIcon as={IoMdCheckmarkCircle} color="green.500" />
                Up to 999 members
              </ListItem>
              <ListItem>
                <ListIcon as={IoMdCheckmarkCircle} color="green.500" />
                Manage and setup rules of access for each member
              </ListItem>
              <ListItem>
                <ListIcon as={IoMdCheckmarkCircle} color="green.500" />
                Count only users. Account owner is excluded from the limit of
                users
              </ListItem>
            </List>
          </Flex>
          <HStack mt={2} pl="2">
            <button className="dashboardbtn">Upgrade</button>
            <Text
              display={"block"}
              fontSize="14px"
              color="#1a2e44"
              fontFamily={
                "Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif"
              }
            >
              Check how it works
            </Text>
          </HStack>
          <Text
            p="2"
            display={"block"}
            fontSize="14px"
            color="#1a2e44"
            fontFamily={
              "Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif"
            }
          >
            This feature is available on Team, Business, Premium, or Enterprise
            plans.
          </Text>
        </Box>

        <Text
          fontSize={"1rem"}
          ml={4}
          mt={5}
          fontWeight={600}
          lineHeight={1.21}
          display="block"
          color="#1a2e44"
          fontFamily={
            "Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif"
          }
        >
          Add or Remove Team Members
        </Text>

        <TableContainer>
          <Table variant="simple" mt={4} w="100%">
            <TableCaption>
              Your team members will be displayed here
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Status</Th>
                <Th>Email</Th>
                <Th>Name</Th>
                <Th>Access</Th>
              </Tr>
            </Thead>
            <Tbody></Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default UserDashboard;
