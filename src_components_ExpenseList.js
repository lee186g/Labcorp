import React from 'react';

function ExpenseList() {
  // Example list of expenses
  const expenses = [
    { id: 1, title: 'Groceries', amount: 50 },
    { id: 2, title: 'Rent', amount: 1000 },
  ];

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.title}: ${expense.amount}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
