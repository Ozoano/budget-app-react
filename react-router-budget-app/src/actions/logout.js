/**
 * logout comps
 * 
 * to logout user and redirect them to the home page
 * used react-toastify to show a msg once user log out
 */


// rrd imports
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: "userName"
  })
  toast.success("You’ve deleted your account!")
  // return redirect
  return redirect("/")
}