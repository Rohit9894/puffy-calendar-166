import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineGoogle } from "react-icons/ai";
import login from "./login.svg";
import "./login.css";
export const Login = () => {
  return (
    <Box h="100vh" m="100px auto" w="80%">
      <HStack w="100%" justify={"space-evenly"}>
        <VStack w={"380px"} align="flex-start" gap={"15px"}>
          <Heading mb="10px">Log In</Heading>
          <Box className="loginbtn">
            <AiOutlineGoogle /> Use Google account
          </Box>
          <Box className="loginbtn">
            <AiOutlineGoogle /> Use Github account
          </Box>
          <Box className="loginbtn">
            <AiOutlineGoogle /> Use Office 365 account
          </Box>
          <Flex w="full" justify={"center"} align="center">
            <Box>
              <Text m="10px auto" w="max-content" textAlign={"center"}>
                OR
              </Text>
            </Box>
          </Flex>
        </VStack>
        <Flex justifyContent={"center"} align="center">
          <Image src={login}></Image>
        </Flex>
      </HStack>
    </Box>
  );
};
