
import React from "react";
import s from "./Dialogs.module.scss"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageText} from "../../Redux/message-reducer";










const Dialogs = (props) => {
	let messagesList = props.messagePage.messagesData.map(m=> <Message id={m.id} message={m.message}/>)
	let dialogsList = props.messagePage.dialogsData.map(d=> <Dialog id={d.id} name={d.name} src={d.src}/>)

	let sendMessage = ()=> {
		let action = sendMessageActionCreator()
		props.dispatch(action)
	}

	let onMessageTextUpdate = (e)=> {
		let text = e.target.value
		let action = updateNewMessageText(text)
		props.dispatch(action)

	}


	return<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsList}
			</div>

			<div className={s.messages}>
				<div>{messagesList}</div>
				<div>
					<div><textarea value={props.messagePage.newMessageText} onChange={onMessageTextUpdate} /></div>
					<div><button onClick={sendMessage}>SEND MESSAGE</button></div>
				</div>
			</div>
		</div>

}


export default Dialogs