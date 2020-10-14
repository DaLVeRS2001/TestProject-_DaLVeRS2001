import React from "react";
import s from "./Nav.module.scss"
import {NavLink} from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<div className={s.items}>
				<NavLink to="/profile"  activeClassName={s.activeLink}>Profile</NavLink>
			</div>
			<div className={s.items}>
				<NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
			</div>
			<div className={s.items}>
				<a href="">News</a>
			</div>
			<div className={s.items}>
				<a href="">Music</a>
			</div>
			<div className={s.items}>
				<a href="">Settings</a>
			</div>
		</nav>
	)
}

export default Nav