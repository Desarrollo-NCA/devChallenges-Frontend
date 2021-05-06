import React, { useState } from "react";
import "../../css/style.css";

const Inputs = (props) => {
	const [checked, setChecked] = useState(null);
	const [msgstatus, setMsgstatus] = useState("");

	const inputdisabled = (clase) => {
		if (checked === true) {
			setChecked(false);
			setMsgstatus("");
		} else {
			setChecked(true);
			setMsgstatus("You disabled text input");
		}
	};

	return (
		<div className="text-center">
			<p>&lt;{props.inputTitle}/&gt;</p>
			<label className="form-label notoSans" htmlFor={props.id1}>
				Username
			</label>
			{props.clName.includes("startIcono") && (
				<div className={props.classDiv}>
					<span className="input-group-text">{props.icon}</span>
					<input
						className={props.clName}
						type="text"
						id={props.id1}
						disabled={checked}
						placeholder={props.placeholder}
						defaultValue={props.value}
					/>
				</div>
			)}
			{props.clName.includes("endIcono") && (
				<div className={props.classDiv}>
					<span className="input-group-text">{props.icon}</span>
					<input
						className={props.clName}
						type="text"
						id={props.id1}
						disabled={checked}
						placeholder={props.placeholder}
						defaultValue={props.value}
					/>
				</div>
			)}
			{!props.clName.includes("startIcono") &&
			!props.clName.includes("endIcono") ? (
				<div className={props.classDiv}>
					<input
						className={props.clName}
						type="text"
						id={props.id1}
						disabled={checked}
						placeholder={props.placeholder}
						defaultValue={props.value}
					/>
				</div>
			) : (
				<span></span>
			)}
			{props.clName.includes("helpText") ? (
				<div className="text-secondary">This is a simple help message</div>
			) : (
				<span></span>
			)}
			<div className="mt-2 text-center">
				{props.clName.includes("is-invalid") ? (
					<div className="text-danger mb-2">
						This is a simple default error message
					</div>
				) : (
					<span></span>
				)}
				<input onClick={inputdisabled} type="checkbox" id={props.id2} />
				<label className="form-label notoSans ml-1" htmlFor={props.id2}>
					Disable input
				</label>
			</div>

			{checked === true ? (
				<div className="alert alert-danger mt-3">{msgstatus}</div>
			) : (
				<span></span>
			)}
		</div>
	);
};

const TextArea = (props) => {
	return (
		<div className="container">
			<p>&lt;{props.inputTitle}/&gt;</p>
			<label className="form-label notoSans" htmlFor={props.id1}>
				TextArea
			</label>
			<div className={props.classDiv}>
				<textarea
					className={props.clName}
					id={props.id1}
					cols={props.col}
					rows={props.row}
				/>
			</div>
		</div>
	);
};

export { Inputs, TextArea };
