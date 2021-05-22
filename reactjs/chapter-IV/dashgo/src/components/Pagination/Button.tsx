import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  isCurrency?: boolean;
  page: number;
}

export function Button({ isCurrency, page }: ButtonProps) {
  if (isCurrency) {
    return (
      <ChakraButton
        size='sm'
        fontSize='xs'
        w='4'
        colorScheme='pink'
        disabled
        _disabled={{ bg: 'pink.500', cursor: 'default' }}
      >
        {page}
      </ChakraButton>
    );
  }
  return (
    <ChakraButton size='sm' fontSize='xs' w='4' bg='gray.700' _hover={{ bg: 'gray.500' }}>
      {page}
    </ChakraButton>
  );
}
