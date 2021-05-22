import { Stack, Box, } from '@chakra-ui/react';
import { Button } from './Button';

export function Pagination() {
  return (
    <Stack direction='row' spacing='6' mt='8' justify='space-between' align='center' >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction='row' spacing='2' >
        <Button page={1} isCurrency />
        <Button page={2} />
        <Button page={3} />
        <Button page={4} />
        <Button page={5} />
        <Button page={6} />
      </Stack>
    </Stack>
  )
}
