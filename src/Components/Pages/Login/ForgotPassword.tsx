import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import fp from "./assets/forgot-password.svg";
export const ForgotPassword = () => {
  const toast = useToast();
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = e.target as typeof e.target & {
      email: { value: string };
    };
    if (!email.value.includes("@")) return setError("Enter a valid email");
    setDisable(true);

    await sendPasswordResetEmail(auth, email.value)
      .then((res) => {
        setDisable(false);
        toast({
          title: "Success",
          description: "Reset link has been sent to your email",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        navigate("/login");
      })
      .catch((error) => {
        setDisable(false);
        const message = error.message;
        if (message.includes("user-not-found")) setError("User doesn't exist");
        else setError(message);
      });
  };
  return (
    <Box w="full" bg="#fff" py="70px" h={["max-content"]}>
      <Box h="full" py="50px" mx="auto" w={["95%", "90%", "90%", "90%", "80%"]}>
        <Flex w="100%" justify={"space-evenly"} h="full" gap="10px">
          <VStack w="380px" align="flex-start" gap={"15px"} h="full">
            <Heading mb="10px" w="max-content">
              Forgot Your Password?
            </Heading>
            <Box width={"full"}>
              <form onSubmit={handleSubmit} className="loginform">
                <label className="loginlabel">Email</label>
                <input type="email" placeholder="" required id="email" />
                <Text color="red.500">{error ? error : null}</Text>
                <input
                  type={"submit"}
                  disabled={disable}
                  value="Send Instructions"
                />
              </form>
            </Box>
          </VStack>
          <Flex
            h="max-content"
            flexDir={"column"}
            display={["none", "none", "flex", "flex", "flex", "flex", "flex"]}
          >
            <Box>
              <Image w="100%" src={fp}></Image>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
