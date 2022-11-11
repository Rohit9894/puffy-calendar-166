import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Card({ arr }) {
  console.log(arr);
  return (
    <div>
      <a href={arr.categoryhref}>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          bg="white"
          px="20px"
          h="200px"
          textAlign="center"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          borderRadius="5px"
          boxSizing="border-box"
          gap="14px"
          cursor="pointer"
          _hover={{
            background: "#f0f9fa",
          }}
        >
          <Text fontWeight="bold">{arr.category}</Text>
          <Text>{arr.category2}</Text>
          <Text
            fontWeight="bold"
            color="teal"
          >{`${arr.notranslate} ${arr.articlecount} >`}</Text>
        </Flex>
      </a>
    </div>
  );
}

export default Card;
