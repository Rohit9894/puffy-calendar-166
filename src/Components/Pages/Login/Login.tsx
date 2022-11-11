import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import {
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useState, FormEvent } from "react";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { auth } from "../../Firebase/firebase";
import login from "./assets/login.svg";
import "./login.css";

export const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn, githubSignIn, facebookSignIn, setUser, user } =
    UserAuth();
  const [putmail, setPutmail] = useState<string>("");
  const toast = useToast();
  const [show, setShow] = useState(true);
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState("");
  const [showverify, setShowverify] = useState(false);
  const verifyEmail = () => {
    setError("");
    if (!putmail.includes("@")) return setError("Enter a valid email");
    setDisable(true);
    fetchSignInMethodsForEmail(auth, putmail)
      .then((res) => {
        setDisable(false);
        if (res[0] === "password") setShow(!show);
        else setError("Email doesn't exist");
      })
      .catch((error) => {
        setDisable(false);
        setError(error);
      });
  };
  const sendVerifyEmail = () => {
    setDisable(true);
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
      setShow(true);
      setShowverify(false);
      setDisable(false);
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, check } = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      check: { checked: boolean };
    };
    setDisable(true);
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((res) => {
        setDisable(false);
        const user: any = res.user;
        setUser(user);
        if (user.emailVerified) {
          if (check.checked) localStorage.setItem("user", JSON.stringify(user));
          navigate("/");
        } else {
          setShowverify(true);
          setShow(false);
        }
      })
      .catch((err) => {
        setDisable(false);
        if (err.message.includes("wrong-password")) setError("Wrong Password");
        else setError(err.message);
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
    <Box w="full" bg="#fff" py="70px" h={["max-content"]}>
      <Box h="full" py="50px" mx="auto" w={["95%", "90%", "90%", "90%", "80%"]}>
        <Flex w="100%" justify={"space-evenly"} h="full" gap="10px">
          <VStack w="380px" align="flex-start" gap={"15px"} h="full">
            <Heading mb="10px">Log In</Heading>
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
            <Box width={"full"} display={showverify ? "none" : "block"}>
              <form onSubmit={handleSubmit} className="loginform">
                <label className="loginlabel">Email</label>
                <input
                  type="email"
                  placeholder=""
                  id="email"
                  onChange={(e) => setPutmail(e.target.value)}
                />
                <Text display={show ? "block" : "none"} color={"red.500"}>
                  {error}
                </Text>
                <Box className="loginform" display={show ? "none" : "block"}>
                  <label className="loginlabel">
                    Password
                    <span className="loginhyperlink">
                      <a href="/forgot-password">Forgot Password?</a>
                    </span>
                  </label>
                  <input type="password" placeholder="" id="password" />
                  <Flex gap="5px" pl="5px">
                    <input type="checkbox" id="check" /> <span>Remeber Me</span>
                  </Flex>
                  <Text color={"red.500"}>{error}</Text>
                  <Box>
                    <input type="submit" value={"Log In"} disabled={disable} />
                  </Box>
                </Box>
              </form>
              <Box display={show ? "block" : "none"}>
                <button
                  className="nextbtn"
                  disabled={disable}
                  onClick={verifyEmail}
                >
                  Next
                </button>
              </Box>
            </Box>
            <VStack display={showverify ? "flex" : "none"} w="full">
              <Box w="full">
                <Text color="red.500">Account not verified</Text>
                <button
                  className="nextbtn"
                  disabled={disable}
                  onClick={sendVerifyEmail}
                >
                  Verify
                </button>
              </Box>
            </VStack>
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
