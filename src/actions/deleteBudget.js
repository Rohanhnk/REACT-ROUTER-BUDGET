import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem, getAllMatchingItems } from "../helpers";

export function deleteBudget({ params }) {
  try {
    // Delete the budget
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    // Get associated expenses
    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    // Delete each associated expense
    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    // Success message
    toast.success("Budget deleted successfully!");
  } catch (e) {
    // Log the error for debugging purposes
    console.error("Error deleting budget:", e); // Log the entire error object
    console.error("Error message:", e.message); // Log the error message
    console.error("Stack trace:", e.stack); // Log the stack trace for debugging

    // Throw a new error with a custom message and include the original error message
    throw new Error(
      `There was a problem deleting your budget: ${
        e.message || "Unknown error"
      }`
    );
  }

  return redirect("/");
}
