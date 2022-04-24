import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([...todos, { text: inputText, id: Math.random() * 1000 }]);
		setInputText("");
	};
	const onKeyEnter = (e) => {
		if (e.keyCode === 13) {
			if (e.target.value === null || e.target.value.trim() === "") {
				alert("You have to add a new task");
			} else {
				submitTodoHandler(e);
			}
		}
	};
	return (
		<div className="w-100">
			<input
				value={inputText}
				onChange={inputTextHandler}
				type="text"
				className="list-group-item w-100 fs-4 py-3 shadow"
				placeholder="What needs to be done?"
				onKeyDown={onKeyEnter}
			/>
		</div>
	);
};
export default Form;
