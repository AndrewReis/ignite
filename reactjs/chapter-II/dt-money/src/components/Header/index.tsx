
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
  OpenNewTransactionModal(): void;
}

export function Header({ OpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type="button" onClick={OpenNewTransactionModal} >
          Nova transação
        </button>



      </Content>
    </Container>
  )
}
