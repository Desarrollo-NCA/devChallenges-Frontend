import React, { useState } from "react";
import "../css/style.css";
import { FaRandom, FaLongArrowAltRight } from "react-icons/fa";

const RandomQuote = () => {
	const [quotes, setQuotes] = useState([]);
	const [authorsList, setAuthorList] = useState([]);
	const [oneAuthor, setOneAuthor] = useState(false);
	const [title, setTitle] = useState("");

	const getQuote = async (aut) => {
		try {
			await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
				.then((response) => response.json())
				.then((data) => setQuotes(data.data));
			await fetch(
				`https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${aut}&count=4`
			)
				.then((response) => response.json())
				.then((data) => setAuthorList(data.data));
		} catch (e) {
			console.log(e);
		}

		setOneAuthor(false);
	};

	const getAuthorList = (author) => {
		setOneAuthor(true);
		setTitle(author);
		console.log(author);
	};
	return (
		<div className="container-80">
			<button onClick={getQuote} className="btn btn-outline-success btn-random">
				Random <FaRandom />
			</button>
			{oneAuthor === false ? (
				<div className="container-quote">
					<div className="container-textQuote">
						{quotes.length > 0 ? (
							quotes.map((item) => (
								<div key={item._id}>
									<div className="border-text">
										<span className="quoteText">
											<q>{item.quoteText}</q>
										</span>
									</div>
									<button
										onClick={() => getAuthorList(item.quoteAuthor)}
										className="btn btn-outline-dark mt-5 author"
									>
										<div>
											<p className="quoteAuthor">
												<b>{item.quoteAuthor}</b>
											</p>
											<p className="quoteGenre">{item.quoteGenre}</p>
										</div>
										<FaLongArrowAltRight className="arrowAuthor" />
									</button>
									<div className="create mt-5 text-center montse mb-3">
										created by <span>Contreras Nicolás</span> - devChallenges.io
									</div>
								</div>
							))
						) : (
							<span></span>
						)}
					</div>
				</div>
			) : (
				<div className="container-quote">
					<h2 className="authorTitle">{title}</h2>
					<div className="container-textQuote">
						<ul className="list-group">
							{authorsList.length > 0 ? (
								authorsList.map((item) => (
									<li className="oneAuthor-list list-group-item" key={item._id}>
										<div className="border-text">
											<span className="quoteText">
												<q>{item.quoteText}</q>
											</span>
										</div>
									</li>
								))
							) : (
								<span></span>
							)}
						</ul>
						<div className="create mt-5 text-center montse mb-3">
							created by <span>Contreras Nicolás</span> - devChallenges.io
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default RandomQuote;
