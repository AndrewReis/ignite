import { createContext, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

interface SidebarProps {
  children: ReactNode;
}

type SidebarContextProps = UseDisclosureReturn;

const SidebarContext = createContext({} as SidebarContextProps);

export function SidebarProvider({ children }: SidebarProps) {
  const { asPath } = useRouter();
  const disclosure = useDisclosure();


  useEffect(() => {
    disclosure.onClose();
  }, [asPath])

  return (
    <SidebarContext.Provider value={disclosure} >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => useContext(SidebarContext);
