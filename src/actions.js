
export const addTodo = (text) => ({
	type: "ADD_TODO",
	payload: {
		text: text
	}	
})

export const editTodo = (id, text) => ({
	type: "EDIT_TODO",
	payload: {
		id,
		text
	}
})

export const removeTodo = (id) => ({
	type: "REMOVE_TODO",
	payload: {
		id
	}
})

export const toggleTodo = id => ({
	type: "TOGGLE_TODO",
	payload: {
		id
	}
})
