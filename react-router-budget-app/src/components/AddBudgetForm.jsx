/**
 * Form - form to get amount and name for a budget
* when budget is created, the dashBoardLoader func will grab the data
*  and display them on the home dashboard

* useFetcher - using usefetcher to manage the UI state of our form
* useEffect - to track the states
 */

// library
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'

// react
import { useEffect, useRef} from 'react';
// rrd
import { Form, useFetcher } from 'react-router-dom'

const AddBudgetForm = () => {

// using usefetcher to manage the UI state of our form
const fetcher = useFetcher();
// check if the UI state is Submitting
const isSubmitting = fetcher.state === 'submitting'

// useRef
const formRef = useRef();
const focusRef = useRef();


// useEffect Hook to manage 
useEffect(() =>{
  // if the form is done submitting, refresh the form
  if (!isSubmitting) {
    // to clear form field after budget data has been submitted
    formRef.current.reset()
    // reset focus
    focusRef.current.focus()
  }
}, [isSubmitting])

  return (
    <div className='form-wrapper'>
      <h2 className='h3'>Create Budget</h2>

      <fetcher.Form 
      method='post'
      className='grid-sm'
      ref={formRef}
      >
        <div className="grid-xs">
            <label htmlFor="newBudget"> Budget Name</label>
            <input 
            type="text"
            name='newBudget' 
            id='newBudget'
            placeholder='e.g., Groceries'
            required
            ref={focusRef}
            />
        </div>
        <div className="grid-xs">
            <label htmlFor="newBudgetAmount">Amount</label>
            <input 
            type="number" 
            name='newBudgetAmount'
            //step to move up/down by a single cent, at either direction
            step="0.01"
            placeholder='e.g., $350'
            required
            id='newBudgetAmount'
            inputMode='decimal'
            />
        </div>


          {/* hidden input used to handle diff form data */}
        <input type="hidden" name='_action' value="createBudget" />
        
      {/* manage btn state */}
        <button type='submit' className='btn btn--dark' disabled={isSubmitting}>
              {
                isSubmitting? <span>Submitting...</span>:
                (
                  <>
                  <span>Create Budget</span> 
                  <CurrencyDollarIcon width={20}/>
                  </>
                )
              }
        </button>
    
      </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm
