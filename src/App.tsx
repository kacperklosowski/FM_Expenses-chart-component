import { useState } from "react";

import AccountBalance from "./components/AccountBalance/AccountBalance";
import "./App.scss";

const App = () => {
  const [balance, setBalance] = useState(921.48);

  return (
    <div className="app-container">
      <AccountBalance balance={balance} />
    </div>
  );
};

export default App;
