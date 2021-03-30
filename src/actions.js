
export const createTodo = (text) => ({
	type: "CREATE_TODO",
	payload: {
		text
	}	
})

export const editTodo = (_id, text) => ({
	type: "EDIT_TODO",
	payload: {
		_id,
		text
	}
})

export const removeTodo = (_id) => ({
	type: "REMOVE_TODO",
	payload: {
		_id
	}
})

export const toggleTodo = _id => ({
	type: "TOGGLE_TODO",
	payload: {
		_id
	}
})
