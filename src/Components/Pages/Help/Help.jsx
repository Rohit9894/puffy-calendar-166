import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Card from "./Card";
import data from "../Blog/blogdata.json";
import "./help.css";

function Help() {
  const [getUp, setGetUp] = useState([]);
  const [getDown, setGetDown] = useState([]);
  function getUpData() {
    setGetUp(data["help_up"]);
  }
  function getDownData() {
    setGetDown(data["head_down"]);
  }
  useEffect(() => {
    getUpData();
  }, []);
  useEffect(() => {
    getDownData();
  }, []);

  return (
    <div>
      <Box
        fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
        mt="90px"
      >
        <Box bg="white" py="100px">
          <Box w="80%" m="auto">
            {" "}
            <Heading
              mb="50px"
              textAlign="center"
              fontSize="48px"
              fontWeight="medium"
            >
              How can we help?
            </Heading>
          </Box>
          <Flex justifyContent="center" gap="20px">
            <Input
              borderColor="1px solid black"
              placeholder="Search the knowladge base"
              w={{ sm: "80%", md: "30%" }}
              h="60px"
              rounded="none"
              _placeholder={{
                color: "black",
              }}
            />
            <Button
              className="r_button"
              h="60px"
              px={["10px", "40px", "60px"]}
              rounded={["5px", "30px"]}
            >
              Search
            </Button>
          </Flex>
        </Box>
        <Box py="60px">
          <Box>
            <SimpleGrid
              spacing={10}
              w="80%"
              m="auto"
              columns={{ sm: "1", md: "2", lg: "3" }}
            >
              {getUp.map((item, index) => (
                <Card key={index} arr={item} />
              ))}
            </SimpleGrid>
          </Box>
          <Box mt="50px">
            <SimpleGrid
              spacing={10}
              w="80%"
              m="auto"
              columns={{ sm: "1", md: "2", lg: "3" }}
            >
              {getDown.map((item, index) => (
                <Card key={index} arr={item} />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Help;
