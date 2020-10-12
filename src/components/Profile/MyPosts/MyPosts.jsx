import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";

const MyPosts = () => {
	return (
			<div>
				My posts
				<div>
					New post
				</div>
				<div className={s.posts}>
					<Post
						likeCount="10"
						message="Hi buddy, How are u?"
						src="https://pbs.twimg.com/profile_images/431529196478038018/i_qx9taM.jpeg"
					/>
					<Post
						likeCount="23"
						message="it's my first post"
						src="https://im0-tub-ru.yandex.net/i?id=e11274ee0fbeaccac0618cce6beeebac&n=13&exp=1"
					/>
				</div>
			</div>
	)
}

export default MyPosts