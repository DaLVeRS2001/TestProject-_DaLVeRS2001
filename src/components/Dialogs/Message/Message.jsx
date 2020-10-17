
import React from "react";
import s from "./Message.module.scss"
import {NavLink} from "react-router-dom";




const Message = (p)=> {
	return (
		<div className={s.message}>
			{p.message}
		</div>
	)
}




export default Message