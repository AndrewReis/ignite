import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack
} from '@chakra-ui/react'
import { Input } from '../../components/form/Input'

import { Header } from '../../components/Header/index'
import { SideBar } from '../../components/Sidebar/index'

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6' >
        <SideBar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8' >
          <Heading size='lg' fontWeight='normal' >Criar usuário</Heading>

          <Divider my='6' borderColor='gray.700' />

          <Stack direction='column' spacing='8' >
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%' >
              <Input name='name' label='Nome Completo' />
              <Input type='email' name='email' label='E-mail' />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing='8' w='100%' >
              <Input type='password' name='password' label='Senha' />
              <Input type='password' name='password_confirmation' label='Confirmação de Senha' />
            </SimpleGrid>
          </Stack>
          <Flex mt='8' justify='flex-end' >
            <Stack direction='row' spacing='4' >
              <Button colorScheme='whiteAlpha' >Cancelar</Button>
              <Button colorScheme='pink' >Salvar</Button>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
