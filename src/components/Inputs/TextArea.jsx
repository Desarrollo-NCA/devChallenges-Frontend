import React from 'react'

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

export { TextArea };