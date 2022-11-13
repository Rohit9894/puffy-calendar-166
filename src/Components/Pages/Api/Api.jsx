import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Img,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import RequestTab from "./Parts/RequestTab";
// import "../Api/Parts/api.css";
import "./api.css";
import { Link } from "react-scroll";
import logo from "../../../Assets/favicon.png";
function Api() {
  return (
    <div>
      <Flex>
        <Box className="rsidebar" display={["none", "block"]}>
          <Flex justifyContent="center">
            {" "}
            <Img h="60px" my="10px" src={logo} alt="logo" />
          </Flex>
          <Box pt="20px">
            <Input placeholder="filter" w="50%" h="30px" />
            <Button
              bg="#5c93fc"
              color="white"
              h="30px"
              ml="10px"
              _hover={{
                background: "#5c93fc",
              }}
            >
              Clear
            </Button>
          </Box>
          <Link to="mailtrap" spy={true} smooth={true} duration={500}>
            <Text mt="20px" color="white">
              Mailtrap API
            </Text>
          </Link>
          <Link to="auth" spy={true} smooth={true} duration={500}>
            {" "}
            <Text my="20px" color="white">
              Authentication
            </Text>
          </Link>

          <hr />
          <Text className="rheading2" color="white">
            Emails
          </Text>
          <Box lineHeight="40px">
            <Text fontWeight="medium" color="#275dde">
              Emails
            </Text>
            <Text fontSize="14px" color="#3e7d9b" ml="10px">
              <Text color="red" display="inline">
                post{" "}
              </Text>
              Send email
            </Text>
            <Text fontWeight="medium" color="#275dde">
              Webhooks
            </Text>
            <Text fontSize="14px" color="#3e7d9b" ml="10px">
              <Text color="red" display="inline">
                POST{" "}
              </Text>
              WEBHOOK Receive events
            </Text>
          </Box>
          {/* sandBox */}
          <hr />
          <Text className="rheading2">SandBox</Text>
          <Box color="#3e7d9b" ml="10px" lineHeight="40px" fontSize="14px">
            <Text className="rheading">Accounts</Text>
            <Text>
              <Text color="#275dde" display="inline">
                Get
              </Text>{" "}
              all accounts
            </Text>
            <Text className="rheading">Accout Users</Text>
            <Text>Get List all users in account</Text>
            <Text>DELETE REmove user form the account</Text>
            <Text className="rheading">Permissions</Text>
            <Text>PUT Manage user or token Permissions</Text>
            <Text>Get Get resources</Text>
            <Text className="rheading">Projects</Text>
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
            <Text my="5px" fontWeight="medium" color="#275dde" fontSize="16px">
              Inboxes
            </Text>
            <Text>
              <span style={{ color: "red" }}>POST</span> Create an inbox
              <br />
              <span style={{ color: "green" }}>Get</span> inbox attributes
              <br />
              <span style={{ color: "red" }}>DELETE</span> Delete an inbox
              <br />
              <span style={{ color: "red" }}>PATCH</span> Update an inbox
              <br />
              <span style={{ color: "red" }}>PATCH</span> Clean inbox
              <br />
              <span style={{ color: "red" }}>PATCH</span> Mark as read
              <br />
              <span style={{ color: "red" }}>PATCH</span> Reset credentials
              <br />
              <span style={{ color: "red" }}>PATCH</span> Enable email address
              <br />
              <span style={{ color: "red" }}>PATCH</span> Reset email address
              <br />
              <span style={{ color: "red" }}>GET</span> Get a list of inboxes
            </Text>
            {/* messages */}
            <Text className="rheading">Messages</Text>
            <Text>
              <span style={{ color: "#275dde" }}>Get</span> Get Show email
              message <br />
              <span style={{ color: "#275dde" }}>Get</span> DELETE Delete
              message <br />
              <span style={{ color: "#275dde" }}>Get</span> PATCH Update message{" "}
              <br />
              messages <br />
              <span style={{ color: "#275dde" }}>Get</span> POST Forward message{" "}
              <br />
              <span style={{ color: "#275dde" }}>Get</span> message spam score{" "}
              <br />
              <span style={{ color: "#275dde" }}>Get</span> HTML message <br />
              <span style={{ color: "#275dde" }}>Get</span> message source{" "}
              <br />
              text message <br />
              <span style={{ color: "#275dde" }}>Get</span> raw message <br />
              message as .eml
            </Text>
            {/* Attchments */}
            <Text className="rheading">Attchments</Text>
            <Text>
              <span style={{ color: "#275dde" }}>Get</span> Get attachments
              <br />
              <span style={{ color: "#275dde" }}>Get</span> Get single
              attachment
            </Text>
          </Box>
        </Box>
        <Box lineHeight="30px" pt="90px" className="rmaindiv">
          <Box name="mailtrap">
            <Heading fontWeight="medium" mb="20px">
              Mailtrap API <sub style={{ fontSize: "16px" }}>v2</sub>
            </Heading>
            <Text>
              Mailtrap API is based on the REST principles. The following
              documentation covers core resources that are used to manipulate
              the main entities. To start using the Mailtrap API, only a
              Mailtrap account is required. You have to be authenticated and
              call the simple HTTPS request on the URL specified below. Please
              read these basic instructions before you start working with the
              API.
            </Text>
            <Text>
              Mailtrap API is based on the REST principles. The following
              documentation covers core resources that are used to manipulate
              the main entities. To start using the Mailtrap API, only a
              Mailtrap account is required. You have to be authenticated and
              call the simple HTTPS request on the URL specified below. Please
              read these basic instructions before you start working with the
              API.
            </Text>
            <UnorderedList mt="25px">
              <a href="https://www.npmjs.com/package/mailtrap">
                {" "}
                <ListItem color="blue.300">
                  <u>NodeJS SDK</u>
                </ListItem>
              </a>
              <a href="https://rubygems.org/gems/mailtrap">
                <ListItem color="blue.300">
                  <u>Ruby SDK</u>
                </ListItem>
              </a>
              <ListItem>PHP [coming soon]</ListItem>
              <ListItem>Python [coming soon]</ListItem>
            </UnorderedList>
            <Text>
              There are several ways to send authenticated HTTP requests:
            </Text>
            <UnorderedList mt="25px">
              <ListItem>
                Send a HTTP header Api-Token: <Code children="{api_token}" />,
                where <Code children="{api_token}" /> is your API token
              </ListItem>
              <ListItem>
                Send a HTTP header Authorization: Bearer{" "}
                <Code children="#{token}" />, where{" "}
                <Code children="{api_token}" /> is your API token (more info:
                Token Access Authentication)
              </ListItem>
            </UnorderedList>
            <Text>
              You can manage your API token on the API Tokens page. API token
              does not have an expiration date, you may reset it manually.
            </Text>
            <Text>Allowed requests and common responses</Text>
            <UnorderedList mt="25px">
              <ListItem>
                <b>POST</b> - to create a resource
              </ListItem>
              <ListItem>
                <b>PATCH</b> - to update a resource
              </ListItem>
              <ListItem>
                <b>PUT</b> - to replace a resource
              </ListItem>
              <ListItem>
                <b>PUT</b> - to get a resource or a list of resources
              </ListItem>
              <ListItem>
                <b>DELETE</b> - to delete a resource
              </ListItem>
            </UnorderedList>
            <Text>Here is the description of common server responses</Text>
            <UnorderedList mt="25px">
              <ListItem>
                <b>200</b> OK - the request was successful (some API calls may
                return 201 instead).
              </ListItem>
              <ListItem>
                <b>204</b> No Content - the request was successful but there is
                no representation to return (i.e. the response is empty).
              </ListItem>
              <ListItem>
                <b>401</b> Unauthorized - authentication failed o r user doesn't
                have permissions for requested operation.
              </ListItem>
              <ListItem>
                <b>403</b> Forbidden - access denied.
              </ListItem>
              <ListItem>
                <b>404</b> Not Found - resource was not found
              </ListItem>
              <ListItem>
                <b>422</b> Unprocessable Entity - requested data contain invalid
                values.
              </ListItem>
            </UnorderedList>
            <Text>All requests must be sent over HTTPS protocol.</Text>
          </Box>
          {/* Authentication*/}
          <Text mt="20px" fontSize="26px" fontWeight="normal">
            Authentication
          </Text>
          <Box name="auth">
            <Text>No API Key applied</Text>
            <Box border="1px solid gray" w={["100%", "max-content"]} p="20px">
              <Text>API Key (Api-Token)</Text>
              <Text>
                Pass the API token in the Api-Token header. Read more about API
                tokens Send Api-Token in header
              </Text>
              <Input w="200px" mr="20px" />
              <Button bg="white" border="1px solid blue">
                SET
              </Button>
            </Box>
          </Box>
          {/* EAMIL API */}
          <Text mt="20px" fontSize="26px" fontWeight="normal">
            EMAIL API
          </Text>
          <Box>
            <Text>Pordution email sending</Text>
            <Text>API server: send api.Mailtrap.io</Text>

            <Text mt="20px" fontSize="26px" fontWeight="thin">
              EMAILS
            </Text>
            <hr />
            <Text>Send email</Text>
            <Text>POST /api/send</Text>
            <Text>REQUEST</Text>
            <Text>REQUEST BODY application/json</Text>
            <RequestTab />
            <Flex>
              <Box>
                <Text>API Server https://send.api.mailtrap.io</Text>
                <Text>Authentication Required (None Applied)</Text>
              </Box>
              <Box>
                <button className="rbutton">Fill Example</button>
                <button className="rbutton">Clear</button>
                <button className="rbutton">Try</button>
              </Box>
              <hr />
            </Flex>
            <Text>Response</Text>
            <Box>
              <button className="rbutton">200</button>
              <button className="rbutton">400</button>
              <button className="rbutton">401</button>
              <button className="rbutton">500</button>
            </Box>

            <Text>Success. Message has been delivered.</Text>
            <RequestTab />
          </Box>
          {/* WEBHOOKS */}
          <Text my="20px" fontSize="26px" fontWeight="thin">
            WEBHOOKS
          </Text>
          <Box name="webhooks">
            <Box borderBottom="2px solid teal"></Box>
            <Text>Receive events</Text>
            <Text>Read more about Webhooks in our Knowledge Base.</Text>
            <Text>Request</Text>
            <Text>
              <strong>REQUEST BODY</strong> application/json
            </Text>
            <Text>Mail events that user is subscribed to</Text>
            <RequestTab />
          </Box>
          <Text my="20px" mt="40px" fontSize="26px" fontWeight="thin">
            SandBOX
          </Text>
          <Box name="sandbox">
            <p>Test emails for staging.</p>
            <p>
              <strong>API Server</strong>:mailtrap.io
            </p>
            <Text my="30px">ACCOUNTS</Text>
            <Box borderBottom="2px solid teal"></Box>
            <Text fontSize="20px">Get all accounts</Text>
            <RequestTab />
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Api;
