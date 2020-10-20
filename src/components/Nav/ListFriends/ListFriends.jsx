
import React from "react";
import s from "./ListFriends.module.scss"
import {NavLink} from "react-router-dom";

const ListFriends = (props) => {
	return (
		<NavLink id={props.id} to={props.links} className={s.listFriends}>
			<div><img src={props.avaSrc} alt="'Ava wasn't loaded'"/></div>
			{props.name}
			</NavLink>
	)
}

export default ListFriends