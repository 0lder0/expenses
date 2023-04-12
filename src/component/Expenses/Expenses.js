import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
    console.log(props);
    return (
        <Card className="expenses">
            {props.expensesData.map((expense) => (
                <ExpenseItem expenseData={expense} key={expense.id} />
            ))}
        </Card>
    );
}

export default Expenses;