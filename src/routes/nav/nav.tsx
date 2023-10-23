import { NavLink, Outlet } from "react-router-dom";
import "./nav.css";

export const Nav = () => (
  <>
    <Outlet />
    <nav id="footer">
      <ul>
        <li>
          <NavLink
            to="/overview"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/questionnaire"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Questionnaire
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/result"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Result
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);
