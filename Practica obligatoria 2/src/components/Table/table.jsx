const Table = ({ netIncomes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Ingresos Netos</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((item, index) => (
          <tr key={index}>
            <td>{item.brand}</td>
            <td>{item.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;