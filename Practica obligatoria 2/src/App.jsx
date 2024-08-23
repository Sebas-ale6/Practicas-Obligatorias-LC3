import Table from './components/Table/table';
import './App.css'

const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  const totalIncome = netIncomes.reduce((acc, curr) => acc + curr.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <Table netIncomes={netIncomes} />
      <p>Ingresos Netos Promedios: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;