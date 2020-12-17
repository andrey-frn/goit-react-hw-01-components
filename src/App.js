import Profile from './components/profile/profile';
import Statistics from './components/statistic/statistic';
import user from './user';
import statisticalData from './statistical-data';
import FriendList from './components/friendlist/friendlist';
import friends from './friends.json';
import transactions from './transactions.json';
import TransactionHistory from './components/transactions/transactionHistory';

export default function App() {
  return (
    <div style={{ width: '400px', margin: '0 auto' }}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
