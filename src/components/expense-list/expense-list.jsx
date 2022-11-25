import "./expense-list.css";

const ExpenseList = ({ data, id }) => {
  return (
    <ul className="expense-list" data-id={id}>
      {data
        .filter((item) => item.id === id)
        .map((item, index) => {
          return (
            <li key={index}>
              name: {item.name} price: {item.price}
            </li>
          );
        })}
    </ul>
  );
};

export default ExpenseList;
