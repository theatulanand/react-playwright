import { test, expect } from '@playwright/experimental-ct-react';
import App from './Counter.jsx';
const counterSelector = '[data-cy="counter"]';
const incrementSelector = "[aria-label=increment]";
const decrementSelector = "[aria-label=decrement]";
test.use({ viewport: { width: 500, height: 500 } });

test('Two time Increment in the Counter ', async ({ mount }) => {
    const component = await mount(<App/>);
  await component.locator(incrementSelector).click();
    await expect(component.locator(counterSelector)).toHaveText('1');
    await component.locator(incrementSelector).click();
    await expect(component.locator(counterSelector)).toHaveText('2');
});

test('Increment then the decrement the Counter ', async ({ mount }) => {
    const component = await mount(<App/>);
  await component.locator(incrementSelector).click();
    await expect(component.locator(counterSelector)).toHaveText('1');
    await component.locator(decrementSelector).click();
    await expect(component.locator(counterSelector)).toHaveText('0');
});