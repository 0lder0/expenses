import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const Dummy_expenses = [
    {
        id: "e1",
        date: new Date(2024, 0, 10),
        title: "New book",
        amount: 30.99
    },
    {
        id: "e2",
        date: new Date(2023, 0, 10),
        title: "New jeans",
        amount: 99.99
    },
    {
        id: "e3",
        date: new Date(2025, 0, 10),
        title: "New shoes",
        amount: 30.99
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
          <Expenses expenses={expenses}></Expenses>
      </div>
  );
}

export default App;
