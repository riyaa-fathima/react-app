import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const { theme, light, dark } = useContext(ThemeContext);
  const navTheme = theme ? light : dark;
  console.log("nav them", theme);
  
  return (
    <div className="navlink" style={navTheme}>
      <NavLink to="/user" style={navTheme}>
        USER
      </NavLink>
      <NavLink to="/about" style={navTheme}>
        ABOUT
      </NavLink>
      <NavLink to="/contact" style={navTheme}>
        CONTACT{" "}
      </NavLink>
      <NavLink to="/services" style={navTheme}>
        SERVICE{" "}
      </NavLink>
    </div>
  );
}
export default Navbar;
