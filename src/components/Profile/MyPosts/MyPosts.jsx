import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";






const MyPosts = (props) => {


	let postsList = props.postsData.map(p=> <Post
		likeCount={p.likeCount}
		message={p.message}
		src={p.src}
	/>)

	let newPostElement = React.createRef();

	let addPost = () => {

		let action = addPostActionCreator()
		props.dispatch(action);
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;

		let action = updateNewPostTextActionCreator(text)
		props.dispatch(action);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
                    <textarea onChange={onPostChange} ref={newPostElement}
															value={props.newPostText} />
				</div>
				<div>
					<button onClick={ addPost }>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{ postsList }
			</div>
		</div>
	)
}

export default MyPosts