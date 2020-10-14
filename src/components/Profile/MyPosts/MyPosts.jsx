import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";

const MyPosts = (p) => {
	const postData = [
		{
			id: 1,
			message: "Hi buddy, How are u?",
			likeCount: 24,
			src: "https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg"
		},
		{
			id: 2,
			message: "it's my first post",
			likeCount: 12,
			src: "https://im0-tub-ru.yandex.net/i?id=e11274ee0fbeaccac0618cce6beeebac&n=13&exp=1"
		},
		{id: 3, message: "YO", likeCount: 5, src: ''},
		{id: 4, message: "i'm here", likeCount: 4, src: ''},
		{id: 5, message: "nice to see you again bro", likeCount: 55, src: ''},
	]



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
					<Post
						likeCount={postData[0].likeCount}
						message={postData[0].message}
						src={postData[0].src}
					/>
					<Post
						likeCount={postData[1].likeCount}
						message={postData[1].message}
						src={postData[1].src}
					/>
				</div>
			</div>
	)
}

export default MyPosts