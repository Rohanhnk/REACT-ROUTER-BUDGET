/* eslint-disable react-refresh/only-export-components */

import { useLoaderData } from "react-router-dom";

import { deleteItem, fetchData } from "../helpers";
import { toast } from "react-toastify";
import Table from "../components/Table";

export async function expensesLoader() {
  const expenses = await fetchData("expenses");
  return { expenses };
}

export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });

      return toast.success("Expense deleted!");
    } catch {
      throw new Error("There was a problem creating your expense.");
    }
  }
}

const ExpensesPage = () => {
  const { expenses } = useLoaderData();
  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length}total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No Expenses to show </p>
      )}
    </div>
  );
};

export default ExpensesPage;
