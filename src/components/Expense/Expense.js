import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const  Expense = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022")
  const onExpenseFilter = (enteredExpenseFilter) => {
    setSelectedYear(enteredExpenseFilter);
  }

  const filteredItems = props.items.filter( exp => exp.date.getFullYear().toString()===selectedYear);
  
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          year={selectedYear}
          onFilter={onExpenseFilter}
        />
        <ExpensesChart
          expenses={filteredItems}
        />
        <ExpensesList
          items={filteredItems}
        />
      </Card>
    </li>)
}
export default Expense;