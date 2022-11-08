import {
  Flex,
  Image,
  Box,
  List,
  ListItem,
  ListIcon,
  Text,
} from "@chakra-ui/react";
import "./navbar.css";
import { Link } from "react-router-dom";
import qa from "./NavIcons/qa_automation_icon_menu.svg";
import fa from "./NavIcons/fake_smtp_server_icon_menu.svg";
import ch from "./NavIcons/check_html_icon_menu.svg";
import ap from "./NavIcons/api_icon_menu.svg";
import helpimg from "./NavIcons/Transactional-Email-Sending_icon-06.svg";
import blodimg from "./NavIcons/Transactional-Email-Sending_icon-07.svg";
import cs from "./NavIcons/Transactional-Email-Sending_icon-08.svg";
import apiimg from "./NavIcons/Transactional-Email-Sending_icon-09.svg";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../Assets/favicon.png";
import { useEffect, useState } from "react";
export const Navbar = () => {
  const [active, setActive] = useState(" ");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80 ? setActive("navbar") : setActive("");
    }
  };
  return (
    <nav className={active}>
      <Box width="120px">
        <Link to={"/"}>
          <Image src={logo} alt="MailTest" />
        </Link>
      </Box>
      <Box w="28%">
        <List
          display={"flex"}
          cursor={"default"}
          justifyContent="space-between"
        >
          <ListItem className="droplist">
            Email Testing
            <ListIcon as={IoIosArrowDown} m="0" className="dropdownicon" />
            <List className="dropdownlist" spacing={7}>
              <ListItem className="dropdownlistmenu">
                <Link to="" className="dropdownlistmenu">
                  <Image w="35px" h="37px" src={qa}></Image>
                  <Box fontSize="14px">
                    <Text fontWeight={"bold"}>QA Automation</Text>
                    <Text>Automation for Email Testing</Text>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="dropdownlistmenu">
                <Link to="" className="dropdownlistmenu">
                  <Image w="35px" h="37px" src={ch}></Image>
                  <Box fontSize="14px">
                    <Text fontWeight={"bold"}>HTML Check</Text>
                    <Text>Find HTML/CSS issues</Text>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="dropdownlistmenu">
                <Link to="" className="dropdownlistmenu">
                  <Image w="35px" h="37px" src={fa}></Image>
                  <Box fontSize="14px">
                    <Text fontWeight={"bold"}>Fake SMTP Server</Text>
                    <Text>Your own SMTP server</Text>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="dropdownlistmenu">
                <Link to="" className="dropdownlistmenu">
                  <Image w="35px" h="37px" src={ap}></Image>
                  <Box fontSize="14px">
                    <Text fontWeight={"bold"}>Mailtrap API</Text>
                    <Text>Integrate with your application</Text>
                  </Box>
                </Link>
              </ListItem>
            </List>
          </ListItem>
          <ListItem className="droplist">
            <Link to={""}>Email API</Link>
          </ListItem>
          <ListItem className="droplist">
            <Link to="">Pricing</Link>
          </ListItem>
          <ListItem className="droplist">
            Resources
            <ListIcon as={IoIosArrowDown} m="0" />
            <List className="dropdownlist2" spacing={7}>
              <ListItem className="dropdownlistmenu">
                <Link to={""} className="dropdownlistmenu">
                  <Image w="35px" h="37px" src={apiimg}></Image>
                  <Box fontSize="14px">
                    <Text fontWeight={"bold"}>API</Text>
                    <Text>Integrate with existing resources</Text>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="dropdownlistmenu">
                <Link to={""} className="dropdownlistmenu">
                  <Image w="35px" h="37px" src={cs}></Image>
                  <Box fontSize="14px">
                    <Text fontWeight={"bold"}>Case Studies</Text>
                    <Text>Success stories of our customers</Text>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="dropdownlistmenu">
                <Link to={""} className="dropdownlistmenu">
                  <Image w="35px" h="37px" src={blodimg}></Image>
                  <Box fontSize="14px">
                    <Text fontWeight={"bold"}>Blog</Text>
                    <Text>The best content about emails</Text>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="dropdownlistmenu">
                <Link to={""} className="dropdownlistmenu">
                  <Image w="35px" h="37px" src={helpimg}></Image>
                  <Box fontSize="14px">
                    <Text fontWeight={"bold"}>Help</Text>
                    <Text>How-to's and Knowledge base</Text>
                  </Box>
                </Link>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
      <Flex gap="20px" justify={"center"} align="center">
        <Box
          cursor={"pointer"}
          border="1px solid #1a2e44"
          px="0.8rem"
          py="0.26rem"
          borderRadius={"0.43rem"}
        >
          <Link to="/login">Login</Link>
        </Box>
        <Box
          cursor={"pointer"}
          border="1px solid #22d172"
          px="0.8rem"
          py="0.26rem"
          borderRadius={"0.43rem"}
          bg="#22d172"
          color={"#fff"}
          fontWeight="medium"
          transition={"0.6s"}
          _hover={{ background: "#45e890" }}
        >
          <Link to="/signup">Sign up</Link>
        </Box>
      </Flex>
    </nav>
  );
};
