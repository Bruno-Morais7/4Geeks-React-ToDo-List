import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
	const deleteHandler = () => {
		setTodos(todos.filter((elem) => elem.id !== todo.id));
	};
	return (
		<div className="text-center">
			<li>
				{text}
				<button onClick={deleteHandler} className="trash-btn">
					<i className="fas fa-trash"></i>
				</button>
			</li>
		</div>
	);
};

export default Todo;
