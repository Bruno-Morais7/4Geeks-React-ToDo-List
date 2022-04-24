import React, { useState } from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";

//create your first component
const Home = () => {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container col-4 d-flex flex-column align-items-center">
			<span>todos</span>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default Home;
