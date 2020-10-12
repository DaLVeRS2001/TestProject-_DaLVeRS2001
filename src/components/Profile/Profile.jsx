import React from "react";
import s from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img className={s.img} src="https://coverfiles.alphacoders.com/495/49555.jpg" alt="photo of sea"/>
			</div>
			<div>
				ava + desciption
			</div>
		<MyPosts/>
		</div>
	)
}

export default Profile