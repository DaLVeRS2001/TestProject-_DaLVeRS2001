
import React from "react";
import s from "./Message.module.scss"




const Message = (p)=> {
	return (
		<div className={s.message}>
			{p.message}
		</div>
	)
}




export default Message