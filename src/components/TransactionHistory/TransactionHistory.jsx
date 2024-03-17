import css from './TransactionHistory.module.css';


const TransactionHistoryItem = ({type, amount, currency}) => {
    return (
        
    <tr className={css.tableItem}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
    </tr>

    )
}
const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
  <thead>
    <tr className={css.tableHead}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            <tbody>
                {items.map((item) => (
                    <TransactionHistoryItem
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                ))}
    </tbody>
</table>
    )
}

export default TransactionHistory;