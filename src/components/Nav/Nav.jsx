import React from "react";
import s from "./Nav.module.scss"

const Nav = () => {
	return (
		<nav>
			<div className={s.items}>
				<a href="/profile">Profile</a>
			</div>
			<div className={s.items}>
				<a href="/dialogs">Messages</a>
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