import Head from 'next/head';
import { Flex, FormLabel, Button, Stack, FormControl } from '@chakra-ui/react';

//Components
import { Input } from '../components/form/Input';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>SignIn | Dashgo</title>
      </Head>

      <Flex
        as="main"
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
      >
        <Flex
          as='form'
          width="100%"
          maxW={360}
          p="8"
          borderRadius={8}
          bg="gray.800"
          flexDir="column"
        >
          <Stack spacing="4" >
            <Input
              name="email"
              id="email"
              label="E-mail"
            />
            <Input
              name="password"
              id="password"
              label="Senha"
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size='lg'
          >
            Entrar
          </Button>

        </Flex>
      </Flex>
    </>
  )
}
