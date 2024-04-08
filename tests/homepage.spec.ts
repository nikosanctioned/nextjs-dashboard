import { test, expect } from '@playwright/test';

test('home page visual test', async ({ page }) => {
  await page.goto('https://www.browsercat.com');
  await expect(page).toHaveScreenshot();
});

// test('home page visual test', async ({ page }) => {
//   await page.goto('https://www.browsercat.com');
//   await expect(page).toHaveScreenshot({
//     // crop the screenshot to a specific area
//     clip: { x: 0, y: 0, width: 400, height: 300 },
//   });
// });

// test('cropped snapshot', async ({ page }) => {
//   const viewportSize = page.viewportSize();
//   if (viewportSize) {
//     const { width, height } = viewportSize;

//     await expect(page).toHaveScreenshot({
//       // square at the center of the page
//       clip: {
//         x: (width - 400) / 2,
//         y: (height - 400) / 2,
//         width: 400,
//         height: 400,
//       },
//     });

//     await expect(page).toHaveScreenshot({
//       // top slice, maximum possible width
//       clip: { x: 0, y: 0, width: Infinity, height: 16 },
//     });
//   }
// });

test('masked snapshots', async ({ page }) => {
  await page.goto('https://www.browsercat.com');
  const $hero = page.locator('main > header');
  const $footer = page.locator('body > footer');

  await expect(page).toHaveScreenshot({
    mask: [
      $hero.locator('img[src$=".svg"]'),
      $hero.locator('a[target="_blank"]'),
    ],
    timeout: 5000,
  });

  await expect($footer).toHaveScreenshot({
    mask: [$footer.locator('svg')],
    timeout: 5000,
  });
});
