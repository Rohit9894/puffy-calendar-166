import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

function Api() {
  return (
    <div>
      <Flex Pt="90px">
        <Box w="20%">
          <Box
            overflow="auto"
            color="white"
            mt="50px"
            w="100%"
            h="100vh"
            bg="#1b2d44 "
          >
            <Box>
              <Input w="70%" />
              <Button bg="inherit" border="1px solid red">
                Clear
              </Button>
            </Box>
            <Text>Mailtrap API</Text>
            <Text>Authentication</Text>
            <hr />
            <Text>Eamils</Text>
            <Text>PostSend email</Text>
            <Text>Webhooks</Text>
            <Text>POST WEBHOOK Receive events</Text>
            {/* sandBox */}
            <hr />
            <Text>sandBox</Text>
            <Text>Accounts</Text>
            <Text>Get Get all accounts</Text>
            <Text>Accout Users</Text>
            <Text>Get List all users in account</Text>
            <Text>DELETE REmove user form the account</Text>
            <Text>Permissions</Text>
            <Text>PUT Manage user or token Permissions</Text>
            <Text>Get Get resources</Text>
            <Text>Projects</Text>
            GET
            <Text>
              Get a list of projects
              <br />
              POST Create project
              <br />
              GET Get project by id DELETE Delete project
              <br />
              PATCH Update project
            </Text>
            {/* inboxes */}
            <Text>inboxes</Text>
            <Text>
              POST Create an inbox
              <br />
              GET Get inbox attributes
              <br />
              DELETE Delete an inbox
              <br />
              PATCH Update an inbox
              <br />
              PATCH Clean inbox
              <br />
              PATCH Mark as read
              <br />
              PATCH Reset credentials
              <br />
              PATCH Enable email address
              <br />
              PATCH Reset email address
              <br />
              GET Get a list of inboxes
            </Text>
            {/* messages */}
            <Text>Messages</Text>
            <Text>
              GET Show email message <br />
              DELETE Delete message <br />
              PATCH Update message <br />
              GET Get messages <br />
              POST Forward message <br />
              GET Get message spam score <br />
              GET Get HTML message <br />
              GET Get message source <br />
              GET Get text message <br />
              GET Get raw message <br />
              GET Get message as .eml
            </Text>
            {/* Attchments */}
            <Text>Attchments</Text>
            <Text>
              GET Get attachments
              <br />
              GET Get single attachment
            </Text>
          </Box>
        </Box>
        <Box pt="90px" w="80%">
          <Heading>Mailtrap API</Heading>
          <Text>
            Mailtrap API is based on the REST principles. The following
            documentation covers core resources that are used to manipulate the
            main entities. To start using the Mailtrap API, only a Mailtrap
            account is required. You have to be authenticated and call the
            simple HTTPS request on the URL specified below. Please read these
            basic instructions before you start working with the API.
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default Api;
