
import React from "react";
import s from "./Dialogs.module.scss"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import App from "../../App";


//data







const Dialogs = (p) => {
	let messagesList = p.mD.map(m=> <Message id={m.id} message={m.message}/>)
	let dialogsList = p.dD.map(d=> <Dialog id={d.id} name={d.name}/>)

	return<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsList}
			</div>

			<div className={s.messages}>
				{messagesList}
			</div>
		</div>

}


export default Dialogs