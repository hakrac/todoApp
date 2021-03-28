import reducer from './reducers.js'


describe('todo reducers', () => {

	it('should return state by reference without action', () => {
		// prepare
		const initialState = {
			todos: [],
			filter: {}
		}		

		// act
		let state = reducer(initialState, { type: '' })
		
		// assess
		expect(state).toBe(initialState)
	})

})
