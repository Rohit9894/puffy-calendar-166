import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import { FiBarChart2 } from "react-icons/fi";
import { UserAuth } from "../../../Context/AuthContext";
import { BiChevronDown } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { TfiHelpAlt } from "react-icons/tfi";
import avatar from "./avatar.jpg";
import { Link } from "react-router-dom";
import { BsWindowDock } from "react-icons/bs";
import { useState } from "react";
type elem = {
  onToggle: () => void;
};
export const Navbar = ({ onToggle }: elem) => {
  const { user, logout } = UserAuth();
  const [show, setShow] = useState(false);

  return (
    <Box className="loginnavbar">
      <Flex
        align={"center"}
        bg="#fff"
        borderBottom={"1px solid #eee"}
        lineHeight="1.4"
        h={"40px"}
        px="10px"
        justify={"space-between"}
      >
        <Flex justify={"center"} align="center" gap="5px">
          <Box className="loginmenuicon" onClick={onToggle}>
            <FiBarChart2 />
          </Box>
          <Box>Home</Box>
        </Flex>
        <Flex
          gap="5px"
          justify={"center"}
          align="center"
          cursor={"pointer"}
          onClick={() => setShow(!show)}
        >
          <Flex w="30px" h="30px" objectFit={"contain"} borderRadius="50%">
            <Image borderRadius={"50%"} src={user.photoURL} />
          </Flex>
          <BiChevronDown />
          <Box className="loginDropdown" display={show ? "block" : "none"}>
            <Flex
              justify={"center"}
              flexDir="column"
              align={"center"}
              borderBottom="1px solid #eee"
              w="full"
              p="10px"
              gap={1}
            >
              <Image borderRadius={"50%"} w="30px" h="30px" src={avatar} />
              <Text>{user.email}</Text>
              <Link to="/profile">
                <Text color={"blue.300"} textDecoration="underline">
                  My Profile
                </Text>
              </Link>
            </Flex>
            <Flex className="logindropdownlist">
              <Flex
                justify={"center"}
                align="center"
                w="30px"
                h="30px"
                borderRadius={"50%"}
                objectFit="contain"
                ml="10px"
              >
                <Image src={user.photoURL} borderRadius="50%" />
              </Flex>
              <Box>{user?.displayName ? user.displayName : user.email}</Box>
            </Flex>
            <Flex className="logindropdownlist">
              <Flex className="logindropdownicon">
                <BsWindowDock />
              </Flex>
              <Box>
                API Docs <Badge colorScheme="blue">New</Badge>
              </Box>
            </Flex>
            <Flex className="logindropdownlist">
              <Flex className="logindropdownicon">
                <TfiHelpAlt />
              </Flex>
              <Box>Help</Box>
            </Flex>
            <Flex className="logindropdownlist" pb="10px" onClick={logout}>
              <Flex className="rotatelogout">
                <CiLogout />
              </Flex>
              <Box>Logout</Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
