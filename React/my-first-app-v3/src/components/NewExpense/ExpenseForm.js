import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const titleChangeHandler = (event) => {
        //console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }

    const [enteredAmount, setEnteredAmount] = useState("");
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }

    const [enteredDate, setEnteredDate] = useState("");
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }    

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        
        console.log(enteredData);
        props.onSaveExpenseData(enteredData);
        setEnteredTitle(""); // inputların içlerini boş hale getir
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}
                    value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-30" onChange={dateChangeHandler} 
                    value={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add</button>
            </div>
        </form>
    );

};

export default ExpenseForm;

    /* tekte state kullanılacaksa
    const [enteredInput, setEnteredInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });

    const titleChangeHandler = (event) => {
        setEnteredInput({
            ...enteredInput, // spread operatörü diğer elemanlar kaybolmayıp değerleri ile kalsın die
            enteredTitle: event.target.value,
        });
    }

    const amountChangeHandler = (e) => {
        // setEnteredInput({
        //     ...enteredInput,
        //     enteredAmount: e.target.value,
        // });  bu yöntemde önceki bilgilerin doğru geleceği garanti değilmiş
        // alttaki yöntem daha garanti yöntemmiş
        setEnteredInput((prevState) => {
            return { ...prevState, enteredAmount: e.target.value };
        });
    }

    const dateChangeHandler = (event) => {
        setEnteredInput({
           ...enteredInput,
           enteredDate: event.target.value, 
        });
    }
    */