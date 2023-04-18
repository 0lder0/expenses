import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import expensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";



function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2023");
    console.log("Year data in Expenses.js: " + filteredYear);

    const filterChangeHandler = (Year) => {
        console.log("Filter change handler in Expenses.js: ");
        console.log(Year + " in Expenses.js");
        setFilteredYear(Year);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
        </Card>
    );
}

export default Expenses;