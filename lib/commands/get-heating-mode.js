const puppeteer = require('puppeteer');

const modes = {
  'PROGRAMMED OPERATION': 'programmed',
  'COMFORT MODE': 'comfort',
  'ECO MODE': 'economy',
  'DHW MODE': 'domestic-hot-water',
  'EMERGENCY OPERATION': 'emergency',
  'STANDBY MODE': 'standby'
};

module.exports = async (url, username, password) => {
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
    await page.waitForSelector('input.curpoi');
    const modeKey = await page.evaluate(() => {
      const input = window.document.querySelector('input.curpoi');
      return input.getAttribute('value');
    });
    const mode = modes[modeKey];
    if (mode === undefined) {
      throw new Error('Unrecognized mode key: ' + modeKey);
    }
    console.log(mode);
  } finally {
    await browser.close();
  }
};
