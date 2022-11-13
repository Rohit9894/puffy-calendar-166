import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { deleteUser } from "firebase/auth";
import React, { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../Firebase/firebase";
export const DeleteAccount = () => {
  const [show, setShow] = useState(true);
  const [disable, setDisable] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleDelete = () => {
    setDisable(true);
    const user = auth.currentUser;
    deleteUser(user)
      .then(() => {
        toast({
          position: "top",
          title: "Success",
          description: "Account deleted successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setDisable(false);
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch(() =>
        toast({
          position: "top",
          title: "Error",
          description: "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  return (
    <Box h="max-content" w="95%">
      <VStack align={"flex-start"} fontSize="14px" gap="15px">
        <Heading fontSize={"15px"}>Deleting Account</Heading>
        <Text>Pay special attention when entering this area!</Text>
        <HStack
          border={"1px solid #ff7171"}
          p="20px"
          borderRadius={"15px"}
          justify="flex-start"
          align={"flex-start"}
          gap="15px"
        >
          <Box>
            <CgDanger color="#fb5151" fontSize={"35px"} />
          </Box>
          <VStack align={"flex-start"}>
            <Text>
              Deleting your account removes all projects, inboxes, domains, and
              data associated with the account. If you have multiple accounts,
              you can still access other accounts and their data.
            </Text>
            <Text>
              Once you click "Delete Account", we send you a confirmation email.
            </Text>
            <Button
              color={"#fb5151"}
              border="1px solid #fb5151"
              bg=""
              borderRadius={"30px"}
              _hover={{ background: "#ff7171", color: "#fff" }}
              display={show ? "block" : "none"}
              onClick={() => setShow(false)}
            >
              Delete Account
            </Button>
            <VStack display={!show ? "block" : "none"}>
              <Text fontSize={"14px"} fontWeight="bold">
                Are you sure you want to delete the account?
              </Text>
              <HStack>
                <Button
                  color={"#fb5151"}
                  border="1px solid #fb5151"
                  bg=""
                  borderRadius={"30px"}
                  disabled={disable}
                  _hover={{ background: "#ff7171", color: "#fff" }}
                  onClick={handleDelete}
                >
                  Yes, Delete
                </Button>
                <Button
                  color={"#22d172"}
                  border="1px solid #22d172"
                  bg=""
                  borderRadius={"30px"}
                  _hover={{ background: "#22d172", color: "#fff" }}
                  onClick={() => setShow(true)}
                >
                  Cancel
                </Button>
              </HStack>
            </VStack>
            <div>
              <strong>Note:</strong> To delete your profile completely, go to
              the My Profile menu in the upper right corner.
            </div>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
