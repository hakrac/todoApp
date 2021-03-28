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
						id: nextTodoId(state),
						text: action.payload.text,
						completed: false
					}
				]
			}
		case "EDIT_TODO":
			return {
				...state,
				todos: [
					...state.todos.filter(t => t.id !== action.payload.id),
					{
						id: action.payload.id,
						text: action.payload.text,
						completed: false
					}
				]
			}
		case "REMOVE_TODO":
			return {
				...state,
				todos: [
					...state.todos.filter(t => t.id !== action.payload.id)
				]
			}
		case "TOGGLE_TODO":
			const todo = state.todos.find(t => t.id == action.payload.id) 
			return {
				...state,
				todos: [
					...state.todos.filter(t => t.id !== action.payload.id),
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
		default:
			return state
	}
}



export default reducer
