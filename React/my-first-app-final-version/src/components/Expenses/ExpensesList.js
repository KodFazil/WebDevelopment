import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

    if (props.filteredDataArray.length === 0) {
        return <h2 className="expenses-list__fallback">No content</h2>;
    }
    else {
        return (
            <ul className="expenses-list"> {
            props.filteredDataArray.map( (expense) => (
                <ExpenseItem
                key={expense.id} title={expense.title} 
                amount={expense.amount} date={expense.date} />
            ) ) }
            </ul>
        );
    } 
}

export default ExpensesList;