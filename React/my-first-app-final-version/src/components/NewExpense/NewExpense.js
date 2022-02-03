import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (expenseEnteredData) => {
        const expenseData = {
            ...expenseEnteredData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        // olanları expenseformdan alıp burdan da app.js e yollamak için gereken kod
        props.onAddExpenseData(expenseData);
        stopFormHandler();
    }

    const [isEditing, setEditing] = useState(false);
    const startFormHandler = () => {
        setEditing(true);
    }

    const stopFormHandler = () => {
        setEditing(false);
    }
 
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startFormHandler} >Add Expense</button>}
            {isEditing && 
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopFormHandler} />}
        </div>
    );

};

export default NewExpense;