import { Box, useBreakpointValue } from "@chakra-ui/react";

import { Navigation } from "./Navigation";
import { DrawerNavigation } from "./DrawerNavigation";

export function SideBar() {
  const isDrawer = useBreakpointValue({
    base: true,
    lg: false
  });


  if (isDrawer) {
    return (
      <DrawerNavigation />
    )
  }

  return (
    <Box as='aside' w='64' mr='8' >
      <Navigation />
    </Box>
  )
}
