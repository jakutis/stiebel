const puppeteer = require('puppeteer');

const runUsingCredentials = async (url, username, password, fn) => {
  const browser = await puppeteer.launch({
    headless: true,
    devtools: false,
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
