import React from "react";
import { BudgetListItem } from "../BudgetListItem";
import "./BudgetList.css";

const BudgetList = ({ data, setActive, setView, onDelete }) => {
  return (
    <div className="budget">
      <div className="budget__inner">
        {data.map((item) => {
          return (
            <BudgetListItem
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
