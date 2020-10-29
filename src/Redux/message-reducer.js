import profileReducer from "./profile-reducer";

const SEND_MESSAGE = 'SEND_MESSAGE',
	UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


const messageReducer = (state, action) => {

	let _sendMessage = () => {
		let newMessage = {
			id: 6,
			message:state.newMessageText
		}
		state.messagesData.push(newMessage)
		state.newMessageText = ''
	}
	let _updateNewMessageText = (text) => {
		state.newMessageText = text
	}


	switch (action.type) {
		case SEND_MESSAGE:
			_sendMessage();
			return state;

		case UPDATE_NEW_MESSAGE_TEXT:
			_updateNewMessageText(action.newText);
			return state;

		default:
			return state
	}
}



export const sendMessageActionCreator = ()=> ({type: SEND_MESSAGE}),
	updateNewMessageText = (text)=>
		({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})



export default messageReducer