import React, {useState} from 'react'
import ExpensesChart from './ExpensesChart';
import ExpensesSummary from './ExpensesSummary';
import './Expenses.scss';

type Expense = {
  day: string;
  amount: number;
}

interface ExpensesProps {
  expenses: Expense[];
  monthlyExpenses: number;
  expensesGrowth: number;
}
const Expenses = ({ expenses, monthlyExpenses, expensesGrowth }: ExpensesProps) => {
  return (
    <div className='Expenses'>
      <h1 className='Expenses__title'>Spending - Last 7 days</h1>
      <ExpensesChart expenses={expenses}/>
      <ExpensesSummary />
    </div>
  )
}

export default Expenses