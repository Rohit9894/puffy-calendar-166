import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

function Card({ arr }) {
  return (
    <div>
      <Box
        textAlign="left"
        h={{ sm: "400px", md: "500px", lg: "400px" }}
        fontFamily="'Open Sans', sans-serif"
      >
        <Box bg={arr.background} borderRadius="12px">
          <Img src={arr.image_src} alt="Img" />
        </Box>
        <Text mt="8px" fontSize="18px" fontWeight="bold">
          {arr.title}
        </Text>
        <Flex mt="6px" fontSize="13px" gap="20px" color="#202C45">
          <Text>{arr.d_block}</Text>
          <Text>{arr.d_block_2}</Text>
        </Flex>
        <Text mt="8px" fontSize="14px">
          {arr.description}
        </Text>

        <Flex mt="20px" gap="10px" alignItems="center">
          <Img src={arr.auth_img_src} alt="hello" borderRadius="50%" h="30px" />
          <Box lineHeight="20px">
            <Text fontSize="18px" fontWeight="bold">
              {arr.auth_name}
            </Text>
            <Text fontSize="12px">{arr.b_block}</Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default Card;
