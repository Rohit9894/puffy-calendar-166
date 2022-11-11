import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState, FormEvent } from "react";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import signupimg from "./assets/signup.svg";
import nocc from "./assets/nocc.svg";
import nocontract from "./assets/nocontract.svg";
import "./login.css";
import { UserAuth } from "../../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { googleSignIn, githubSignIn, facebookSignIn } = UserAuth();
  const [putmail, setPutmail] = useState(true);
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState<string>();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, confirmation } = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      confirmation: { value: string };
    };

    if (!email.value.includes("@") || email.value.length === 0)
      return setError("Enter a valid Email");
    else if (password.value.length < 6)
      return setError("Password is too short (minimum is 6 characters)");
    else if (password.value !== confirmation.value)
      return setError("Passwords doesn't match ");
    setDisable(true);
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((res) => {
        setDisable(false);
        const user: any = res.user;
        sendEmailVerification(user.auth.currentUser).then(() => {
          toast({
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
            render: () => (
              <Box className="toastbox">
                <Heading>Verification Link Sent Successfully</Heading>
                <Text>A verfication link has been sent to your email.</Text>
              </Box>
            ),
          });
          setTimeout(() => navigate("/login"), 3000);
        });
      })
      .catch((err) => {
        setDisable(false);
        setError(err.message);
      });
  };
  const handleGoogleLogin = async () => {
    console.log("check");
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleGithubLogin = async () => {
    console.log("check");
    try {
      await githubSignIn().then((res: any) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
  const handleFacebookLogin = async () => {
    console.log("check");
    try {
      await facebookSignIn();
    } catch (error) {
      console.log(error);
    }
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
            <Box className="loginbtn" onClick={handleGoogleLogin}>
              <AiOutlineGoogle /> Use Google account
            </Box>
            <Box className="loginbtn" onClick={handleGithubLogin}>
              <AiFillGithub /> Use Github account
            </Box>
            <Box className="loginbtn" onClick={handleFacebookLogin}>
              <SiFacebook /> Use Facebook account
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
                <input type="text" placeholder="" id="email" />
                <label className="loginlabel">Password</label>
                <input type="password" placeholder="" id="password" />
                <label className="loginlabel">Confirmation</label>
                <input type="password" placeholder="" id="confirmation" />
                <Text color="red.500">{error ? error : null}</Text>
                <input type="submit" value={"Sign Up"} disabled={disable} />
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
              <Image w="100%" src={signupimg}></Image>
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
