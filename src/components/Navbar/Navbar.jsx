import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navlink">
      <NavLink to="/user">USER</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/contact">CONTACT </NavLink>
      <NavLink to="/services">SERVICE </NavLink>
    </div>
  );
}
export default Navbar;
