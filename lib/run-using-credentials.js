const puppeteer = require('puppeteer');
const { execSync } = require('child_process');

const runUsingCredentials = async (url, username, password, fn) => {
  let chromium;
  for (const bin of ['chromium-browser', 'chromium', 'google-chrome']) {
    if (chromium !== undefined) {
      break;
    }
    try {
      chromium = execSync(`which ${bin}`).toString().trim();
    } catch (err) {
    }
  }
  const browser = await puppeteer.launch({
    headless: true,
    devtools: false,
    executablePath: chromium,
    args: [
      '--no-sandbox'
    ]
  });
  try {
    const page = (await browser.pages())[0];
    await page.goto(url);
    await page.type('input[name="user"]', username);
    await page.type('input[name="pass"]', password);
    await page.click('.button.right');
    await fn(page);
  } finally {
    await browser.close();
  }
};

module.exports = runUsingCredentials;
