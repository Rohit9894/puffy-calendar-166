import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Navbar/Sidebar";

export const UserHome = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex w="full" bg="#fff" h="100vh" overflowX={"hidden"} overflowY="scroll">
      <Box w="fit-content">
        <Sidebar show={isOpen} />
      </Box>
      <Box w="full">
        <Navbar onToggle={onToggle} />
        <Box className="loginlayout">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};
