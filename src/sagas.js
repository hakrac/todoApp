import { put, takeEvery, takeLatest, call } from 'redux-saga/effects'
import { io } from 'socket.io-client'

let socket = io(SERVER_URL)

const api = {
	send: (type, arg) => {
		socket.emit(type, arg)
	}
}

export function* alertTodo(action) {
	if (action.payload.text == 'this is from saga') {
		return
	}

	yield put({type: 'ADD_TODO', payload: { text: 'this is from saga' }})
}


export function* fetchTodos(action) {
	const todos = yield fetch(`${SERVER_URL}/todos`)
			.then(res => res.json())
			.then(res => res.todos)
	yield put({type: 'LOAD_TODOS', payload: {todos}})
}

export function* postTodo(action) {
	const data = {
		todos: [
			{
				text: action.payload.text,
				completed: false
			}
		]	
	}

	const todo = yield fetch(`${SERVER_URL}/todos`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(res => res.todos[0])

	yield put({
		type: 'ADD_TODO',
		payload: {
			...todo
		}
	})
}

function* deleteTodo(action) {
	yield fetch(`${SERVER_URL}/todo/${action.payload._id}`, {
		method: 'DELETE'
	})
}

function* mySaga() {
	yield takeEvery('CREATE_TODO', postTodo)
	yield takeEvery('REMOVE_TODO', deleteTodo)
	yield takeEvery('REQUEST_TODOS', fetchTodos)
}

export default mySaga

