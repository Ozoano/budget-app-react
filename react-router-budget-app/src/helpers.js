/**
*  local storage
* 
*  fetchData - fetches any data given a key in my local storage and returns it to me
* 
* deleteItem - remove a user from the localStorage
*
* create budget
* Check if budget data exist, if not gimme empty array 
* add th budget data to localStorage
*
* generate random HSL color
* */

// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key)
} 

// create budget
export const createBudget = ({name, amount}) => {
  const newItem = {
    // generate a random num
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor()
  }
  // // check if existing budget data, if not gimme empty arrayc []
  const existingBudgets = fetchData("budgets") ?? [];

  return localStorage.setItem("budgets",
    JSON.stringify([...existingBudgets, newItem]))
}

// create expense budget
export const createExpense = ({name, amount, budgetId}) => {
  const newItem = {
    // generate a random num
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId
  }
  // // check if existing budget data, if not gimme empty arrayc []
  const existingExpenses = fetchData("Expenses") ?? [];
  
  // add to localStorage
  return localStorage.setItem("Expenses",
    JSON.stringify([...existingExpenses, newItem]))
}

// generate random coloor
const generateRandomColor = () => {
  // check if the budget has a length, and display it
  // else show 0
  const existingBudgetsLength = fetchData("budgets")?.length ?? 0;
  // 65% is the saturation and 50% the brightness of HSL Color
  return `${existingBudgetsLength * 34} 65% 50%`
}

// To manually delay the form submission time
export const wait = () => new Promise(resolve => setTimeout(resolve, Math.random() * 3000));


// formatingg 

// // formating currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style:"currency", 
    currency:"USD"
  });
}

// total spent by budget
export const calculateSpentByBudget =  ({budgetId}) => {
const expenses = fetchData("expenses") ?? [];

// if exp does exist, then loop thru it and check 2 things 
// one => exp budget ID === ID I passed in
// two => add up total values to see how much I spent in that category 

 const budgetSpent = expenses.reduce((acc, expense) => {
  // does exp budget ID === ID I passed in
if (expense.budgetId !== budgetId) {
  return acc // here acc is stll 0
}
//if exp.budgetId === budgetId, skip the if statement, then add the current to my total
return acc += expense.amount
 }, 0)
return budgetSpent;
}