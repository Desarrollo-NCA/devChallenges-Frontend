import React from "react";
import Button from "./Button.jsx";
import { Row, Col } from "reactstrap";
import { Cart } from "../../components/FontAwesome.jsx";
import "../../css/style.css";

const ButtonsPage = () => {
	return (
		<div className="container-80">
			<h2 className="mt-4 ml-3 poppins">Buttons</h2>
			<Row className="mt-5">
				<Col>
					<Button clName="btn btn-default" text="Button" value="Default" />
				</Col>
			</Row>
			<Row className="mt-5">
				<Col>
					<Button
						clName="btn btn-out-blue"
						text="Button btn-outline"
						value="Default"
					/>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col>
					<Button
						clName="btn btn-text"
						text="Button btn-text"
						value="Default"
					/>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col>
					<Button
						clName="btn btn-primary"
						text="Button btn-primary of Bootstrap"
						value="Default"
					/>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col>
					<Button
						clName="btn btn-secondary"
						text="Button btn-secondary of Bootstrap disabled"
						state={true}
						value="Default"
					/>
				</Col>
				<Col>
					<Button
						clName="btn btn-text"
						text="Button btn-text disabled"
						state={true}
						value="Default"
					/>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col>
					<Button
						clName="btn btn-primary"
						text="Button btn-icon-start"
						iconStart={Cart}
						value="Default"
					/>
				</Col>
				<Col>
					<Button
						clName="btn btn-primary"
						text="Button btn-incon-end"
						iconEnd={Cart}
						value="Default"
					/>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col>
					<Button
						clName="btn btn-primary btn-sm"
						text="Button btn-sm"
						value="Default"
					/>
				</Col>
				<Col>
					<Button
						clName="btn btn-primary"
						text="Button btn-normal"
						value="Default"
					/>
				</Col>
				<Col>
					<Button
						clName="btn btn-primary btn-lg"
						text="Button btn-lg"
						value="Default"
					/>
				</Col>
			</Row>
			<Row className="mt-5 mb-2">
				<Col>
					<Button
						clName="btn btn-default"
						text="Button btn-default"
						value="Default"
					/>
				</Col>
				<Col>
					<Button
						clName="btn btn-primary"
						text="Button btn-primary"
						value="Default"
					/>
				</Col>
				<Col>
					<Button
						clName="btn btn-secondary"
						text="Button btn-secondary"
						value="Secondary"
					/>
				</Col>
				<Col>
					<Button
						clName="btn btn-danger"
						text="Button btn-danger"
						value="Danger"
					/>
				</Col>
			</Row>
			<div className="create mt-5 text-center montse mb-3">
				created by <span>Contreras Nicolás</span> - devChallenges.io
			</div>
		</div>
	);
};

export default ButtonsPage
