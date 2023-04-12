import logo from './logo.svg';
import './App.css';

import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";



const App = () => {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title: "New book",
            price: 30.99
        },
        {
            date: new Date(2023, 0, 10),
            title: "New jeans",
            price: 99.99
        }
    ];

  return (
      <div className="App">
            <NewExpense></NewExpense>
          <Expenses expensesData={expenses}></Expenses>
      </div>
  );
}

export default App;
