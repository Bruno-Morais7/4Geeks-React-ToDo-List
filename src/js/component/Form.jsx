import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([...todos, { text: inputText, id: Math.random() * 1000 }]);
		setInputText("");
	};
	return (
		<div className="text-center">
			<input value={inputText} onChange={inputTextHandler} type="text" />
			<button onClick={submitTodoHandler}>add</button>
			<button>X</button>
		</div>
	);
};

export default Form;
