import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import "./blog.css";
import blog_data from "./blogdata.json";
import React, { useEffect, useState } from "react";
import email from "./assets/email.png";
import email_inside from "./assets/emal_inside.jpeg";
import Card from "./blog_Parts/Card";
import Skletin from "./blog_Parts/Skletin";

function Blog() {
  const [data, setData] = useState([]);
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("Eamil_Infrastruture");

  function getLatest() {
    setLatest(blog_data["Latest_Jobs"]);
  }
  function getData(query) {
    console.log(query);
    const blog_database = blog_data[query];
    setData(blog_database);
    console.log(blog_database);
  }
  useEffect(() => {
    getData(query);
  }, [query]);
  useEffect(() => {
    getLatest();
  }, []);

  return (
    <div>
      <Box pt="90px" w={["90%", "85%"]} m="auto">
        <Flex
          className="r_upper_poster"
          direction={["column", "row", "row"]}
          py="20px"
        >
          <Box
            pl={["0px", "50px", "50px"]}
            w={["90%", "70%"]}
            h={["auto", "70%", "70%"]}
            textAlign="left"
            py={["30px", "0px"]}
          >
            <Heading
              w={["90%", "auto", "90%"]}
              fontSize={["30px", "34px", "42px"]}
              fontWeight="semibold"
              className="r_heading"
            >
              How to Embed HTML5 Video in Email
            </Heading>
            <Flex lineHeight="40px" gap="20px">
              <Text>on june 23, 2002</Text>
              <Text>10min read</Text>
            </Flex>
            <Flex mt="50px" gap="10px" alignItems="center">
              <Img src={email_inside} alt="hello" borderRadius="50%" h="30px" />
              <Box lineHeight="20px">
                <Text fontSize="18px" fontWeight="bold">
                  Viktoriia Ivanenko
                </Text>
                <Text fontSize="12px">Technical Content Writer @ Mailtrap</Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Img src={email} alt="uppersection" />
          </Box>
        </Flex>
        <Box w="100%" m="auto">
          <Box w="100%" my="20px">
            <Flex
              gap="30px"
              overflow={["scroll", "auto"]}
              fontSize="16px"
              fontWeight="medium"
              fontFamily="'Open Sans', sans-serif"
              color="#bcc4cd"
              cursor="pointer"
              // w={["100%", "auto"]}
            >
              <Text
                whiteSpace="nowrap"
                cursor="pointer"
                className={
                  query === "Eamil_Infrastruture" ? "active_catagory" : ""
                }
                onClick={(e) => setQuery("Eamil_Infrastruture")}
              >
                Eamil Infrastruture
              </Text>

              <Text
                whiteSpace="nowrap"
                cursor="pointer"
                className={query === "Email_security" ? "active_catagory" : ""}
                onClick={(e) => setQuery("Email_security")}
              >
                Email security
              </Text>
              <Text
                whiteSpace="nowrap"
                cursor="pointer"
                className={query === "Email_Testing" ? "active_catagory" : ""}
                onClick={(e) => setQuery("Email_Testing")}
              >
                Email Testing
              </Text>
              <Text
                cursor="pointer"
                whiteSpace="nowrap"
                className={query === "Html_email" ? "active_catagory" : ""}
                onClick={(e) => setQuery("Html_email")}
              >
                Html email
              </Text>
              <Text
                whiteSpace="nowrap"
                cursor="pointer"
                className={query === "Email_Marketing" ? "active_catagory" : ""}
                onClick={(e) => setQuery("Email_Marketing")}
              >
                Email_Marketing
              </Text>
              <Text
                whiteSpace="nowrap"
                cursor="pointer"
                className={query === "Product_Updates" ? "active_catagory" : ""}
                onClick={(e) => setQuery("Product_Updates")}
              >
                Product Updates
              </Text>
            </Flex>
            <hr />
          </Box>

          {loading ? (
            <Skletin />
          ) : (
            <SimpleGrid columns={[1, 3]} spacing={10}>
              {data.map((item, index) => (
                <Card key={index} arr={item} />
              ))}
            </SimpleGrid>
          )}
          <Button
            textAlign="center"
            bg="inherit"
            border="1px solid black"
            my="60px"
          >
            Load More Posts
          </Button>
          <SimpleGrid columns={[1, 3]} spacing={10}>
            {latest.map((item, index) => (
              <Card key={index} arr={item} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Flex
        mt="90px"
        justifyContent="center"
        alignItems="center"
        h="372px"
        bg="#1a2e44"
      >
        <Box w="500px">
          <Heading fontSize={["32px", "48px"]} color="white">
            Your email workflows deserve more love
          </Heading>
          <Button bg="#f9c273" mt="20px">
            Start Now!
          </Button>
        </Box>
      </Flex>
    </div>
  );
}

export default Blog;
