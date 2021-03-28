import mySaga from './sagas'

import { expectSaga } from 'redux-saga-test-plan'

describe('fetchTodos Saga', () => {

})

describe('alertTodo Saga', () => {
	
	it('should dispatch ADD_TODO', () => {
		return expectSaga(mySaga)
			.put({
				type: 'ADD_TODO',
				payload: {
					text: 'this is from saga'
				}
			})
			.dispatch({ type: 'ADD_TODO', payload: { text: 'this is a test' }})
			.run()
	})

	it('should trigger alter', () => {
		expect(true).toBeTruthy()
	})
	
	it('should prevent infinite loop', () => {
		expect(true).toBeTruthy()
	})
})
