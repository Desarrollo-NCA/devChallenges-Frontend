import React from "react";
import { Link } from "react-router-dom";

import '../css/navbar.css'


const NavBar = () => {
	return (
		<div className="container-nav">
			<h3 className="titlenav"><span>Dev</span>challenges.io</h3>
			<div className="column-nav">
				<nav className="nav-bar">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/buttons">
								Buttons
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/inputs">
								Inputs
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
