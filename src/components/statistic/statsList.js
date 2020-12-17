function StatsList(stats) {
  return (
    <ul>
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  );
}

export default StatsList;
