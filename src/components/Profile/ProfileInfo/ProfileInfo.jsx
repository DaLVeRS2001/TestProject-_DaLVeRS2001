import React from "react";
import s from "./ProfileInfo.module.scss"

const ProfileInfo = () => {
	return (
		<div className={s.profileInfo}>
			<div>
				<img className={s.img} src="https://coverfiles.alphacoders.com/495/49555.jpg" alt="photo of sea"/>
			</div>
			<div>
				ava + desciption
			</div>
		</div>
	)
}

export default ProfileInfo