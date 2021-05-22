import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { Search } from './Search';
import { Notifications } from './Notifications';
import { Profile } from './Profile';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarContext } from '../../contexts/SideBarContext';

export function Header() {
  const { onOpen } = useSidebarContext();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1400}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >

      {!isWideVersion && (
        <IconButton
          aria-label='Abrir menu'
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
          icon={<Icon as={RiMenuLine} />}
        >

        </IconButton>
      )}

      <Logo />
      { isWideVersion && <Search />}
      <Flex align='center' ml='auto'>
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
