const markReady = (id) => {
		const marcado = todo.map((item) =>
			item.id === id
				? {
						id: item.id,
						tarea: item.tarea,
						completed: true,
				  }
				: item
		);
	
		setTodo(marcado);
		document.querySelector(`span[id=${id}]`).classList.add("checked");
		console.log("Checked", id);
	};

	const unMarkReady = (id) => {
		const desmarcado = todo.map((item) =>
			item.id === id
				? {
						id: item.id,
						tarea: item.tarea,
						completed: false,
				  }
				: item
		);
		setTodo(desmarcado);
		document.querySelector(`span[id=${id}]`).classList.remove("checked");
	};