import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";



function Expenses(props) {

    const ExpenseFilterHandler = (selectedYear) => {
        console.log(selectedYear);
    }


    return (
        <Card className="expenses">
            <ExpensesFilter onExpenseFilter={ExpenseFilterHandler}></ExpensesFilter>
            <ExpenseItem expenseData={props.expenses[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenses[1]}></ExpenseItem>
            ))}
        </Card>
    );
}

export default Expenses;