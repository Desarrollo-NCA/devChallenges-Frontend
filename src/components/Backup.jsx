if (random.length === 0) {
			for (var i = 0; i < 4; i++) {
				var n = Math.random() * (245 - 1) + 1;

				const prueba = country.slice(n, n + 1);

				prueba.map((item) => random.push(item));
				console.log(n, "ACA")
			}
		}




const capital = () => {
		var n = Math.floor(Math.random() * (4 - 0) + 0);
		random.map((item, index) => (index === n ? setCap(item.capital) : null));
	};