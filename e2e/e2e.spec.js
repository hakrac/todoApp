import 'expect-puppeteer'
import path from 'path'
import { getDocument, queries, waitFor } from 'pptr-testing-library' 

const { getByText, getByPlaceholderText } = queries

describe('e2e todo app test', () => {
	
	beforeEach(async () => {
		await page.goto('http://localhost:4000')
	})

	it('should load the page', async () => {
		let document = await getDocument(page)
		await page.screenshot({path: path.resolve(__dirname, '../output/screenshot.png')})
		
		let button = await getByText(document, 'Add Todo')
		let input = await getByPlaceholderText(document, 'New Todo')

		await input.type('Todo #1')
		await button.click()
		
		await page.screenshot({ path: path.resolve(__dirname, '../output/newTodo.png')})
	})
})
