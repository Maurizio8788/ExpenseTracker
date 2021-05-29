import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filteredYear, setfilteredYear] = useState('2020');

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); 

  const filterChangeHandler = (selectedYear) => {
      setfilteredYear(selectedYear);
      props.onFilterExpenses(selectedYear);
  }

 

  return (
    <div>
    <Card className="expenses">
       <ExpensesFilter selected={filteredYear} onFilter={filterChangeHandler} />
       <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;
