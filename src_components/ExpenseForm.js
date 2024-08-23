import React, { useState } from 'react';

function ExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div>
        <label>Amount</label>
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)} 
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
