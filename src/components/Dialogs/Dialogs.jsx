
import React from "react";
import s from "./Dialogs.module.scss"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


//data







const Dialogs = (props) => {
	let messagesList = props.state.messagesData.map(m=> <Message id={m.id} message={m.message}/>)
	let dialogsList = props.state.dialogsData.map(d=> <Dialog id={d.id} name={d.name} src={d.src}/>)

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