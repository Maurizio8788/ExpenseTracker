import React from 'react'
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.trunc(Math.random().toString(10) * 10)
        }

        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
          <ExpenseForm onSafeExpenseData={saveExpenseDataHandler} />
        </div>
    )
}
