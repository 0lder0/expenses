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


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>

            {
                props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear).map(filteredExpense => {
                    return <ExpenseItem
                        id={filteredExpense.id}
                        title={filteredExpense.title}
                        amount={filteredExpense.amount}
                        date={filteredExpense.date}></ExpenseItem>
                })
            }

        </Card>
    );
}

export default Expenses;