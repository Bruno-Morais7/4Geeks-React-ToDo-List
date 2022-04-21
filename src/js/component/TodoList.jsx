import React from "react";
import Todo from "./Todo.jsx";

const TodoList = ({ todos, setTodos }) => {
	return (
		<div className="text-center">
			<ul>
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						text={todo.text}
						todos={todos}
						todo={todo}
						setTodos={setTodos}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
