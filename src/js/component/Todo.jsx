import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
	const deleteHandler = () => {
		setTodos(todos.filter((elem) => elem.id !== todo.id));
	};
	return (
		<div className="w-100">
			<li className="list-group-item  my-0 py-3 fs-4 d-flex justify-content-between">
				{text}
				<button
					onClick={deleteHandler}
					type="button"
					className="btn btn-link hide">
					<i className="fas fa-times"></i>
				</button>
			</li>
		</div>
	);
};

export default Todo;
