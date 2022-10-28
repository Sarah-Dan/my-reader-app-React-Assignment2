import { NavLink } from "react-router-dom";

// create a NavBar component
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">Reader!</div>
      <div className="nav__links">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "grey" } : { color: "white" }
          }
          className="nav__link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "grey" } : { color: "white" }
          }
          className="nav__link"
          to="/books"
        >
          My Books 
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "grey" } : { color: "white" }
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
