import { Box, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { applyActionCode } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase";

export const VerifyEmail = ({ code }: any) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [disable, setDisable] = useState(false);
  const handleVerify = async () => {
    setDisable(true);
    applyActionCode(auth, code)
      .then(() => {
        toast({
          position: "top",
          title: "Verified",
          description: "Account verified successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setDisable(false);
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch((err) => {
        toast({
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
          render: () => (
            <Box className="invalidaction">
              <Heading>Invalid Action</Heading>
            </Box>
          ),
        });
        setDisable(false);
        setTimeout(() => navigate("/login"), 2000);
      });
  };
  return (
    <Flex
      justify={"center"}
      align="center"
      flexDir={"column"}
      gap="20px"
      w={["100%", "max-content"]}
      m="auto"
      p="60px 10px"
      textAlign={"center"}
    >
      <Heading>Hello sarojpahi@gmail.com</Heading>
      <Text>Before being able to use your account you need to verify</Text>
      <button
        className="nextbtn"
        style={{ width: "70%" }}
        onClick={handleVerify}
        disabled={disable}
      >
        Verify
      </button>
    </Flex>
  );
};
