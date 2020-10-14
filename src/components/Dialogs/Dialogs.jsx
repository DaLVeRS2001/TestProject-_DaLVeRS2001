
import React from "react";
import s from "./Dialogs.module.scss"
import {NavLink} from "react-router-dom";



const Dialog = (p)=> {
	let path = "/dialogs/" + p.id;
	return (
		<div className={s.dialog}>
			<NavLink to={path}>{p.name}</NavLink>
		</div>
	)
}



const Message = (p)=> {
	return (
		<div className={s.message}>
			{p.message}
		</div>
	)
}


const dialogsData = [
	{id: 1, name: "Vlad"},
	{id: 2, name: "Katia"},
	{id: 3, name: "Egor"},
	{id: 4, name: "Maks"},
	{id: 5, name: "Alex"},
	{id: 6, name: "Valera"}
]


const messagesData = [
	{id: 1, message: "Hi"},
	{id: 2, message: "Hi, whats up"},
	{id: 3, message: "YO"},
	{id: 4, message: "Vlad"},
	{id: 5, message: "nice to see you again bro"},
]



const Dialogs = (p) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<Dialog id={dialogsData[0].id} name={dialogsData[0].name}/>
				<Dialog id={dialogsData[1].id} name={dialogsData[1].name}/>
			</div>

			<div className={s.messages}>
				<Message id={messagesData[0].id} message={messagesData[0].message}/>
				<Message id={messagesData[1].id} message={messagesData[1].message}/>
			</div>
		</div>
	)
}


export default Dialogs