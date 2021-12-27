import React from "react";
import { NavLink } from "react-router-dom";
import s from './Nav.module.css'

const Nav = () => {
  return (
    <div className={s.navBar}>
      <NavLink to="/" activeClassName={s.active} className={s.home}>Home</NavLink>
      <NavLink to='/movies' activeClassName={s.active} className={s.movies}>Movies</NavLink>
    </div>
  );
};

export default Nav;
