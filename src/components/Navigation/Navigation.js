import React from "react";
import { NavLink } from "react-router-dom";
import s from "../AuthNav/AuthNav.module.css";

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? s.nav__link_active : s.nav__link
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/phonebook"
      className={({ isActive }) =>
        isActive ? s.nav__link_active : s.nav__link
      }
    >
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;
