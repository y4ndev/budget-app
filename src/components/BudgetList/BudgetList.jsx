import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BudgetListItem } from "../BudgetListItem";
import "./BudgetList.css";

const BudgetList = ({ data, setActive, setView, onDelete }) => {
  return (
    <div className="budget">
      <div className="budget__inner">
        {data.map((item) => {
          return (
            <BudgetListItem
              key={uuidv4()}
              {...item}
              setActive={setActive}
              setView={setView}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export { BudgetList };
