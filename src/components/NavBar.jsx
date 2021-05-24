import React from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css'


const NavBar = () => {
	const menuNav = () => {
		document.querySelector(".hamb").classList.toggle("show");
		document.querySelector(".close-circle").classList.toggle("show");
		document.querySelector(".container-nav").classList.toggle("show");
	}
	return (
		<div className="container-nav">
			<h3 className="titlenav"><span>Dev</span>challenges.io</h3>
			<div className="column-nav">
				<nav className="nav-bar">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
							onClick={() => menuNav()}
							 className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
							onClick={() => menuNav()}
							 className="nav-link" to="/buttons">
								Buttons
							</Link>
						</li>
						<li className="nav-item">
							<Link
							onClick={() => menuNav()}
							 className="nav-link" to="/inputs">
								Inputs
							</Link>
						</li>
						<div className="content"><br/></div>
						<li className="nav-item">
							<a className="nav-link" href="https://windbnb-nicolascontreras.web.app/">
							Windbnb
							</a>
						</li>
						<li className="nav-item">
							<Link
							onClick={() => menuNav()}
							 className="nav-link" to="/todo">
								TODO
							</Link>
						</li>
						<li className="nav-item">
							<Link
							onClick={() => menuNav()}
							 className="nav-link" to="/random-quote">
								Random Quote
							</Link>
						</li>
						<li className="nav-item">
							<Link
							onClick={() => menuNav()}
							 className="nav-link" to="/country-quiz">
								Country Quiz
							</Link>
						</li>
					</ul>
					
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
