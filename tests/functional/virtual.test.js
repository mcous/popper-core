/**
 * @jest-environment jest-playwright-preset
 * @flow
 */
import { scroll, screenshot } from '../utils/puppeteer.js';

it('should follow the cursor', async () => {
  await page.goto(`${TEST_URL}/virtual.html`);

  await page.mouse.move(300, 200);

  expect(await screenshot(page)).toMatchImageSnapshot();
});