import { Stack } from "@chakra-ui/react";
import { RiDashboardFill, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Navigation() {
  return (
    <Stack spacing='12' align='flex-start' >
      <NavSection title='GERAL' >
        <NavLink icon={RiDashboardFill} >Dashboard</NavLink>
        <NavLink icon={RiContactsLine} >Usuários</NavLink>
      </NavSection>
      <NavSection title='AUTOMAÇÃO' >
        <NavLink icon={RiInputMethodLine} >Formulários</NavLink>
        <NavLink icon={RiGitMergeLine} >Automação</NavLink>
      </NavSection>
    </Stack>
  )
}
