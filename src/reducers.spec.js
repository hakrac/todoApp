import reducer from './reducers.js'


describe('todo reducers', () => {
	const initialState = {
		todos: [],
		filter: {}
	}	
	
	it('should return state by reference without action', () => {
		// act
		let state = reducer(initialState, { type: '' })
		
		// assert
		expect(state).toBe(initialState)
	})
	
	it('should add todo to state', () => {
		const todo = {
			text: 'test all actions',
			completed: false,
			_id: 1
		}	
	
		// act
		let state = reducer(initialState, { 
			type: 'ADD_TODO',
			payload: todo
		})
		
		// assert
		expect(state.todos).toContainEqual(todo)
		
	})

})
