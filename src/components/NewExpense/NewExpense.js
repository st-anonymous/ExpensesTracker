import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';

const NewExpense = (props) => {
    const [currentState, newState] = useState("false")
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddingExpense(expenseData);
        newState("false")
    }
    const cancelHandler = () =>{
        newState("false")
    }
    const addNewExpenseHandler = () => {
        newState("true")
    }

    if(currentState === "true") return <div className="new-expense">
        <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={cancelHandler}
        />
    </div>
    return <div className="new-expense">
        <button onClick={addNewExpenseHandler} >Add New Expense</button>
    </div>
}
export default NewExpense;