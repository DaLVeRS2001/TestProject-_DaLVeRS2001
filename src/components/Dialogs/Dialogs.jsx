import React from "react";
import s from "./Dialogs.module.scss"


const Dialogs = (p) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItmes}>
				<div className={s.dialog}>
				vlad
				</div>
			</div>

			<div className={s.messages}>
				<div className={s.message}>
					hi, how are ya ?
				</div>
			</div>
		</div>
	)
}

export default Dialogs