import { formatToAmericanDollar } from "../../utils/format";
import "./AccountBalance.scss";

interface AccountBalanceProps {
  balance: number;
}

const AccountBalance = ({ balance }: AccountBalanceProps) => (
  <div className="AccountBalance">
    <div className="AccountBalance__data">
      <h3 className="AccountBalance__title">My balance</h3>
      <p className="AccountBalance__amount">{formatToAmericanDollar(balance)}</p>
    </div>
    <div className="AccountBalance__circles">
      <svg viewBox="-240 20 300 60">
        <circle />
        <circle />
      </svg>
    </div>
  </div>
);

export default AccountBalance;
