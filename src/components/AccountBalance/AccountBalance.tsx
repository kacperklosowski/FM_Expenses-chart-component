import { formatToAmericanDollar } from "../../utils/format";
import "./AccountBalance.scss";

interface AccountBalanceProps {
  balance: number;
}

const AccountBalance = ({ balance }: AccountBalanceProps) => (
  <div className="account-balance__wrapper">
    <div className="account-balance__data">
      <h3 className="account-balance__title">My balance</h3>
      <p className="account-balance__amount">{formatToAmericanDollar(balance)}</p>
    </div>
    <div className="account-balance__circles">
      <svg viewBox="-240 20 300 60">
        <circle />
        <circle />
      </svg>
    </div>
  </div>
);

export default AccountBalance;
