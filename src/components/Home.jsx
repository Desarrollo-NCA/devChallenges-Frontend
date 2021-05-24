import React from "react";
import "../css/style.css";
import { FaFacebookSquare, FaGithub, FaInstagram } from "react-icons/fa";

const Home = () => {
	return (
		<div className="container-80">
		<div className="wellcome">
			<h2 className="mt-4 ml-3 poppins">Contreras Nicolás vs React</h2>
			<h6 className="ml-3 poppins">
				This "app" is made in react, deployed with firebase.
			</h6>

			<div className="container-home">
				<ul>
					<li>
						<a href="https://www.facebook.com/Nejca.13">
							<FaFacebookSquare className="social-media" />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/nicolascontreras13">
							<FaInstagram className="social-media" />
						</a>
					</li>
					<li>
						<a href="https://github.com/Desarrollo-NCA">
							<FaGithub className="social-media" />
						</a>
					</li>
				</ul>

			</div>
			<h3 className="ml-4 mt-5 poppins">Responsive design temporarily unavailable</h3>
			</div>
		</div>
	);
};

export default Home;
