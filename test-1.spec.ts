import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(
    'https://pimento-mks-dev-opp-stage.apps.lmru.tech/mks/models',
  );
  await page.goto(
    'https://auth-opp-stage.apps.lmru.tech/login?redirectLoginSiteUri=http://pimento-mks-dev-opp-stage.apps.lmru.tech/auth/login',
  );
  await page.goto('chrome-error://chromewebdata/');
  await page.getByRole('button', { name: 'Advanced' }).click();
  await page
    .getByRole('link', { name: 'Proceed to t-legoauth-as02.hq' })
    .click();
  await page.getByPlaceholder('LDAP').fill('60126606');
  await page.getByPlaceholder('LDAP').press('Tab');
  await page.getByPlaceholder('Password').fill('mikpuk-1!');
  await page.getByPlaceholder('Password').press('Enter');
});
