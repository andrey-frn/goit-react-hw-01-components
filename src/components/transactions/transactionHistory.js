import PropTypes from 'prop-types';
import s from './transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactioHistory}>
      <thead className={s.headline}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {items.map(item => (
          <tr className={s.line} key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequried,
      amount: PropTypes.number.isRequried,
      type: PropTypes.string.isRequried,
      currency: PropTypes.string.isRequried,
    }),
  ),
};
