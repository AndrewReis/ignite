import { Flex, Text, Avatar, Box } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center' >
      {
        showProfileData && (
          <Box mr='4' textAlign='right' >
            <Text>Andrew Reis</Text>
            <Text color='gray.300' fontSize='small' >andrew-reiis@outlook.com</Text>
          </Box>
        )
      }
      <Avatar size='md' name='Andrew Reis' src='https://github.com/AndrewReis.png' />
    </Flex>

  )
}
