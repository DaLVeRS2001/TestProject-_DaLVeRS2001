
import React from "react";
import s from "./Dialog.module.scss"
import {NavLink} from "react-router-dom";



const Dialog = (props)=> {
	let path = "/dialogs/" + props.id;
	return (
		<div className={s.dialog}>

			<img src={props.src} alt="Avatar wasn't loaded"/>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}



export default Dialog