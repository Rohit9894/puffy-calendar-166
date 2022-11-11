import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import "./caseStudeis.css";
import img1 from "./assets/img__casestudy4.svg";
import CardCase from "./CaseStudiesparts/CardCase";
import CaseLogo from "./CaseStudiesparts/CaseLogo";
import img6 from "./assets/imgmailbox.svg";
function CaseStudies() {
  return (
    <div style={{ backgound: "white" }}>
      <Flex
        fontFamily="Poppins,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
        bg="#f9f9f7"
        h="415px"
        mt="90px"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Heading fontSize="42px" textAlign="center">
          Mailtrap Customer Stories
        </Heading>
        <Text
          w={["400px", "500px"]}
          textAlign="center"
          fontSize={["12px", "18px"]}
          mt="20px"
        >
          Read successful stories of Mailtrap customers that automated email
          testing with no hassle.
        </Text>
        <Img src={img1} alt="img" />
      </Flex>

      <Box my="40px">
        <CardCase />
      </Box>
      <Box>
        <CaseLogo />
      </Box>
      <Flex
        pr="50px"
        pl="100px"
        direction={["column", "row"]}
        justifyContent="space-between"
        alignItems="center"
        bg="#1a2e44"
      >
        <Box color="white" textAlign="left">
          <Text fontSize="24px">Create Your Free Account</Text>
          <Heading fontSize={["40px", "60px"]}>In 3 clicks</Heading>
          <Button mt="25px" _hover={{ background: "#5bdd96" }} bg="#5bdd96">
            Sign Up Now
          </Button>
        </Box>
        <Img h="368px" src={img6} alt="" />
      </Flex>
    </div>
  );
}

export { CaseStudies };
