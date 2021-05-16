import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ButtonsPage from "./components/Buttons/ButtonComponent.jsx";
import Home from "./components/Home.jsx";
import InputsPage from "./components/Inputs/InputsComponent.jsx";
import TodoApp from "./components/TodoApp.jsx";
import RandomQuote from "./components/RandomQuote.jsx";
import CountryQuiz from "./components/CountryQuiz/CountryQuiz.jsx";
import './css/style.css'

function App() {
	return (
		<div className="container-app">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/buttons" component={ButtonsPage}></Route>
					<Route path="/inputs" component={InputsPage}></Route>
					<Route path="/todo" component={TodoApp}></Route>
					<Route path="/random-quote" component={RandomQuote}></Route>
					<Route path="/country-quiz" component={CountryQuiz}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
