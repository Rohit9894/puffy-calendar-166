import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { UserAuth } from "../../../../Context/AuthContext";
import { auth } from "../../../../Firebase/firebase";

export const AccountDetails = () => {
  const { user, setUser } = UserAuth();
  const [name, setName] = useState(user.displayName);
  const [disable, setDisable] = useState(false);
  const toast = useToast();
  const handleSubmit = () => {
    setDisable(true);
    const displayName = name;
    updateProfile(auth.currentUser, {
      displayName: displayName,
    })
      .then(() => {
        toast({
          position: "top",
          title: "Success",
          description: "Account Name updated successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setDisable(false);
        setUser(auth.currentUser);
      })
      .catch((e) => {
        toast({
          position: "top",
          title: "Error",
          description: "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        console.log(e);
        setDisable(false);
      });
  };
  return (
    <Box h="max-content" w="95%">
      <VStack align={"flex-start"} fontSize="14px" gap="10px">
        <Heading fontSize={"15px"}>Account Details</Heading>
        <Text>
          Accounts allow you to separate projects, for example one account for
          personal projects and one for company's projects. People who belong to
          more than one Mailtrap account will see the account name listed in
          their menu.
        </Text>
        <Box w={["100%", "100%", "90%", "70%"]}>
          <Text fontWeight={500}>Account Name</Text>

          <HStack w="full">
            <input
              type="text"
              value={name}
              id="name"
              className="accountupdate"
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              h="35px"
              color={"#fff"}
              bg="#22d172"
              borderRadius={"30px"}
              _hover={{ background: "#45e890" }}
              disabled={disable}
              onClick={handleSubmit}
            >
              Update
            </Button>
          </HStack>
        </Box>
        <VStack align={"flex-start"}>
          <Text fontWeight={500}>Account Owner Email</Text>
          <Text>{user.email}</Text>
          <Text fontWeight={500}>Account ID</Text>
          <Text>{user.uid}</Text>
        </VStack>
      </VStack>
    </Box>
  );
};
