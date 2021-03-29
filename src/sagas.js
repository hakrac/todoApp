import {put, takeEvery, takeLatest, call} from 'redux-saga/effects'
import { io } from 'socket.io-client'

let socket = io('http://localhost:4001')

const api = {
	send: text => {
		socket.emit('Hello', text)
	}
}

export function* alertTodo(action) {
	if (action.payload.text == 'this is from saga') {
		return
	}

	yield put({type: 'ADD_TODO', payload: { text: 'this is from saga' }})
}


export function* fetchTodos(action) {
	const todos = yield fetch('http://localhost:4001/todos')
			.then(res => res.json())
			.then(res => res.todos)
	yield put({type: 'LOAD_TODOS', payload: {todos}})
}

export function* postTodo(action) {
	const data = {
		todos: [
			{
				text: action.payload.text,
				id: 99,
				completed: false
			}
		]	
	}

	const todos = yield fetch('http://localhost:4001/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
}

function* sendHello(action) {
	if (socket) {
		yield call(api.send, action.payload.text)
	}
}

function* mySaga() {
	yield takeEvery('ADD_TODO', alertTodo)
	yield takeEvery('ADD_TODO', sendHello)
	// yield takeEvery('ADD_TODO', postTodo)
	// yield takeEvery('REQUEST_TODOS', fetchTodos)
}



export default mySaga

