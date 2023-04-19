import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const [isEditing, setIsEditing] = React.useState(true);


    const startEditingHandler = () => {
        setIsEditing(!isEditing);
    }

    const stopEditingHandler = () => {
        setIsEditing(!isEditing);
    }


    return (
        <div className="new-expense">
            {isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            { !isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditingHandler={stopEditingHandler}></ExpenseForm>}
        </div>
    )
}
export default NewExpense;