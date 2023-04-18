import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import expenses from "./Expenses";

const ExpensesList = (props) => {
    if (props.filteredExpenses.length === 0) {
        return <p className="expenses-list__fallback">Found no expenses.</p>
    }


        return (
            <ul className="expenses-list">
                {
                    props.filteredExpenses.map(expense => {
                        return <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}></ExpenseItem>
                    })
                }
            </ul>
        )
    }

export default ExpensesList;