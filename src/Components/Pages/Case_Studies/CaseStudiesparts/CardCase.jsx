import { Box, Img, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import "../caseStudeis.css";
function CardCase() {
  const [div1, setDiv1] = React.useState(true);
  const [div2, setDiv2] = React.useState(true);
  const [div3, setDiv3] = React.useState(true);
  React.useEffect(() => {
    if (div1 || div2 || div3) {
      return;
    } else {
      setDiv1(true);
      setDiv2(true);
      setDiv3(true);
    }
  }, [div1, div2, div3]);

  return (
    <div style={{ background: "white" }}>
      <Flex
        w="80%"
        m="auto"
        flexWrap="wrap"
        pt="30px"
        mb="70px"
        gap="20px"
        justifyContent="center"
      >
        <Box
          bg="#1a2e44"
          color="white"
          padding={["3px", "10px"]}
          className="r_button_opt"
        >
          All
        </Box>
        <Box
          padding={["3px", "10px"]}
          onClick={() => setDiv1(!div1)}
          color={div1 ? "white" : "black"}
          bg={div1 ? "#1a2e44" : "none"}
          className="r_button_opt"
        >
          Business Applications
        </Box>
        <Box
          padding={["3px", "10px"]}
          onClick={() => setDiv2(!div2)}
          color={div2 ? "white" : "black"}
          bg={div2 ? "#1a2e44" : "none"}
          className="r_button_opt"
        >
          Cloud Infrastruture
        </Box>
        <Box
          padding={["3px", "10px"]}
          onClick={() => setDiv3(!div3)}
          color={div3 ? "white" : "black"}
          bg={div3 ? "#1a2e44" : "white"}
          className="r_button_opt"
        >
          Software Development
        </Box>
      </Flex>
      <SimpleGrid
        w={["90%", "85%"]}
        m="auto"
        spacing={6}
        columns={{ sm: "1", md: "2", lg: "3" }}
      >
        <Box display={div1 ? "inline-block" : "none"}>
          <Img
            bg="#b4cdff"
            className="r_cards"
            src="https://mailtrap.io/wp-content/uploads/2021/09/Featured-Image1-1.svg"
            atl=""
          />
          <Text fontWeight="medium">
            How Kinsta’s Developers, Designers, and QAs Collaborate On Emails
          </Text>
          <Flex gap="10px">
            <Text>On June 03, 2022</Text>
            <Text>6min read</Text>
          </Flex>
        </Box>
        <Box display={div2 ? "inline-block" : "none"}>
          <Img
            className="r_cards"
            bg="#22d172"
            src="https://mailtrap.io/wp-content/uploads/2022/06/Featured-Image1-2-1.svg"
            atl=""
          />
          <Text fontWeight="medium">
            How The Software House Approaches Email Development
          </Text>
          <Flex gap="10px">
            <Text>On June 14, 2022</Text>
            <Text>6min read</Text>
          </Flex>
        </Box>
        <Box display={div3 ? "inline-block" : "none"}>
          <Img
            className="r_cards"
            bg="#f9c273"
            src="https://mailtrap.io/wp-content/uploads/2022/06/Featured-Image1.svg"
            atl=""
          />
          <Text fontWeight="medium">
            {" "}
            Email Development On June 14, 2022 6min read How Calendly
            Streamlines Email Testing with Mailtrap
          </Text>
          <Flex gap="10px">
            <Text>On June 14, 2022</Text>
            <Text>6min read</Text>
          </Flex>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default CardCase;
