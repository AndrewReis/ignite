import { useQuery } from 'react-query'
import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Tr,
  Th,
  Thead,
  Td,
  Tbody,
  Checkbox,
  Text,
  Spinner
} from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'
import { formatDate } from '../../utils/formatDate'

import { Header } from '../../components/Header/index'
import { Pagination } from '../../components/Pagination/index'
import { SideBar } from '../../components/Sidebar/index'

export default function UserList() {
  const { data, isLoading, error } = useQuery('users-key', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: formatDate(user.createdAt)
      }
    });

    return users
  }, {
    staleTime: 1000 * 5,
  })

  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6' >
        <SideBar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8' >
          <Flex align='center' justify='space-between' mb='8' >
            <Heading size='lg' fontWeight='normal' >Lista de Usuários</Heading>
            <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} />}  >
              Criar novo
            </Button>
          </Flex>

          {
            isLoading
              ? (<Flex justify='center' > <Spinner /> </Flex>)
              :
              error
                ? (<Text>Falha ao obter dados dos usuários.</Text>)
                : (
                  <>
                    <Table colorScheme='whiteAlpha' >
                      <Thead>
                        <Tr px='6' color='gray.300' >
                          <Th> <Checkbox colorScheme='pink' /> </Th>
                          <Th>Usuários</Th>
                          <Th>Data de cadastro</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {
                          data.map(user => (
                            <Tr key={user.id} >
                              <Td px='6' ><Checkbox colorScheme='pink' /></Td>
                              <Td>
                                <Box>
                                  <Text fontWeight='bold'> {user.name} </Text>
                                  <Text fontSize='sm' color='gray.300' > {user.email} </Text>
                                </Box>
                              </Td>
                              <Td> {user.createdAt} </Td>
                            </Tr>
                          ))
                        }
                      </Tbody>
                    </Table>
                    <Pagination />
                  </>
                )
          }
        </Box>
      </Flex>
    </Box>
  )
}
