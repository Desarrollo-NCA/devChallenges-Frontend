import React, { useState, useEffect } from "react";
import myData from "./countrys.json";
import uniqid from "uniqid";
import ImgQuestCard from "./ImgQuestCard.jsx";
import ImgWinners from "./ImgWinners.jsx";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const CountryQuiz = () => {
	const country = myData;
	const [random, setRandom] = useState([]);
	const [cap, setCap] = useState("");
	const [flag, setFlag] = useState("");
	const [playTime, setPlayTime] = useState(true);
	const [score, setScore] = useState(0);
	const [flagOrCap, setFlagOrCap] = useState(null);
	const [win, setWin] = useState(true);

	useEffect(() => {
		if (random.length === 0) {
			unPais();
		}
	}, [random.length]);
	const unPais = () => {
		random.slice(0, 3);
		var newArray = [];
		for (var i = 0; i < 4; i++) {
			var n = Math.random() * (245 - 1) + 1;
			const prueba = country.slice(n, n + 1);
			prueba.map((item) => newArray.push(item));
		}
		setRandom(newArray);

		var x = Math.floor(Math.random() * (2 - 0) + 0);
		setFlagOrCap(x);
		var v = Math.floor(Math.random() * (4 - 0) + 0);
		newArray.map((item, index) => (index === v ? setCap(item.capital) : null));
		newArray.map((item, index) => (index === v ? setFlag(item.flag) : null));
	};

	var letra = 0;
	const lala = () => {
		if (letra === 0) {
			letra++;
			return "A";
		} else if (letra === 1) {
			letra++;
			return "B";
		} else if (letra === 2) {
			letra++;
			return "C";
		} else {
			letra = 0;
			return "D";
		}
	};
	const Comprobar = (capital, index) => {
		if (capital === cap) {
			document.getElementById(capital).classList.add("correct");
			document.getElementById("btn-next").classList.add("active");
			document.querySelector(`.icon-check.id${index}`).classList.add("true");

			document.querySelector(`.btn-choise.id0`).classList.add("disabled");
			document.querySelector(`.btn-choise.id1`).classList.add("disabled");
			document.querySelector(`.btn-choise.id2`).classList.add("disabled");
			document.querySelector(`.btn-choise.id3`).classList.add("disabled");
		} else {
			setWin(false);
			setTimeout(() => {
				document.getElementById(capital).classList.add("incorrect");
				document.getElementById(index).classList.add("active");
				document.getElementById("btn-next").classList.add("active");

				document.getElementById(cap).classList.add("correct");
				document.querySelector(`.btn-choise.id0`).classList.add("disabled");
				document.querySelector(`.btn-choise.id1`).classList.add("disabled");
				document.querySelector(`.btn-choise.id2`).classList.add("disabled");
				document.querySelector(`.btn-choise.id3`).classList.add("disabled");
			}, 200);
		}
	};
	const nextCard = () => {
		unPais();
		setScore(score + 1);
		document.getElementById("btn-next").classList.remove("active");
		document.querySelector(".icon-check").classList.remove("active");
	};

	const lose = () => {
		setPlayTime(false);
	};

	const again = () => {
		setScore(0);
		unPais();
		setPlayTime(true);
		setWin(true);
	};
	return (
		<div className="container-80 quiz-bg">
			{playTime === true ? (
				<div className="mx-auto quizCard">
					<div className="encabezado">
						<h2 className="quiz-title">COUNTRY QUIZ</h2>
						<ImgQuestCard className="imgQuestCard" />
					</div>
					{flagOrCap === 0 ? (
						<p className="question">{cap} is the capital of</p>
					) : (
						<div>
							<img src={flag} alt="flag" className="flag-img" />
							<p className="question">
								{" "}
								Which country does this flag belong to?
							</p>
						</div>
					)}
					<ul className="list-group">
						{random.map((item, index) => (
							<button
								onClick={() => Comprobar(item.capital, index)}
								className={`btn-choise id${index}`}
								name="btn-choise"
								id={item.capital}
								key={uniqid()}
								disabled={false}
							>
								<span className="quiz-Letter">{lala()}</span>

								<p className="country-name">{item.name}</p>

								<div className="icons">
									<AiOutlineCloseCircle id={index} className="icon-cross" />
									<AiOutlineCheckCircle className={`icon-check id${index}`} />
								</div>
							</button>
						))}
					</ul>
					<span className="count-score">
						<span className="score">{score}</span> HIT !!!
					</span>
					<button
						onClick={win === true ? nextCard : lose}
						id="btn-next"
						className="btn nextQuiz"
					>
						{win === true ? "Next" : "Bwoah"}
					</button>
				</div>
			) : (
				<div className="my-auto mx-auto quizCard">
					<div className="encabezado">
						<h2 className="quiz-title">COUNTRY QUIZ</h2>
					</div>
					<ImgWinners />
					<div>
						<h3 className="quizResults">Results</h3>
					</div>
					<p className="answersCorrect">
						You got <span className="score">{score}</span> correct answers
					</p>
					<div className="group-btn-try">
						<button onClick={() => again()} className="btn-tryAgain">
							Try again
						</button>
					</div>
				</div>
			)}
			<div className="create text-center montse mb-3 abso">
				created by <span>Contreras Nicolás</span> - devChallenges.io
			</div>
		</div>
		
		
	);
};
export default CountryQuiz;
