import { combineReducers } from 'redux'

const nextTodoId = state => {
	const maxId = state.todos.reduce((max, todo) => Math.max(max, todo.id), -1)
	return maxId + 1
}

const initialState = {
	todos: [],
	filter: {
		showAll: true,
		showCompleted: false,
		showActive: false
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "ADD_TODO":
			return {
				...state,
				todos: [
					...state.todos,
					{
						...action.payload
					}
				]
			}
		case "EDIT_TODO":
			return {
				...state,
				todos: [
					...state.todos.filter(t => t._id !== action.payload._id),
					{
						id: action.payload.id,
						text: action.payload.text,
						completed: action.payload.completed
					}
				]
			}
		case "REMOVE_TODO":
			return {
				...state,
				todos: [
					...state.todos.filter(t => t._id !== action.payload._id)
				]
			}
		case "TOGGLE_TODO":
			const todo = state.todos.find(t => t._id == action.payload._id) 
			return {
				...state,
				todos: [
					...state.todos.filter(t => t._id !== action.payload._id),
					{
						...todo,
						completed: !todo.completed
					}
				]
			}
		case "LOAD_TODOS":
			return {
				...state,
				todos: action.payload.todos
			}
		case "SHOW_COMPLETED":
			return {
				...state,
				filter: {
					showCompleted: true,
					showPending: false,
					showAll: false
				}
			}
		case "SHOW_PENDING":
			return {
				...state,
				filter: {
					showCompleted: false,
					showPending: true,
					showAll: false
				}
			}
		case "SHOW_ALL":
			return {
				...state,
				filter: {
					showCompleted: false,
					showPending: false,
					showAll: true
				}
			}
		default:
			return state
	}
}



export default reducer
