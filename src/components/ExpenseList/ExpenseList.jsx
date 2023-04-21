import React from "react";
import removeImg from "../../assets/remove.png";
import { Modal } from "../Modal";
import "./ExpenseList.css";

const ExpenseList = ({ data, id, active, setActive, onDelete }) => {
  const items = data.filter((item) => item.id === id);

  return (
    <Modal active={active} setActive={setActive}>
      <ul className="expense-list" data-id={id}>
        {items.map(({ expense }) =>
          expense.map((item, index) => (
            <li key={index}>
              <div className="expense__item">
                {item.name}: {item.price}$
                <img onClick={() => onDelete(item.id, id)} src={removeImg} alt="remove" />
              </div>
            </li>
          ))
        )}
      </ul>
    </Modal>
  );
};

export { ExpenseList };
