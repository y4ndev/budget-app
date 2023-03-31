import React from "react";
import "./ExpenseList.css";

const ExpenseList = ({ data, id }) => {
  return (
    <ul className="expense-list" data-id={id}>
      {data
        .filter((item) => item.id === id)
        .map((item, index) => {
          return (
            <li key={index}>
              <div>name: {item.name}</div>
              <div>price: {item.price}</div>
            </li>
          );
        })}
    </ul>
  );
};

export { ExpenseList };
