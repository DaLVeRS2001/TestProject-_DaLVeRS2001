import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";










const MyPosts = (p) => {
	console.log(p.postsData)
	let postsList = p.postsData.map(p=> <Post
		likeCount={p.likeCount}
		message={p.message}
		src={p.src}
	/>)



	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
				</div>
			</div>

		<div className={s.posts}>
			{postsList}
				</div>
			</div>
	)
}

export default MyPosts