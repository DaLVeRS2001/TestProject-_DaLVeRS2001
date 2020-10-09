import React from "react";
import s from "./Profile.module.scss"

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src="https://coverfiles.alphacoders.com/495/49555.jpg" alt="photo of sea"/>
			</div>
			<div>
				ava + desciption
			</div>
			<div>
				My posts
				<div>
					New post
				</div>
				<div>
					<div className={s.item}>
						post 1
					</div>
					<div className={s.item}>
						post 2
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile