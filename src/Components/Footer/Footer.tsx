import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import f from "./FooterIcons/facebook-0be93f551b662821a339.svg";
import t from "./FooterIcons/twitter-57fa29ba21896247fdc6.svg";
import l from "./FooterIcons/linkedin-604440460898fa41700c.svg";
export const Footer = () => {
  const path = useLocation().pathname;
  const handledisplay = () => {
    if (path === "/login" || path === "/signup") {
      return ["none", "block"];
    }
    return "none";
  };
  return (
    <Box
      px={["20px", "30px", "30px", "50px", "60px"]}
      pt="40px"
      pb={"20px"}
      borderTop="1px solid rgba(0, 0, 0, 0.24)"
    >
      <Flex
        w={["100%", "80%", "80%", "70%", "70%"]}
        justify={"space-between"}
        flexWrap="wrap"
        m="auto"
      >
        <Box mt={["10px", ""]}>
          <Heading fontSize={"18px"}>Mail Test</Heading>
          <List fontSize={"14px"} pl="5px" spacing={2} mt="10px">
            <ListItem className="dropdownlistmenu">
              <Link to="">Pricing</Link>
            </ListItem>
            <ListItem className="dropdownlistmenu">
              <Link to="">Changelog</Link>
            </ListItem>
            <ListItem className="dropdownlistmenu">
              <Link to="">Status</Link>
            </ListItem>
            <ListItem className="dropdownlistmenu">
              <Link to="">Terms of Service</Link>
            </ListItem>
            <ListItem className="dropdownlistmenu">
              <Link to="">Privacy Policy</Link>
            </ListItem>
            <ListItem className="dropdownlistmenu">
              <Link to="">Navigational Information</Link>
            </ListItem>
            <ListItem className="dropdownlistmenu">
              <Link to="">DPA</Link>
            </ListItem>
          </List>
        </Box>
        <Box display={["none", "none", "none", "block", "block"]}>
          <Heading fontSize={"18px"}>Railsware Experience</Heading>
          <List fontSize={"14px"} pl="5px" spacing={2} mt="10px">
            <ListItem className="dropdownlistmenu">
              <Link to="">Mailtest Blog</Link>
            </ListItem>
            <ListItem className="dropdownlistmenu">
              <Link to="">Coupler.io</Link>
            </ListItem>
            <ListItem className="dropdownlistmenu">
              <Link to="">Smart Checklist for Jira</Link>
            </ListItem>
            <ListItem
              className="dropdownlistmenu"
              display={
                path === "/login" || path === "/signup" ? "none" : "block"
              }
            >
              <Link to="">Careers – Railsware Hiring</Link>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Box mt={["10px", ""]}>
            <Heading fontSize={"18px"}>Contact</Heading>
            <a
              style={{ fontSize: "14px" }}
              href="mailto:support@mailtest.io"
              target={"_blank"}
              rel="noreferrer"
            >
              email : <span className="mailspan">support@mailtest.io</span>
            </a>
          </Box>
          <HStack mt="10px">
            <a
              href="https://www.facebook.com/Mailtrap"
              target={"_blank"}
              rel="noreferrer"
            >
              <Image src={f}></Image>
            </a>
            <a
              href="https://twitter.com/mailtrap"
              target={"_blank"}
              rel="noreferrer"
            >
              <Image src={t}></Image>
            </a>
            <a
              href="https://www.linkedin.com/company/mailtrap"
              target={"_blank"}
              rel="noreferrer"
            >
              <Image src={l}></Image>
            </a>
          </HStack>
        </Box>
        <Box width={"100%"} mx="auto" mt="20px" display={handledisplay()}>
          <Heading fontSize={"18px"} mb="10px">
            What is Mailtest?
          </Heading>
          <Text fontSize={"14px"}>
            Mailtrap is a test mail server solution that allows testing email
            notifications without sending them to the real users of your
            application. Not only does Mailtrap work as a powerful email test
            tool, it also lets you view your dummy emails online, forward them
            to your regular mailbox, share with the team and more! Mailtrap is a
            mail server test tool built by Railsware Products, Inc., a premium
            software development consulting company.
          </Text>
        </Box>
      </Flex>

      <Box mt="15px">
        <Text>© Masai School, Inc.</Text>
      </Box>
    </Box>
  );
};
