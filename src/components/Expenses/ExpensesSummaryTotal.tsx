import React from 'react'
import { formatToAmericanDollar } from '../../utils/utils';
import './ExpensesSummaryTotal.scss';

const ExpensesSummaryTotal = () => {
  return (
    <div className='ExpensesSummaryTotal'>
      <h3 className='ExpensesSummaryTotal__title'>Total this month</h3>
      <p className="ExpensesSummaryTotal__amount">{formatToAmericanDollar(478.33)}</p>
    </div>
  )
}

export default ExpensesSummaryTotal