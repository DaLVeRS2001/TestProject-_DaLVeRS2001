
import React from "react";
import s from "./Dialog.module.scss"
import {NavLink} from "react-router-dom";



const Dialog = (p)=> {
	let path = "/dialogs/" + p.id;
	return (
		<div className={s.dialog}>
			<NavLink to={path}>{p.name}</NavLink>
		</div>
	)
}



export default Dialog