import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';

test.use({ viewport: { width: 500, height: 500 } });

test('Verify the text in React Page ', async ({ mount }) => {
    const component = await mount(<App />);
    await expect(component).toContainText('Learn React');
    await expect(component).toContainText('save to reload');
});