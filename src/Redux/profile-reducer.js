const ADD_POST = 'ADD-POST',
	UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POS-TEXT';


const profileReducer = (state, action) => {

	let _addPost = () => {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likeCount: Math.round(Math.random() * 99 + 1),
				src: "https://im0-tub-ru.yandex.net/i?id=e11274ee0fbeaccac0618cce6beeebac&n=13&exp=1"
			};
			state.postsData.push(newPost);
			state.newPostText = '';
		},
		_updateNewPostText = (newText) => {
			state.newPostText = newText;
		};

debugger
	switch (action.type) {
		case ADD_POST:
			_addPost();
			return state;

		case UPDATE_NEW_POST_TEXT:
			_updateNewPostText(action.newText);
			return state;

		default:
			return state
	}
}

export const addPostActionCreator = ()=> ({type: ADD_POST}),
	updateNewPostTextActionCreator = (text)=>
		({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer