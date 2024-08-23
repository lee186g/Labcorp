import React from 'react';

function Receipt({ title, amount }) {
  return (
    <div className="receipt">
      <h2>{title}</h2>
      <p>Amount: ${amount}</p>
    </div>
  );
}

export default Receipt;
