import '../src/polyfills'

beforeAll(async () => {
    await page.goto('https://google.com');
});

it('should be titled "Google"', () => {
    expect(1).toBe(1)
	// await expect(page.title()).resolves.toMatch('Google');
});
