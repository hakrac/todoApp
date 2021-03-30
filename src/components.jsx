import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
	createTodo,
	removeTodo,
	editTodo,
	toggleTodo
} from './actions.js'

import './components.scss'


const TodoListItem = ({text, _id}) => {
	const dispatch = useDispatch()

	const clickRemove = () => {
		dispatch(removeTodo(_id))
	}
	
	const clickComplete = () => {
		dispatch(toggleTodo(_id))
	}
	
	return (
		<li className="todoItem rounded mt-2 d-flex justify-content-between align-items-center">
			<span className="px-2">{text}</span>
			<button
				onClick={clickComplete}
				className="btn btn-success btn-complete">
				Complete
			</button>
			<button
				onClick={clickRemove}
				className="btn btn-danger btn-remove">
				Remove
			</button>
		</li>
	)
}


const TodoList = () => {
	let f = useSelector(state => state.filter)
	let todos = useSelector(state => state.todos)
					.filter(t => t.completed == f.showCompleted || !t.completed == f.showPending || f.showAll)
	

	return (
		<ul 
			id="todoList"
			className="mt-4">
			{todos.map((t, i) => 
				<TodoListItem key={i} text={t.text} _id={t._id}/>
			)}
		</ul>
	)
}


const TodoForm = () => {
	let dispatch = useDispatch()
	let [text, setText] = useState("")

	const submit = e => {
		dispatch(createTodo(text))
		setText("")
	}

	return (
		<form className="row g-2">
			<div className="col-md-9">
				<input
					value={text}
					onChange={e => setText(e.target.value)}
					id="todoInput"
					placeholder="New Todo"
					type="text"
					className="form-control" />
			</div>
			<div className="col-md-3">
				<button
					id="addButton"
					className="btn btn-primary"
					onClick={submit}
					type="submit">
					Add Todo
				</button>
			</div>
		</form>
	)
}

const FilterControl = () => {
	let filter = useSelector(state => state.filter)
	let dispatch = useDispatch()	

	const showAll = () => {
		dispatch({
			type: "SHOW_ALL"
		})
	}
	
	const showCompleted = () => {
		dispatch({
			type: "SHOW_COMPLETED"
		})
	}
	
	const showPending = () => {
		dispatch({
			type: "SHOW_PENDING"
		})
	}

	return (
		<ul className="nav nav-pills my-3">
			<li className="nav-item" role="presentation">
    			<button 
					className={`nav-link ${ filter.showAll ? 'active': ''}`}
					type="button" 
					role="tab"
					onClick={showAll}
					aria-selected="true">
						All
				</button>
  			</li>
			<li className="nav-item" role="presentation">
				<button
					className={`nav-link ${ filter.showCompleted ? 'active' : ''}`}
					type="button"
					role="tab"
					onClick={showCompleted}>
					Completed
				</button>
			</li>
			<li>
				<button
					className={`nav-link ${ filter.showPending ? 'active': ''}`}
					type="button"
					role="tab"
					onClick={showPending}>
					Pending
				</button>
			</li>
		</ul>
	)
}


const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand mb-0 h1" href="#">Todo App</a>
			</div>
		</nav>
	)
}

const App = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-3">
				<TodoForm />
				<FilterControl />
				<TodoList />
			</div>
		</>
	)
}


export default App
