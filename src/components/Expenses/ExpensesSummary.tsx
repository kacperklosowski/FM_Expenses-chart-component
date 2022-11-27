import React from 'react'
import ExpensesSummaryTotal from './ExpensesSummaryTotal';
import ExpensesSummaryGrowth from './ExpensesSummaryGrowth';
import './ExpensesSummary.scss';

const ExpensesSummary = () => {
  return (
    <div className='ExpensesSummary'>
      <ExpensesSummaryTotal />
      <ExpensesSummaryGrowth />
    </div>
  )
}

export default ExpensesSummary