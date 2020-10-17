import React from "react";
import s from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className={s.content}>
		<ProfileInfo/>
		<MyPosts postsData={props.pD}/>
		</div>
	)
}

export default Profile