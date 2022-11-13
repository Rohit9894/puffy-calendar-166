import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Flex, Icon, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IoMdPersonAdd} from 'react-icons/io'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const APITokens = () => {
  return (
    <>
    <Box mt="50px">
        <Flex w="100%"  >
            <Box p='4'  fontSize="1.375rem" fontWeight={600} lineHeight={1.21} display="block" color="#1a2e44" fontFamily={"Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif"} >
                API Tokens
            </Box>
            <Spacer />
            <Box p='4' mr={{base:'0',lg:'5'}} fontWeight={700} display="block" color="#1a2e44" fontFamily={"Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif"} >
                Total tokens: 0
            </Box>
        </Flex>
        <VStack textAlign={"flex-end"} ml={{base:'62%',md:'82%',lg:"86%"}}>
            <Button><Icon as={IoMdPersonAdd} /><Text mr={"2%"} fontSize=".75rem" lineHeight={1.3} pl="10px" pr="15px" >Add Token</Text></Button>

        </VStack>

        <TableContainer>
            <Table variant='simple' mt={5} w="100%">
                <TableCaption>You haven't created any API Tokens yet</TableCaption>
                <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Created By</Th>
                    <Th>Access</Th>
                    <Th>Token</Th>
                    
                </Tr>
                </Thead>
                <Tbody>
                    
                
                </Tbody>
            
            </Table>
        </TableContainer>

        <Alert
        status='info'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='150px'
        mt='5%'
       
        
        >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
            API tokens work with Sandbox API v2. Please
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
            check the documentation
        </AlertDescription>
        </Alert>
                

    </Box>
        



    </>
  )
}

export default APITokens