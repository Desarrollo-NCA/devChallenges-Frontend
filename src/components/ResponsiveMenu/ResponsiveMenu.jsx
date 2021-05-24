import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const ResponsiveMenu = () => {
	return (
		<div className="container-menu">
			<button
				id="btn-menu"
				onClick={() => {
					document.querySelector(".hamb").classList.toggle("show");
					document.querySelector(".close-circle").classList.toggle("show");
					document.querySelector(".container-nav").classList.toggle("show");
				}}
				className="btn-menu"
			>
				<AiOutlineMenu className="hamb" />
				<AiOutlineClose className="close-circle" />
			</button>
		</div>
	);
};

export default ResponsiveMenu;
