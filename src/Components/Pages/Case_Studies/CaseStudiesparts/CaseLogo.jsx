import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/Adobe.svg";
import img2 from "../assets/Atlassian.svg";
import img3 from "../assets/Calendly.svg";
import img4 from "../assets/Yelp.svg";
import img5 from "../assets/UserTesting.svg";
function CaseLogo() {
  return (
    <div>
      <Flex py="80px" justifyContent="center" alignItems="center">
        <Box
          bg="#f9f9f7"
          fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
        >
          <Heading
            width={{ sm: "800px", md: "none", lg: "none" }}
            fontWeight="semibold"
            textAlign="center"
          >
            Trusted by over 900,000 devs, QAs, and managers worldwide
          </Heading>
          <Flex
            direction={["column", "row"]}
            mt="50px"
            gap={["30px", "0px"]}
            justifyContent="space-evenly"
          >
            <Img h="38px" src={img1} alt="" />
            <Img h="38px" src={img2} alt="" />
            <Img h="38px" src={img3} alt="" />
            <Img h="38px" src={img4} alt="" />
            <Img h="38px" src={img5} alt="" />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default CaseLogo;
