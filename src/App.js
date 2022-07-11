import { useState } from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseDataHandler = (expenseData) => {
    setExpenses(prevExpenses => {
      return [expenseData, ...prevExpenses]})
  }

  return (
    <div>
      <NewExpense
        onAddingExpense={addExpenseDataHandler}
      />
      <Expense
        items={expenses}
      />
    </div>
  );
}


const DUMMY_EXPENSES = [
  {
    title: "Gaming Laptop",
    amount: "2000",
    date: new Date(2022, 4, 23),
    id: Math.random().toString()
  },
  {
    title: "Hayabusa",
    amount: "50000",
    date: new Date(2021, 5, 10),
    id: Math.random().toString()
  },
  {
    title: "Lamborghini",
    amount: "250000",
    date: new Date(2019, 6, 13),
    id: Math.random().toString()
  },
  {
    title: "Trip To Miami",
    amount: "27000",
    date: new Date(2022, 2, 10),
    id: Math.random().toString()
  },
  {
    title: "Donation",
    amount: "30000",
    date: new Date(2021, 4, 23),
    id: Math.random().toString()
  },
  {
    title: "House",
    amount: "750000",
    date: new Date(2019, 9, 3),
    id: Math.random().toString()
  },
  {
    title: "MacBook",
    amount: "7000",
    date: new Date(2022, 0, 7),
    id: Math.random().toString()
  },
  {
    title: "iPhone",
    amount: "5000",
    date: new Date(2021, 11, 24),
    id: Math.random().toString()
  },
  {
    title: "iWatch",
    amount: "250",
    date: new Date(2019, 4, 23),
    id: Math.random().toString()
  },
];

export default App;