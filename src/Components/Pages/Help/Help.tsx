import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";
import "./help.css";

function Help() {
  return (
    <div>
      <Box
        fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
        mt="90px"
      >
        <Box bg="white" py="100px">
          <Heading
            mb="50px"
            textAlign="center"
            fontSize="48px"
            fontWeight="medium"
          >
            How can we help?
          </Heading>
          <Flex justifyContent="center" gap="20px">
            <Input
              borderColor="1px solid black"
              placeholder="Search the knowladge base"
              w="405px"
              h="60px"
              rounded="none"
              _placeholder={{
                color: "black",
              }}
            />
            <Button className="r_button" h="60px" px="6opx" rounded="30px">
              Search
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default Help;
