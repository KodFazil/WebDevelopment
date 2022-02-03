import "./ExpenseDateItem.css";

function ExpenseDateItem(props) {

    const day = props.date.toLocaleString("tr-TR", {day: "2-digit"});
    const month = props.date.toLocaleString("tr-TR", {month: "long"});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );

}

export default ExpenseDateItem;