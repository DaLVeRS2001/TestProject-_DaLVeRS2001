import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";










const MyPosts = (props) => {

	let postsList = props.postsData.map(p=> <Post
		likeCount={p.likeCount}
		message={p.message}
		src={p.src}
	/>)

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
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