import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { confirmPasswordReset } from "firebase/auth";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import fp from "./assets/forgot-password.svg";
export const ResetPassword = ({ code }: any) => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState("");
  const toast = useToast();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const { password, cpassword } = e.target as typeof e.target & {
      password: { value: string };
      cpassword: { value: string };
    };
    if (password.value.length < 6)
      return setError("Password is too short (minimum is 6 characters)");
    else if (password.value !== cpassword.value)
      return setError("Passwords doesn't match ");
    setDisable(true);
    await confirmPasswordReset(auth, code, password.value)
      .then(() => {
        setDisable(false);
        toast({
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
          render: () => (
            <Box className="toastbox">
              <Heading>Password reset successfully</Heading>
            </Box>
          ),
        });
        alert("Password reset successfully");
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
              Reset Your Password
            </Heading>
            <Box width={"full"}>
              <form onSubmit={handleSubmit} className="loginform">
                <label className="loginlabel">New Password</label>
                <input type="password" placeholder="" required id="password" />
                <label className="loginlabel">Confirm Password</label>
                <input type="password" placeholder="" required id="cpassword" />
                <Text color="red.500">{error ? error : null}</Text>
                <input
                  type={"submit"}
                  disabled={disable}
                  value="Reset Password"
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
