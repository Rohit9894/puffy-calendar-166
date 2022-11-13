import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import logo from "./favicon.png";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import { TfiLocationArrow } from "react-icons/tfi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiInbox } from "react-icons/fi";

type s = {
  show: boolean;
};
export const Sidebar = ({ show }: s) => {
  return (
    <Box
      display={[`${show ? "block" : "none"}`, `${show ? "none" : "block"}`]}
      whiteSpace={"nowrap"}
      mr="10px"
      bg="#1a2e44"
      color={"#fff"}
      w="250px"
      h="100vh"
    >
      <Flex justify={"center"} align="center" py="5px">
        <Link to="/home">
          <Image h="50px" src={logo} />
        </Link>
      </Flex>
      <Accordion
        w="full"
        color={"#566583"}
        fontSize="15px"
        defaultIndex={0}
        py="10px"
      >
        <Link to="/home">
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton
                _expanded={{ color: "#fff", background: "#38445e" }}
                _hover={{ background: "#38445e" }}
              >
                <Flex justify={"flex-start"} align="center" gap="10px">
                  <BiHomeAlt className="sidebarmenuicon" /> Home
                </Flex>
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Link>
        <AccordionItem border={"none"}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _expanded={{ color: "#fff" }}
                  _hover={{ background: "#38445e" }}
                >
                  <Flex
                    justify={"flex-start"}
                    align="center"
                    gap="10px"
                    flex={1}
                  >
                    <TfiLocationArrow className="loginmenuicon" /> Email API{" "}
                    <Badge colorScheme={"blue"}>New</Badge>
                  </Flex>
                  {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </AccordionButton>
              </h2>
              <AccordionPanel w="full" p="0">
                <Accordion w="full">
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Email Logs
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Stats
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Mailbox Providers
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Email Categories
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Sending Domains
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Suppressions
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Deliverability Alerts
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                </Accordion>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem border={"none"}>
          {({ isExpanded }) => (
            <AccordionItem border={"none"}>
              <h2>
                <AccordionButton
                  _expanded={{ color: "#fff" }}
                  _hover={{ background: "#38445e" }}
                >
                  <Flex
                    justify={"flex-start"}
                    align="center"
                    gap="10px"
                    flex={1}
                  >
                    <MdOutlineAttachEmail className="sidebarmenuicon" /> Sandbox
                  </Flex>
                  {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </AccordionButton>
              </h2>
              <AccordionPanel p={0} w="full">
                <Accordion>
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <h2>
                        <AccordionButton
                          _expanded={{ color: "#fff", background: "#38445e" }}
                          _hover={{ background: "#38445e" }}
                          pl="48px"
                        >
                          <Flex align={"center"} gap="10px">
                            <FiInbox className="sidebarmenuicon" /> Inboxes
                          </Flex>
                        </AccordionButton>
                      </h2>
                    </AccordionItem>
                  </Link>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>
          )}
        </AccordionItem>
        <AccordionItem border={"none"}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _expanded={{ color: "#fff" }}
                  _hover={{ background: "#38445e" }}
                >
                  <Flex
                    justify={"flex-start"}
                    align="center"
                    gap="10px"
                    flex={1}
                  >
                    <BsCreditCard className="sidebarmenuicon" /> Billing
                  </Flex>

                  {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </AccordionButton>
              </h2>
              <AccordionPanel p={0}>
                <Accordion>
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Dashboard
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Plans [Sandbox]
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Plans [Email API]
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                  <Link to="/home/payment">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Payment Method
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                  <Link to="">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        Setting
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                </Accordion>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <Link to="/home/user-management">
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton
                _expanded={{ color: "#fff", background: "#38445e" }}
                _hover={{ background: "#38445e" }}
              >
                <Flex justify={"flex-start"} align="center" gap="10px" flex={1}>
                  <AiOutlineUserSwitch className="sidebarmenuicon" /> User
                  Management
                </Flex>
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Link>
        <AccordionItem border={"none"}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _expanded={{ color: "#fff" }}
                  _hover={{ background: "#38445e" }}
                >
                  <Flex
                    justify={"flex-start"}
                    align="center"
                    gap="10px"
                    flex={1}
                  >
                    <HiOutlineKey className="sidebarmenuicon" /> API
                  </Flex>
                  {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </AccordionButton>
              </h2>
              <AccordionPanel p={0}>
                <Accordion>
                  <Link to="/home/api-tokens">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        API Tokens
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                  <Link to="/home/cors-domain">
                    <AccordionItem border={"none"}>
                      <AccordionButton
                        _expanded={{ color: "#fff", background: "#38445e" }}
                        _hover={{ background: "#38445e" }}
                        pl="48px"
                      >
                        CORS Domains
                      </AccordionButton>
                    </AccordionItem>
                  </Link>
                </Accordion>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <Link to="/home/account-settings">
          <AccordionItem border={"none"}>
            <h2>
              <AccordionButton
                _expanded={{ color: "#fff", background: "#38445e" }}
                _hover={{ background: "#38445e" }}
              >
                <Flex justify={"flex-start"} align="center" gap="10px" flex={1}>
                  <HiOutlineDocumentText className="sidebarmenuicon" /> Account
                  Settings
                </Flex>
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Link>
      </Accordion>
    </Box>
  );
};
