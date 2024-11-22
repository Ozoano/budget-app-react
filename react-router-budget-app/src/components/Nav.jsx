/**
 * NavBar comps
 * 
 * display nav details
 * 
 * FORM & ACTION
 * FORM - if userName exists, then show the <FORM> func
 *  onSubmit, confirm if user wants to delete acc/details 
 *  if no, then preventDefault()
 * 
 * ACTION - if the path="logout" (inside App.jsx), 
 * then invoke the logoutAction() inside the logout Page to delete User
 * TrashIcon to show delete msg
 */


// rrd imports
import { Form, NavLink } from "react-router-dom"

// library
import { TrashIcon } from '@heroicons/react/24/solid'

// assets
import logomark from "../assets/logomark.svg"

const Nav = ({ userName }) => {

  return (
    <nav>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <img src={logomark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {
        // conditional rendering
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Delete user and all data?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span>Delete User</span>
              <TrashIcon width={20} />
            </button>

          </Form>
        )
      }
    </nav>
  )
}
export default Nav