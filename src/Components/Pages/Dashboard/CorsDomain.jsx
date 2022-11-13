import { Box, Button, HStack, Input, Text, VStack } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import React from 'react'

const CorsDomain = () => {
  return (
    <>
    <Box mt={"50px"} gap={20} spacing={20} ml={1}>
        <VStack display={"block"} textAlign={"left"} >
            <Text fontSize="16px" fontWeight={600} lineHeight={1.21} display="block" color="#1a2e44" fontFamily={"Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif"}>CORS Domains</Text>
            <Text mb="20px" display={"block"} fontSize="14px" color="#1a2e44" fontFamily={"Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif"} >You can specify a list of domains, which will have access to API by CORS.</Text>
            <HStack display={"block"} >
                <Input variant='outline' placeholder='Outline' w={{base:"60%",lg:"30%"}} />
                <Button fontSize={".8125rem"} color="#fff" fontWeight={600} lineHeight={1.15} bgColor="#4c83ee" p="9px 15px" justifyContent={"center"}>Add Domain</Button>
            </HStack>

        </VStack>

        <TableContainer mt={3}>
            <Table variant='simple' w='100%'>
                <TableCaption>You have no CORS Domains</TableCaption>
                <Thead>
                <Tr>
                    <Th>Domain</Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th></Th>
                    <Th>Action</Th>        
                </Tr>
                </Thead>
                <Tbody>
            
                </Tbody>
            
            </Table>
        </TableContainer>

    </Box>


    </>
  )
}

export default CorsDomain