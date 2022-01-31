import './ExpenseItem.css';
import ExpenseDateItem from './ExpenseDateItem';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    
    const changeTitleHandler = () => {
        setTitle("Updated");
    }

    return (
    <Card className="expense-item">
        <ExpenseDateItem date={props.date}></ExpenseDateItem>
        <div className="expense-item__description">
            <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={changeTitleHandler}>change title</button>
    </Card>
    );
}

export default ExpenseItem;

/* Props geldikten sonra bu şekilde yapmaya gerek yok
    const expenseDate = new Date(2022, 1, 1);
    const expenseTitle = "Kıyafet";
    const expenseAmount = 120;
*/