/* eslint-disable react/prop-types */

import { useRef, useEffect } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useFetcher } from "react-router-dom";
import { createBudget } from "../helpers";

const AddBudgetForm = ({ onBudgetCreated }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("newBudget");
    const amount = formData.get("newBudgetAmount");
    const currency = formData.get("currency");

    createBudget({ name, amount, currency });

    if (onBudgetCreated) {
      onBudgetCreated();
    }
  };

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <fetcher.Form
        method="post"
        className="grid-sm"
        ref={formRef}
        onSubmit={handleFormSubmit} // Attach the handler here
      >
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            ref={focusRef}
          />
        </div>

        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., 350"
            required
            inputMode="decimal"
          />
        </div>

        <div className="grid-xs">
          <label htmlFor="currency">Currency</label>
          <select name="currency" id="currency" defaultValue="USD" required>
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
          </select>
        </div>

        <input type="hidden" name="_action" value="createBudget" />

        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Create Budget</span>
              <CurrencyDollarIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
