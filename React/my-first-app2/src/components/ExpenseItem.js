import './ExpenseItem.css';

function ExpenseItem(props) {
    /* Props geldikten sonra bu şekilde yapmaya gerek yok
    const expenseDate = new Date(2022, 1, 1);
    const expenseTitle = "Kıyafet";
    const expenseAmount = 120;
    */
    return (
    <div className="expense-item">
        <div>{props.date.toDateString()}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">{props.amount}</div>
    </div>
    );
}

export default ExpenseItem;