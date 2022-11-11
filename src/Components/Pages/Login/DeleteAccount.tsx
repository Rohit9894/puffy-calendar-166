import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const DeleteAccount = () => {
  return (
    <Box py="100px" px={"10%"} h="max-content" w="95%">
      <VStack align={"flex-start"} fontSize="14px" gap="10px">
        <Heading>Delete account "Saroj Pahi"</Heading>
        <Text>
          Deleting your account will result in the projects, inboxes, and emails
          to no longer be accessible by anyone. To delete your account and all
          information associated with it, please press the 'Delete account'
          button.
        </Text>
        <Text fontWeight={"bold"}>Note: this action is irreversible.</Text>
        <Text>
          Further steps are necessary to reassure that this account belongs to
          you, as well as to inform you about the types of data which will be
          deleted as part of the process.
        </Text>
        <Button color={"#fff"} bg="#fb5151" _hover={{ background: "#ff7171" }}>
          Delete Account
        </Button>
      </VStack>
    </Box>
  );
};
