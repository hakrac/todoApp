import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
	addTodo,
	removeTodo,
	editTodo
} from './actions.js'

import './components.scss'


const TodoListItem = () => {

}


const TodoList = () => {
}


const TodoForm = () => {
	let dispatch = useDispatch()
}


const App = () => {
	let dispatch = useDispatch()
	let todos = useSelector(state => state.todos)
	let counter = useSelector(state => state.counter)
	
	let [todoText, setTodoText] = useState('')	
	
	useEffect(async () => {
		await new Promise((res, rej) => {
			setTimeout(() => {
				console.log('test')
				res()
			}, 1000)
		})
	})

	const clickTodo = id => {
		dispatch(removeTodo(id))
	}

	const todolist = todos.map(todo => (
		<li key={todo.id} onClick={() => clickTodo(todo.id)} >{todo.text}</li>
	))

	const setTodo = e => {
		setTodoText(e.target.value)
	}

	const saveTodo = () => {
		dispatch(addTodo(todoText))
		setTodoText('')
	}

	return (
		<div className="container">
			<h1>Todo App</h1>
			<div className="row gx-5">
				<input 
					className="todoInput col-md-10 g-2" 
					type="text" 
					value={todoText} 
					onChange={setTodo} 
					placeholder="New Todo"/>
				<button
					className="btn btn-primary col-md-2 g-2"
					onClick={saveTodo}>
					Add Todo
				</button>
			</div>
			<ul>
				{todolist}
			</ul>
		</div>
	)
}


export default App
