import React from 'react'
import { fireEvent, render, waitFor, act, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components'

describe('App component', () => {
	const initialState = {
		todos: [], 
		filter: {
			showAll: true,
			showCompleted: false,
			showPending: false
		}	
	}

	it('should render App component', () => {
		// Arrange
		const reducer = jest.fn((s, a) => s)
		const testStore = createStore(reducer, initialState)
		
		render(
			<Provider store={testStore}>
				<App />
			</Provider>
		)

		// Act

		// Assert
		expect(screen.getByRole('button')).toHaveTextContent('Add Todo')
		expect(screen.getByPlaceholderText('New Todo')).toBeTruthy()
		
	})
})
