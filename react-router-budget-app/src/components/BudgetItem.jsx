/**
 * BudgetItem Comp
 * 
 * shows amount spent
 * shows amount remaining
 */

// // helper function
// import { calculateSpentByBudget, formatCurrency } from "../helpers";

// const BudgetItem = ({budget}) => {
//   const {id, name, amount, color } = budget;

//   // define inside the <helper/>
//   const spent = calculateSpentByBudget(id)

//   return (
//     <div className="budget">
//       <div className="progress-text">
//         <h3>{name}</h3>
//         <p>{formatCurrency(amount)} Budgeted</p>
//       </div>
//       <progress max={amount} value={100}>
//         {/* percentage */}
//       </progress>
//         <div className="progress-text">
//             <small> {formatCurrency(spent)} spents</small>
//             <small>... remaining</small>
//         </div>
//     </div>
//   )
// }

// export default BudgetItem

// helper functions
import { calculateSpentByBudget, formatCurrency} from "../helpers";

const BudgetItem = ({ budget }) => {

  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div
      className="budget">
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
     <progress max={amount} value="100">

     </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>... remaining</small>
      </div>
    </div>
  )
}
export default BudgetItem