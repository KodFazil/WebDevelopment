//import logo from '../src/Gelenler/logo.svg';
import { useState } from 'react';
import './App.css';
//import Giris from './components/Giris';
//import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const initial_expenses = [
  { id:"e1", title: "Kıyafet1", amount: 100, date: new Date(2022, 1, 1) },
  { id:"e2", title: "Kıyafet2", amount: 120, date: new Date(2022, 1, 2) },
  { id:"e3", title: "Kıyafet3", amount: 150, date: new Date(2022, 1, 3) },
  { id:"e4", title: "Kıyafet4", amount: 200, date: new Date(2022, 1, 4) }
];

function App() {

  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseDataHandler = (expenseData) => { // <- new expense <- expense form 
    //console.log(expenseData);
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;

/* Expenses dan önceki hal
   <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount}></ExpenseItem>
*/

/* Başta hazır gelen ilk eklemeler ile
<div className="App">
      <header className="App-header">
        {/* <Giris></Giris> ilk baştaki deneme ve bu da jsx comment şekli *//*}
        <ExpenseItem></ExpenseItem>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/