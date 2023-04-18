import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const Dummy_expenses = [
    {
        date: new Date(2023, 0, 10),
        title: "New book",
        price: 30.99
    },
    {
        date: new Date(2023, 0, 10),
        title: "New jeans",
        price: 99.99
    },
    {
        date: new Date(2023, 0, 10),
        title: "New shoes",
        price: 30.99
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(Dummy_expenses);

    const addExpenseHandler = (expense) => {
        console.log("In App.js");
        setExpenses((previousExpenses ) => {
            return [expense, ...previousExpenses]
        })
    }

  return (
      <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
          <Expenses expenses={Dummy_expenses}></Expenses>
      </div>
  );
}

export default App;
