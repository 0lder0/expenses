import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseDate  from "./ExpenseDate";

function Expenses(props) {
    console.log(props);
    return (
        <div className="expenses">
            {props.expensesData.map((expense) => (
                <ExpenseItem expenseData={expense} key={expense.id} />
            ))}
        </div>
    );
}

export default Expenses;