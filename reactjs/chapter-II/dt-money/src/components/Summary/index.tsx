import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/expense.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles'
import { useTransactions } from '../../hooks/TransactionsContext'

export function Summary() {

  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  const formatSummaryWithIntl = {
    deposits: new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(summary.deposits),
    withdraws: new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(summary.withdraws),
    total: new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(summary.total),
  }

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>{formatSummaryWithIntl.deposits}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saídas" />
        </header>
        <strong>- {formatSummaryWithIntl.withdraws}</strong>
      </div>

      <div className="total" >
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatSummaryWithIntl.total}</strong>
      </div>
    </Container>
  )
}
