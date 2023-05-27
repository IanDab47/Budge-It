// React
import { useState, useEffect } from "react";

// Styles
import "./style.less";

export default function Board() {
  const [balance, setBalance] = useState(0.0);
  const [budgetCategory, setBudgetCategory] = useState("");
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [paymentCategory, setPaymentCategory] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [payment, setPayment] = useState(0);
  const [incomeCategory, setIncomeCategory] = useState("");
  const [incomeDate, setIncomeDate] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [userIncome, setUserIncome] = useState([]);
  const [userBudget, setUserBudget] = useState([]);
  const [userBalance, setUserBalance] = useState(0.0);
  const [userPayments, setUserPayments] = useState([]);

  useEffect(() => {
    console.log(paymentCategory, paymentDate, payment);
  }, [paymentCategory, paymentDate, payment]);

  useEffect(() => {
    userPayments.map((payment) => {
      console.log(payment);
    });
  }, [userPayments]);

  const handleBugdet = (e) => {
    e.preventDefault();

    setUserBudget((prevState) => [
      ...prevState,
      { category: budgetCategory, amount: budgetAmount },
    ]);
  };

  const submitBalance = (amount) => {
    setUserBalance(amount);
  };

  const handlePayments = (e) => {
    e.preventDefault();

    setUserPayments((prevState) => [
      ...prevState,
      { category: paymentCategory, date: paymentDate, amount: payment },
    ]);
  };

  const handleIncome = (e) => {
    e.preventDefault();

    setUserIncome((prevState) => [
      ...prevState,
      { category: incomeCategory, date: incomeDate, amount: incomeAmount },
    ]);
  };

  return (
    <section className="board">
      <div className="prompts">
        <div className="projected">
          <form onSubmit={(e) => handleBugdet(e)}>
            <div>Add category with expected budget</div>

            <div className="user-input category">
              <label>Category Name: </label>
              <input
                type="text"
                onChange={(e) => setBudgetCategory(e.target.value)}
                required
              />
            </div>

            <div className="user-input payment">
              <label>Amount: </label>
              <input
                type="text"
                value={budgetAmount}
                onChange={(e) => setBudgetAmount(e.target.value)}
                required
              />
            </div>

            <button>Add Category</button>
          </form>
        </div>

        <div className="balance">
          <form onSubmit={(e) => e.preventDefault()}>
            <div>Starting balance</div>

            <div className="user-input payment">
              <label htmlFor="balance-payment">Amount: </label>
              <input
                type="text"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                required
              />
            </div>

            <button onClick={() => submitBalance(balance)}>Add Balance</button>
          </form>
        </div>

        <div className="payments">
          <form onSubmit={(e) => handlePayments(e)}>
            <div>Add payment with type and date</div>

            <div className="user-input category">
              <label>Category Name: </label>
              <input
                type="text"
                onChange={(e) => setPaymentCategory(e.target.value)}
                required
              />
            </div>

            <div className="user-input date">
              <label htmlFor="payment-date">Date: </label>
              <input
                id="payment-date"
                type="text"
                onChange={(e) => setPaymentDate(e.target.value)}
                required
              />
            </div>

            <div className="user-input payment">
              <label>Amount: </label>
              <input
                type="text"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                required
              />
            </div>

            <button>Add Payment</button>
          </form>
        </div>

        <div className="income">
          <form onSubmit={(e) => handleIncome(e)}>
            <div>Add income with type and date</div>

            <div className="user-input category">
              <label>Category Name: </label>
              <input
                type="text"
                onChange={(e) => setIncomeCategory(e.target.value)}
                required
              />
            </div>

            <div className="user-input date">
              <label>Date: </label>
              <input
                type="text"
                onChange={(e) => setIncomeDate(e.target.value)}
                required
              />
            </div>

            <div className="user-input payment">
              <label>Amount: </label>
              <input
                type="text"
                value={incomeAmount}
                onChange={(e) => setIncomeAmount(e.target.value)}
                required
              />
            </div>

            <button>Add Income</button>
          </form>
        </div>
      </div>

      <div className="display">
        <h2>Your total balance is: ${userBalance}</h2>

        <div className="budget">
          <h3>Your budget:</h3>
          {userBudget.map((budget, i) => {
            return (
              <ul key={`budget_${i}`}>
                <li>
                  {budget.category} | ${budget.amount}
                </li>
              </ul>
            );
          })}
        </div>

        <div className="payments">
          <h3>Your list of payments:</h3>
          {userPayments.map((payment, i) => {
            return (
              <ul key={`payment_${i}`}>
                <li>
                  {payment.category} | {payment.date} | ${payment.amount}
                </li>
              </ul>
            );
          })}
        </div>

        <div className="income">
          <h3>Your list of income:</h3>
          {userIncome.map((income, i) => {
            return (
              <ul key={`income_${i}`}>
                <li>
                  {income.category} | {income.date} | ${income.amount}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
}
