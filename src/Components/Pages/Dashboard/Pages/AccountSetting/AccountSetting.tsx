import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AccountDetails } from "./AccountDetails";
import { DeleteAccount } from "./DeleteAccount";

export const AccountSetting = () => {
  return (
    <Box px="10px" py="10px" w="full">
      <Heading fontSize={"22px"}>Account Settings</Heading>
      <Tabs mt="10px" w={["100%", "80%", "70%"]}>
        <TabList>
          <Tab>Account Details</Tab>
          <Tab>Transfer Ownership</Tab>
          <Tab>SSO</Tab>
          <Tab>Delete Account</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AccountDetails />
          </TabPanel>
          <TabPanel>
            <Box>
              <Heading fontSize={"22px"} mb="10px">
                Transfer Ownership
              </Heading>
              <div>
                To transfer the account, you need to have other members except
                you in the account. If you want to add a new member -{" "}
                <span style={{ color: "blue" }}>
                  <Link to={"/home/user-management"}>
                    go to the User Management settings
                  </Link>
                </span>{" "}
                and invite somebody.
              </div>
            </Box>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <DeleteAccount />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
