import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useInput from "../../hooks/useInput";
import BudgetAdd from "../budget-add/budget-add";
import BudgetList from "../budget-list/budget-list";
import BudgetModal from "../budget-modal/budget-modal";
import ExpenseList from "../expense-list/expense-list";
import ExpenseModal from "../expense-modal/expense-modal";
import Header from "../header/header";
import Modal from "../modal/modal";
import "./App.css";

function App() {
  const [modalBudget, setModalBudget] = useState(false);
  const [modalExpense, setModalExpense] = useState(false);
  const [modalVievExpense, setModalVievExpense] = useState(false);
  const [modalId, setModalId] = useState("");
  const [budgetName, bindBudgetName, resetBudgetName] = useInput("");
  const [budgetSum, bindBudgetSum, resetBudgetSum] = useInput("");
  const [expenseSum, bindExpenseSum, resetExpenseSum] = useInput("");
  const [expenseName, bindExpenseName, resetExpenseName] = useInput("");
  const [data, setData] = useState([
    { name: "Food", minSum: 0, maxSum: 100, currentSum: 50, id: uuidv4() },
    { name: "Study", minSum: 0, maxSum: 500, currentSum: 100, id: uuidv4() },
    { name: "Home", minSum: 0, maxSum: 300, currentSum: 220, id: uuidv4() },
    { name: "Travel", minSum: 0, maxSum: 150, currentSum: 70, id: uuidv4() },
  ]);
  const [expense, setExpense] = useState([]);

  const addModalId = (item) => {
    setModalId(item);
    setModalExpense(true);
  };

  const addView = (item) => {
    setModalId(item);
    setModalVievExpense(true);
  };

  const addExpense = (id, index) => {
    const arr = data;

    setData(arr);
    setExpense((prevExpense) => {
      return [...prevExpense, { name: expenseName, price: expenseSum, id: modalId }];
    });
    setModalExpense(false);
    resetExpenseName();
    resetExpenseSum();
  };

  const addBudget = () => {
    const newItem = {
      name: budgetName,
      minSum: 0,
      maxSum: budgetSum,
      currentSum: 0,
      id: uuidv4(),
    };

    if (budgetName && budgetSum !== "") {
      setData([...data, newItem]);
      setModalBudget(false);
      resetBudgetName();
      resetBudgetSum();
    } else {
      alert("please, fill in the fields to add");
    }
  };

  return (
    <div className="App">
      <Header />
      <BudgetAdd setActive={setModalBudget} />
      <BudgetList data={data} setActive={addModalId} setViev={addView} />
      <Modal active={modalBudget} setActive={setModalBudget}>
        <BudgetModal
          onItemAdd={addBudget}
          onBudgetName={bindBudgetName}
          onBudgetSum={bindBudgetSum}
        />
      </Modal>
      <Modal active={modalExpense} setActive={setModalExpense}>
        <ExpenseModal
          id={modalId}
          onExpenseSum={bindExpenseSum}
          onExpenseName={bindExpenseName}
          onItemAdd={addExpense}
          name={data}
        />
      </Modal>
      <Modal active={modalVievExpense} setActive={setModalVievExpense}>
        <ExpenseList data={expense} id={modalId} />
      </Modal>
    </div>
  );
}

export default App;
