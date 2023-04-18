import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import expensesFilter from "./ExpensesFilter";



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

    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense =>
        {
            return <ExpenseItem
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}></ExpenseItem>
        })
    }


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            {expensesContent}
        </Card>
    );
}

export default Expenses;