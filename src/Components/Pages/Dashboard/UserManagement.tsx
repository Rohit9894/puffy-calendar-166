import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Sidebar } from "./Navbar/Sidebar";

export const UserManagement = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex w="full" bg="#fff" h="100vh">
      <Box w="fit-content">
        <Sidebar show={isOpen} />
      </Box>
      <Box w="full">
        <Navbar onToggle={onToggle} />
        <Outlet />
      </Box>
    </Flex>
  );
};
