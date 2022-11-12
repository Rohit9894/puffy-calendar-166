import { Box, List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./sidebar.css";
type s = {
  show: boolean;
};
export const Sidebar = ({ show }: s) => {
  return (
    <Box
      display={show ? "block" : "none"}
      whiteSpace={"nowrap"}
      mr="10px"
      bg="#1a2e44"
      color={"#fff"}
    >
      <List>
        <ListItem>
          <Link to="/user-management">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/user-management/account-management">
            Account Management
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
