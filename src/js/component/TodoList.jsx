import React from "react";
import Todo from "./Todo.jsx";

const TodoList = ({ todos, setTodos }) => {
	return (
		<div className="w-100">
			<ul className="list-group shadow">
				{todos.length === 0 ? (
					<li className="list-group-item py-3 fs-4">
						No tasks, add a task
					</li>
				) : (
					todos.map((todo) => (
						<Todo
							className="list-group-item"
							key={todo.id}
							text={todo.text}
							todos={todos}
							todo={todo}
							setTodos={setTodos}
						/>
					))
				)}
				{todos.length === 0 ? (
					<li className="list-group-item py-2 noPaddingLeft">
						{todos.length + " items left"}
					</li>
				) : (
					<li className="list-group-item py-2 noPaddingLeft">
						{todos.length === 1
							? todos.length + " item left"
							: todos.length + " items left"}
					</li>
				)}
			</ul>
		</div>
	);
};

export default TodoList;
