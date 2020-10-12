import React from "react";
import s from "./Post.module.scss"

const Post = (props) => {

	return (
					<div className={s.item}>
						<img src={props.src} alt="Avatar wasn't loaded"/>
						{props.message}
						<form>
							<button>Like {props.likeCount}</button>
						</form>
					</div>
	)
}


export default Post