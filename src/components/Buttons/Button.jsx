import React from "react";

const Button = (props) => {
	return (
		<div>
			<p>&lt;{props.text}/&gt;</p>
			<button className={props.clName} disabled={props.state}>
				{props.iconStart} {props.value} {props.iconEnd}
			</button>
		</div>
	);
};

export default Button;
