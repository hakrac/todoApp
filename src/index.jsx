import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'


import App from './components'
import reducer from './reducers'
import { logger } from './middleware'
import mySaga from './sagas'

import './style.scss'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))

sagaMiddleware.run(mySaga)

store.dispatch({type: 'REQUEST_TODOS'})

ReactDOM.render(
	<Provider store={store}>
		<App ></App>
	</Provider>,
	document.getElementById('root')
)
