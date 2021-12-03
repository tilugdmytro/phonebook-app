import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={s.nav}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? s.nav__link_active : s.nav__link
        }
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? s.nav__link_active : s.nav__link
        }
      >
        Log in
      </NavLink>
    </div>
  );
}
