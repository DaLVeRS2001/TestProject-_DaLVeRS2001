import React from "react";
import s from "./Nav.module.scss"
import {NavLink} from "react-router-dom";
import ListFriends from "./ListFriends/ListFriends";

const Nav = (props) => {
	const friendsListLink = props.state.friendsListLink[0];

	let friendsList =
		props.state.friendsData.map(i=> <ListFriends name={i.name} id={i.id} avaSrc={i.avaSrc} links={'/'+i.id}/>)

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
			<div className={`${s.items} ${s.itemSettings}`}>
				<a href="">Settings</a>
			</div>
			<div className={`${s.items} ${s.itemFriends}`}>
				<a className={s.itemFriendsLink} href={friendsListLink}>Friends</a>
				<div>{friendsList}</div>
			</div>
		</nav>
	)
}

export default Nav