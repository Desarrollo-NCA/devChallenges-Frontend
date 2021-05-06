import React from "react";
import { Inputs, TextArea } from "./Inputs.jsx";
import { Row, Col } from "reactstrap";
import { Phone } from "../../components/FontAwesome.jsx";
import "../../css/style.css";

const InputsComponent = () => {
	return (
		<div className="container-80">
			<h2 className="mt-4 ml-3 poppins">Inputs</h2>
			<Row className="mt-5">
				<Col className="column">
					<Inputs
						classDiv="input-group"
						inputTitle="Input type='text'"
						clName="form-control mb-3"
						id1="input1"
						id2="check1"
						placeholder="Text Input"
						type="text"
					/>
				</Col>
				<Col className="column">
					<Inputs
						classDiv="input-group"
						inputTitle="Input type='email' error"
						clName="form-control is-invalid"
						id1="input2"
						id2="check2"
						placeholder="Email Input error"
						type="email"
					/>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col className="column">
					<Inputs
						classDiv="input-group"
						inputTitle="Input type='tel'"
						clName="form-control startIcono"
						id1="input3"
						id2="check3"
						placeholder="Pane"
						type="tel"
						icon={Phone}
					/>
				</Col>
				<Col className="column">
					<Inputs
						classDiv="input-group"
						inputTitle="Input type='tel' error"
						clName="form-control is-invalid endIcono"
						id1="input4"
						id2="check4"
						placeholder="Phone"
						type="tel"
						icon={Phone}
					/>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col className="column">
					<Inputs
						classDiv="input-group"
						inputTitle="Input value=text"
						clName="form-control helpText"
						id1="input5"
						id2="check5"
						placeholder=""
						type="text"
						value="TEXT"
					/>
				</Col>
				<Col className="column">
					<Inputs
						classDiv="input-group"
						inputTitle="Input value=text"
						clName="form-control valid is-valid"
						id1="input6"
						id2="check6"
						placeholder=""
						type="text"
						value="TEXT"
					/>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col className="column">
					<Inputs
						classDiv="input-group input-group-sm"
						inputTitle="Input size=sm"
						clName="form-control"
						id1="input7"
						id2="check7"
						placeholder=""
						type="text"
						value="TEXT"
					/>
				</Col>
				<Col className="column">
					<Inputs
						classDiv="input-group input-group-default"
						inputTitle="Input size=default"
						clName="form-control"
						id1="input8"
						id2="check8"
						placeholder=""
						type="text"
						value="TEXT"
					/>
				</Col>
				<Col className="column">
					<Inputs
						classDiv="input-group input-group-lg"
						inputTitle="Input size=lg"
						clName="form-control"
						id1="input9"
						id2="check9"
						placeholder=""
						type="text"
						value="TEXT"
					/>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col className="column">
					<Inputs
						classDiv="input-group input-group-"
						inputTitle="Input size=Full"
						clName="form-control"
						id1="input7"
						id2="check7"
						placeholder="Width of the parent"
						type="text"
					/>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col className="column text-center">
					<TextArea
						clName="form-control textArea ml-4"
						classDiv="input-group "
						inputTitle="TextArea"
						col="1"
						row="5"
						
					></TextArea>
				</Col>
				<Col className="column text-center">
					<TextArea
						clName="form-control textArea ml-4"
						classDiv="input-group "
						inputTitle="TextArea"
						col="1"
						row="5"
						
					></TextArea>
				</Col>
				<Col className="text-center">
					<TextArea
						clName="form-control textArea ml-4"
						classDiv="input-group "
						inputTitle="TextArea"
						col="1"
						row="5"
						
					></TextArea>
				</Col>
			</Row>
			<div className="create mt-5 text-center montse mb-3">
				created by <span>Contreras Nicolás</span> - devChallenges.io
			</div>
		</div>
	);
};

export default InputsComponent;
