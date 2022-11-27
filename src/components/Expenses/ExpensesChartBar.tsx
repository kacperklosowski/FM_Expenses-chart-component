import React, {useState} from 'react';
import { formatToAmericanDollar, getDayOfTheWeek } from '../../utils/utils';
import './ExpensesChartBar.scss';

interface ExpensesChartBarProps {
  day: string;
  amount: number;
}

const ExpensesChartBar = ({ day, amount }: ExpensesChartBarProps) => {
  const [showAmount, setShowAmount] = useState(false);
  const isCurrentDayBar = (day: string) => {
    const d = new Date();
    const currentDay = getDayOfTheWeek(d.getDay());
    return day === currentDay;
  }

  return (
    <div className='ExpensesChartBar'>
      {
        showAmount && (
          <div className='ExpensesChartBar__amount'>
            {formatToAmericanDollar(amount)}
          </div>
        )
      }
      <div
        className={['ExpensesChartBar__bar', isCurrentDayBar(day) ? 'ExpensesChartBar__bar--current' : ' '].join(' ')}
        onMouseEnter={() => setShowAmount(true)}
        onMouseLeave={() => setShowAmount(false)}
      />
      <p className='ExpensesChartBar__label'>{day}</p>
    </div>
  )
}

export default ExpensesChartBar