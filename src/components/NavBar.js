import { NavLink } from "react-router-dom";
import "../assets/styles/navbar.css";

// create a NavBar component
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">Reader!</div>
      <div id="nav__toggler" className="nav__links">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="nav__link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="nav__link"
          to="/books"
        >
          My Books
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="nav__link"
          to="/users"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
