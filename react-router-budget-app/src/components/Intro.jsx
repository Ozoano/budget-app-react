/**
 * intro comps
 * a login FORM 
 *
* by default, just like a normal HTML, if you create a form and did
* not handle it (specify where to sbumit it), it will submit it to that exact page.
* the pg that the <Intro> comps leaves on is the <DashBoard> so th form will be submitted to the Dashboard 
* Hence, ACTION is not needed. We do not need to specify any ENDPOINT 
*
 */


import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your journey today.
        </p>

        {/* form field */}
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?" aria-label="Your Name" autoComplete="given-name"
          />
          {/* hidden input used to handle diff form data */}
          <input type="hidden"  name="_action" value="newUser" />
          
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro