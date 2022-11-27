import React from 'react'
import ExpensesChartBar from './ExpensesChartBar';

import './ExpensesChart.scss';

type Expense = {
  day: string;
  amount: number;
}

interface ExpensesChartProps {
  expenses: Expense[];
}

const ExpensesChart = ({ expenses }: ExpensesChartProps) => {
  console.log("🚀 ~ file: ExpensesChart.tsx ~ line 13 ~ ExpensesChart ~ expenses", expenses)
  return (
    <div className='ExpensesChart'>
      {
        expenses.map(expense => (
          <ExpensesChartBar day={expense.day} amount={expense.amount} />
        ))
      }
    </div>
  )
}

export default ExpensesChart