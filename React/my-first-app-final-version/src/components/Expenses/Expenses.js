import "./Expenses.css";
//import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [selected, setSelected] = useState("2021");
    const addFilterHandler = (selectedData) => {
        setSelected(selectedData);
    }

    const filteredExpenseData = props.expenses.filter( (expense) => {
        return expense.date.getFullYear() === parseInt(selected);
    });

    return (
         <Card className="expenses">
            <ExpensesFilter selectedFilter={selected} onFilterChange={addFilterHandler} />
            <ExpensesChart expenses={filteredExpenseData} />
            <ExpensesList filteredDataArray={filteredExpenseData}></ExpensesList>
        </Card>
    );

}

export default Expenses;

/* map kullanımından önce
    <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount}/>
    <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount}/>
    <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount}/>
    <ExpenseItem title={props.expenses[3].title} date={props.expenses[3].date} amount={props.expenses[3].amount}/>
*/