const path = require('path')


module.exports = {
	preset: 'jest-puppeteer',
	setupFiles: [
		path.resolve(__dirname, './src/polyfills.js')
	],
	globals: {
		URL: 'http://localhost:3000'
	},
	testPathIgnorePatterns: [
		'<rootDir>/src'
	],
	testMatch: [
		'<rootDir>/e2e/*.spec.js'
	]
}
