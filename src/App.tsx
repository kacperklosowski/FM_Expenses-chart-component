import { useState } from "react";

import AccountBalance from "./components/AccountBalance/AccountBalance";
import Expenses from "./components/Expenses/Expenses";

import data from './assets/data.json';

console.log(data);
import "./App.scss";

const App = () => {
  const [balance] = useState(921.48);
  const [monthlyExpenses] = useState(478.33);
  const [expensesGrowth] = useState(2.4);
  return (
    <div className="App">
      <AccountBalance balance={balance} />
      <Expenses
        expenses={data}
        monthlyExpenses={monthlyExpenses}
        expensesGrowth={expensesGrowth}
      />
    </div>
  );
};

export default App;
