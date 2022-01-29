import logo from './logo.svg';
import './App.css';
//import Giris from './components/Giris';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { id:"e1", title: "Kıyafet1", amount: 100, date: new Date(2022, 1, 1) },
    { id:"e2", title: "Kıyafet2", amount: 120, date: new Date(2022, 1, 2) },
    { id:"e3", title: "Kıyafet3", amount: 150, date: new Date(2022, 1, 3) },
    { id:"e4", title: "Kıyafet4", amount: 200, date: new Date(2022, 1, 4) }
  ];

  return (
    <div>
      <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount}></ExpenseItem>
    </div>
  );
}

export default App;

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