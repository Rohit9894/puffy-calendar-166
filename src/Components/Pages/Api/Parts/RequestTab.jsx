import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import MarkdownPreview from "@uiw/react-markdown-preview";
const source = `## MarkdownPreview {
    "to": [
      {
        "email": "john_doe@example.com",
        "name": "John Doe"
      }
    ],
    "cc": [
      {
        "email": "jane_doe@example.com",
        "name": "Jane Doe"
      }
    ],
    "bcc": [
      {
        "email": "james_doe@example.com",
        "name": "Jim Doe"
      }
    ],
    "from": {
      "email": "sales@example.com",
      "name": "Example Sales Team"
    },
    "subject": "Your Example Order Confirmation",
    "html": "
  Congratulations on your order no. 1234.
  "category": "cake",
    "custom_variables": {
      "variable1": "value1",
      "variable2": "value2"
    },
    "headers": {
      "header1": "value1"
    }
  }`;
const src2 = `
  ## MarkdownPreview
  <pre style="fontSize=10px">
{
from*: {
email: string
name: string
}
to*: [{
Min Items: 1 Max Items: 1000

email: string
name: string
}]
cc: [{
Max Items: 1000

email: string
name: string
}]
bcc: [{
An array of recipients who will receive a blind carbon copy of your email. Each object in this array must contain the recipient's email address. Each object in the array may optionally contain the recipient's name.
Max Items: 1000

email: string
name: string
}]
subject*: string
The global or 'message level' subject of your email. This may be overridden by subject lines set in personalizations.Constraints: Min 1 chars
text*: string
Text version of the body of the email. Can be used along with html to create a fallback for non-html clients. Required in the absence of html.Constraints: Min 1 chars
html*: string
HTML version of the body of the email. Can be used along with text to create a fallback for non-html clients. Required in the absence of text.Constraints: Min 1 chars
attachments: [{
An array of objects where you can specify any attachments you want to include.

content*: string
The Base64 encoded content of the attachment.Constraints: Min 1 chars
type: string
The MIME type of the content you are attaching (e.g., “text/plain” or “text/html”).Constraints: Min 1 chars
filename*: string
The attachment's filename.

disposition: enum
The attachment's content-disposition, specifying how you would like the attachment to be displayed. For example, “inline” results in the attached file are displayed automatically within the message while “attachment” results in the attached file require some action to be taken before it is displayed, such as opening or downloading the file.Default: attachment Allowed: inline┃attachment
content_id: string
The attachment's content ID. This is used when the disposition is set to “inline” and the attachment is an image, allowing the file to be displayed within the body of your email.

}]
headers: {
An object containing key/value pairs of header names and the value to substitute for them. The key/value pairs must be strings. You must ensure these are properly encoded if they contain unicode characters. These headers cannot be one of the reserved headers.

<any-key>: string
}
category: string
Constraints: Max 255 chars
custom_variables: {
Values that are specific to the entire send that will be carried along with the email and its activity data. Total size of custom variables in JSON form must not exceed 1000 bytes.

<any-key>: string
}}
</pre>
`;
function RequestTab() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Example</Tab>
          <Tab>Schema</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <MarkdownPreview source={source} />
          </TabPanel>
          <TabPanel>
            <MarkdownPreview source={src2} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default RequestTab;
