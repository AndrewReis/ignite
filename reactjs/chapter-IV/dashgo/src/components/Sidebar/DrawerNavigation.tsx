import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';

import { useSidebarContext } from '../../contexts/SideBarContext';
import { Navigation } from './Navigation';

export function DrawerNavigation() {
  const { isOpen, onClose } = useSidebarContext();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement='left'  >
      <DrawerOverlay>
        <DrawerContent bg='gray.800' p='4' >
          <DrawerCloseButton mt='6' />
          <DrawerHeader>Navegação</DrawerHeader>

          <DrawerBody>
            <Navigation />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
