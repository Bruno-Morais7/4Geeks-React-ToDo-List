import React, { useState } from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";

//create your first component
const Home = () => {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div>
			<h1 className="text-center mt-5">Hello Rigact!</h1>
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
