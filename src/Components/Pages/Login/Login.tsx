import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useState, FormEvent } from "react";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { SiMicrosoftoffice } from "react-icons/si";
import { UserAuth } from "../../Context/AuthContext";
import login from "./assets/login.svg";
import "./login.css";
export const Login = () => {
  const { googleSignIn } = UserAuth();
  const [putmail, setPutmail] = useState(true);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleGoogleLogin = async () => {
    console.log("check");
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box w="full" bg="#fff" py="70px" h={["max-content"]}>
      <Box h="full" py="50px" mx="auto" w={["95%", "90%", "90%", "90%", "80%"]}>
        <Flex w="100%" justify={"space-evenly"} h="full" gap="10px">
          <VStack w="380px" align="flex-start" gap={"15px"} h="full">
            <Heading mb="10px">Log In</Heading>
            <Box className="loginbtn" onClick={handleGoogleLogin}>
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
            <Box width={"full"}>
              <form onSubmit={handleSubmit} className="loginform">
                <label className="loginlabel">Email</label>
                <input type="email" placeholder="" />
                <Box display={putmail ? "block" : "none"}>
                  <button
                    className="nextbtn"
                    onClick={() => setPutmail(!putmail)}
                  >
                    Next
                  </button>
                </Box>
                <Box className="loginform" display={putmail ? "none" : "block"}>
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
            <Flex
              w="100%"
              flexDirection={"column"}
              justify="center"
              align={"center"}
              textAlign={"center"}
            >
              Haven't received the confirmation email yet?{" "}
              <span className="loginhyperlink">
                <a href="https://mailtrap.io/confirmation/new">
                  Resend the email
                </a>
              </span>
            </Flex>
          </VStack>
          <Flex
            mt="8%"
            w="380px"
            h="max-content"
            flexDir={"column"}
            display={["none", "none", "flex", "flex", "flex", "flex", "flex"]}
          >
            <Box>
              <Image w="100%" src={login}></Image>
            </Box>
            <Text w="100%" fontWeight={600} textAlign="center">
              Mailtrap is great for testing of email notifications that are
              scheduled to go to many users.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
