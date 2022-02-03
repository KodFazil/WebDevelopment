import './ExpenseItem.css';
import ExpenseDateItem from './ExpenseDateItem';
import Card from '../UI/Card';
//import { useState } from 'react';

function ExpenseItem(props) {

    return (
    <li>
        <Card className="expense-item">
            <ExpenseDateItem date={props.date}></ExpenseDateItem>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">{props.amount}</div>
        </Card>
    </li>
    );
}

export default ExpenseItem;

/* Props geldikten sonra bu şekilde yapmaya gerek yok
    const expenseDate = new Date(2022, 1, 1);
    const expenseTitle = "Kıyafet";
    const expenseAmount = 120;
*/

/* Artık gerek yok kullanımı görmek içindi 
    const [title, setTitle] = useState(props.title);
    
    const changeTitleHandler = () => {
        setTitle("Updated");
    }

    <button onClick={changeTitleHandler}>change title</button>
*/