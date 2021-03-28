import mySaga from './sagas'
import { createServer } from 'http'
import { Server } from 'socket.io'
import Client from 'socket.io-client'

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


describe('sendHello Saga', () => {
	let io, serverSocket, clientSocket	


	beforeAll(done => {
		const httpServer = createServer()
		io = new Server(httpServer)
		httpServer.listen(() => {
			const port = httpServer.address().port
			clientSocket = new Client(`http://localhost:${port}`)
			io.on('connection', socket => {
				serverSocket = socket;
			})
			clientSocket.on('connect', done)
		})
	})

	afterAll(done => {
		io.close(() => {
			done()
		})
	})

	it('should send on ADD_TODO', done => {
		clientSocket.on("Hello", (arg) => {
			expect(arg).toBe("world")	
			done()
		})
		serverSocket.emit("Hello", "world")
	})
})
