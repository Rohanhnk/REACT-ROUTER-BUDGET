import { formatCurrency, formatDateToLocaleString } from "../helpers";
const ExpenseItem = ({ expense }) => {
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{expense.createdAt}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
    </>
  );
};
export default ExpenseItem;
