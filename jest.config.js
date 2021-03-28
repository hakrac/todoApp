const path = require('path')

module.exports = {
	setupFiles: [
		path.resolve(__dirname, './src/polyfills.js')
	],
	moduleNameMapper: {
		"\\.(css|scss|sass)": path.resolve(__dirname, '__mocks__/style.js')
	}
}
