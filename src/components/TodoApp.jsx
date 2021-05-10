import React, { useState } from "react";
import "../css/style.css";
import uniqid from "uniqid";
import { BsTrash, BsPencilSquare } from "react-icons/bs";

const TodoApp = () => {
	const [todo, setTodo] = useState([]);
	const [tarea, setTarea] = useState("");
	const [error, setError] = useState(null);
	const [active, setActive] = useState(false);
	const [ready, setReady] = useState(false);
	const [listaActiva, setListaActiva] = useState([]);
	const [editar, setEditar] = useState(false);
	const [idEditar, setIdEditar] = useState("");

	const tareasActivas = todo.filter((item) => item.completed === false);
	const tareasCompletas = todo.filter((item) => item.completed === true);

	const addTodo = (e) => {
		e.preventDefault();
		if (!tarea.trim()) {
			setError("Ingresa una tarea");
			console.log(error);
			return;
		}
		const nuevaTarea = {
			id: uniqid(),
			tarea: tarea,
			completed: false,
		};

		setTodo([...todo, nuevaTarea]);
		setTarea("");
		setError(null);
	};

	const tareaCompletada = (id, completed) => {
		if (todo.map((item) => item.id === id) && completed === false) {
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
		} else {
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
		}
	};

	const borrarTarea = (id) => {
		const tareaBorrada = todo.filter((item) => item.id !== id);
		setTodo(tareaBorrada);
	};

	const borrarTodas = () => {
		setTodo([]);
	};

	const modoEditar = (item) => {
		setEditar(true);
		setIdEditar(item.id);
		setTarea(item.tarea);
	};

	const editarTarea = (e) => {
		e.preventDefault();
		const editada = todo.map((item) =>
			item.id === idEditar
				? {
						id: item.id,
						tarea: tarea,
						completed: item.completed,
				  }
				: item
		);
		setTodo(editada);
		setEditar(false);
		setTarea("");
		setError(null);
	};

	return (
		<div className="container-80">
			<h2 className="mt-4 ml-3 poppins">#todo</h2>
			<div className="navbar-container">
				<nav className="navbar navbar-expand-lg navbar-dark bg-ligth">
					<ul className="navbar-nav justify-content-center">
						<li className="nav-item px-5">
							<button
								onClick={() => {
									setActive(false);
									setReady(false);
									document.querySelector("button.all").classList.add("active");
									document
										.querySelector("button.incompletas")
										.classList.remove("active");
									document
										.querySelector("button.completas")
										.classList.remove("active");
								}}
								className="btn btn-outline-secondary me-2 all active"
							>
								All
							</button>
						</li>
						<li className="nav-item px-5">
							<button
								onClick={() => {
									setActive(true);
									setReady(false);
									setListaActiva(tareasActivas);
									document
										.querySelector("button.incompletas")
										.classList.add("active");
									document
										.querySelector("button.completas")
										.classList.remove("active");
									document
										.querySelector("button.all")
										.classList.remove("active");
								}}
								className="btn btn-outline-secondary me-2 incompletas"
							>
								Active
							</button>
						</li>
						<li className="nav-item px-5">
							<button
								onClick={() => {
									setActive(false);
									setReady(true);
									setListaActiva(tareasCompletas);
									document
										.querySelector("button.completas")
										.classList.add("active");
									document
										.querySelector("button.all")
										.classList.remove("active");
									document
										.querySelector("button.incompletas")
										.classList.remove("active");
								}}
								className="btn btn-outline-secondary me-2 completas"
							>
								Completed
							</button>
						</li>
					</ul>
				</nav>
			</div>
			<div className="container-input mt-5">
				<form
					className="formulario-tareas"
					onSubmit={editar ? editarTarea : addTodo}
					action=""
				>
					<div className="input-group todo-input">
						<input
							onChange={(e) => setTarea(e.target.value)}
							className="form-control"
							type="text"
							placeholder="Cuales son tus objetivos ?"
							value={tarea}
						/>
						<input
							className="btn btn-outline-success"
							value={editar ? "Editar Tarea" : "Agregar Tarea"}
							type="submit"
						/>
					</div>
				</form>
			</div>
			<div className="container-input">
				<div className="div-list">
					<ul className="list-group">
						{active === true && ready === false ? (
							listaActiva.map((item) => (
								<li key={item.id} className="list-group-item preDefault">
									<input
										onClick={() => tareaCompletada(item.id, item.completed)}
										defaultChecked={item.completed}
										className="mr-3"
										type="checkbox"
										id={item.id}
									/>
									<span id={item.id} className="tareaText">
										{item.tarea}
									</span>
									<button
										onClick={() => modoEditar(item)}
										className="btn btn-outline-dark float-right ml-3"
									>
										<BsPencilSquare />
									</button>
									<button
										onClick={() => borrarTarea(item.id)}
										className="btn btn-outline-danger float-right"
									>
										<BsTrash />
									</button>
								</li>
							))
						) : (
							<span></span>
						)}
						{active === false && ready === true ? (
							listaActiva.map((item) => (
								<li key={item.id} className="list-group-item preDefault">
									<input
										onClick={() => tareaCompletada(item.id, item.completed)}
										defaultChecked={item.completed}
										className="mr-3"
										type="checkbox"
										id={item.id}
									/>
									{item.completed === true ? (
										<span
											id={item.id}
											className="tareaText checked text-success"
										>
											{item.tarea}
										</span>
									) : (
										<span id={item.id} className="tareaText">
											{item.tarea}
										</span>
									)}
									<button
										onClick={() => modoEditar(item)}
										className="btn btn-outline-dark float-right ml-3"
									>
										<BsPencilSquare />
									</button>
									<button
										onClick={() => borrarTarea(item.id)}
										className="btn btn-outline-danger float-right"
									>
										<BsTrash />
									</button>
								</li>
							))
						) : (
							<span></span>
						)}
						{active === false && ready === false ? (
							todo.map((item) => (
								<li key={item.id} className="list-group-item preDefault">
									<input
										onClick={() => tareaCompletada(item.id, item.completed)}
										defaultChecked={item.completed}
										className="mr-3"
										type="checkbox"
										id={item.id}
									/>
									{item.completed === true ? (
										<span
											id={item.id}
											className="tareaText checked text-success"
										>
											{item.tarea}
										</span>
									) : (
										<span id={item.id} className="tareaText">
											{item.tarea}
										</span>
									)}
									<button
										onClick={() => modoEditar(item)}
										className="btn btn-outline-dark float-right ml-3"
									>
										<BsPencilSquare />
									</button>
									<button
										onClick={() => borrarTarea(item.id)}
										className="btn btn-outline-danger float-right"
									>
										<BsTrash />
									</button>
								</li>
							))
						) : (
							<span></span>
						)}
					</ul>
					{
						todo.length > 0 ? 
						(<div className="botonBorrarTodas">
					<button 
					onClick={() => borrarTodas()}
					className="btn btn-outline-danger mt-3 float-end borrarTodas">
						<BsTrash /> Borrar todas
					</button>
					</div>):(<span></span>)
					}
					{error !== null ? (
						<div className="text-center mt-3 alert alert-danger  msgError">
							{error}
						</div>
					) : (
						<span></span>
					)}
				</div>
			</div>
			<div className="create mt-5 text-center montse mb-3">
				created by <span>Contreras Nicolás</span> - devChallenges.io
			</div>
		</div>
	);
};

export default TodoApp;
