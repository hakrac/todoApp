
export const logger = state => next => action => {
	console.log(new Date().toISOString(), action)
	return next(action)
}
