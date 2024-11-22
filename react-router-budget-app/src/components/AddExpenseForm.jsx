/**
 *  Add expense function
 *  
 * @returns budget
 * checks if at least one budget item exist, then Map the budget.name as title 
 * 
 */

// react imports
import { useEffect, useRef } from "react";
// rrd imports
import { useFetcher } from "react-router-dom"

// library imports
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const AddExpenseForm = ({budgets}) => {
// useFetcher Hook
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';

  // useRef hook
  const formRef = useRef()
  const focusRef = useRef()

  useEffect(() =>{
    if (!isSubmitting) {
    formRef.current.reset()
    focusRef.current.focus()
    }
  }, [isSubmitting])

  return (
    <div className='form-wrapper'>
      {/* Map the budget.name as title */}
      <h2 className='h3'> Add new {""} 
        <span className='accent'> {budgets.length === 1 && `${budgets.map(budg => (
          budg.name))}`}
          </span> {""} Expense</h2>

      <fetcher.Form 
      method="post"
      className="grid-sm"
      ref={formRef}
      >
        <div className="expense-inputs">
          <div className="grid-xs">
            <label htmlFor="newExpense"> Expense Name</label>
            <input 
              type="text"
              name="newExpense"
              id="newExpense"
              ref={focusRef}
              placeholder="eg., coffee" 
              required
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">Amount</label>
            <input 
              type="number"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="e.g., $3.50" 
              step="0.01"
              inputMode="decimal"
              required
            />
          </div>
        </div>
        {/* optional section, HIDDEN BUDGET CATEGORY if if we have only one budget, but display if we have more than one budget */}
        <div className="grid-xs"hidden={budgets.length === 1}>

          <label htmlFor="newExpenseBudget">Budget Category</label>
          <select name="newExpenseBudget" id="newExpenseBudget" required>
{/* sort and display budget based on time they were created. Then Map over the result */}
            {
              budgets
              .sort((a, b) => a.createdAt - b.createdAt)
              .map(budget =>{
                // return some jsx
                return (
                  <option key={budget.id} value="budget.id">
                    {budget.name}
                  </option>
                )
              })
            }
          </select>
        </div>

              {/* hidden input */}
      <input type="hidden" name="_action" value="createExpense" />
      <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
       {
        isSubmitting ? <span>Submitting...</span>
        : (
          <>
            <span>Add Expense</span>
            <PlusCircleIcon width={20}/>
          </>
         )
       }
      </button>
      </fetcher.Form>
    </div>
  )
}

export default AddExpenseForm
