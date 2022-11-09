import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useState, FormEvent } from "react";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { SiMicrosoftoffice } from "react-icons/si";
import signup from "./assets/signup.svg";
import nocc from "./assets/nocc.svg";
import nocontract from "./assets/nocontract.svg";
import "./login.css";
export const Signup = () => {
  const [putmail, setPutmail] = useState(true);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Box w="full" bg="#fff" py="70px" h="max-content">
      <Box
        h="full"
        py={["30px", "30px", "62px"]}
        mx="auto"
        w={["95%", "90%", "90%", "90%", "80%"]}
      >
        <Flex w="100%" justify={"space-evenly"} h="full">
          <VStack
            w={"380px"}
            align="flex-start"
            gap={"15px"}
            justify="center"
            h="full"
          >
            <Heading mb="10px">Create Free Account</Heading>
            <Box className="loginbtn">
              <AiOutlineGoogle /> Use Google account
            </Box>
            <Box className="loginbtn">
              <AiFillGithub /> Use Github account
            </Box>
            <Box className="loginbtn">
              <SiMicrosoftoffice /> Use Office 365 account
            </Box>
            <Flex w="full" justify={"center"} align="center">
              <Box>
                <Text m="10px auto" w="max-content" textAlign={"center"}>
                  OR
                </Text>
              </Box>
            </Flex>
            <Box display={putmail ? "block" : "none"} w="full">
              <button className="nextbtn" onClick={() => setPutmail(!putmail)}>
                Sign Up With Your Email
              </button>
            </Box>
            <Box width={"full"} display={putmail ? "none" : "block"}>
              <form onSubmit={handleSubmit} className="loginform">
                <label className="loginlabel">Email</label>
                <input type="email" placeholder="" />

                <Box className="loginform">
                  <label className="loginlabel">
                    Password
                    <span className="loginhyperlink">
                      <a href="/forgotpassword">Forgot Password?</a>
                    </span>
                  </label>
                  <input type="password" placeholder="" />
                  <Flex gap="5px" pl="5px">
                    <input type="checkbox" /> <span>Remeber Me</span>
                  </Flex>
                  <input type="submit" value={"Log In"} />
                </Box>
              </form>
            </Box>
            <Box w="100%" textAlign={"center"}>
              By creating a Mailtrap account, you agree to our{" "}
              <span className="loginhyperlink">Terms of Service </span>
              and <span className="loginhyperlink">Privacy Policy</span>. We'll
              occasionally send you account related emails.
            </Box>
          </VStack>
          <Flex
            mt="8%"
            h="max-content"
            display={["none", "none", "flex", "flex", "flex", "flex", "flex"]}
            flexDir="column"
          >
            <Box>
              <Image w="100%" src={signup}></Image>
            </Box>
            <VStack h="max-content">
              <Flex
                justify={"center"}
                align="center"
                gap="10px"
                fontWeight={600}
              >
                <Image src={nocc}></Image> No credit card needed
              </Flex>
              <Flex
                justify={"center"}
                align="center"
                gap="10px"
                fontWeight={600}
              >
                <Image src={nocontract}></Image> No contract needed
              </Flex>
            </VStack>
          </Flex>
        </Flex>
        <VStack h="max-content" mt="20px" display={["flex", "none"]}>
          <Flex justify={"center"} align="center" gap="10px" fontWeight={600}>
            <Image src={nocc}></Image> No credit card needed
          </Flex>
          <Flex justify={"center"} align="center" gap="10px" fontWeight={600}>
            <Image src={nocontract}></Image> No contract needed
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};
