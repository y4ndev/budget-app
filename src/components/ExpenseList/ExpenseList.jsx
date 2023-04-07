import React from "react";
import { Modal } from "../Modal";
import "./ExpenseList.css";

const ExpenseList = ({ data, id, active, setActive }) => {
  return (
    <Modal active={active} setActive={setActive}>
      <ul className="expense-list" data-id={id}>
        {data
          .filter((item) => item.id === id)
          .map((item, index) => {
            return (
              <li key={index}>
                <div>
                  {item.name}: {item.price}$
                </div>
              </li>
            );
          })}
      </ul>
    </Modal>
  );
};

export { ExpenseList };
