const runUsingCredentials = require('../run-using-credentials');
const { keyToMode } = require('../mode-map');

module.exports = (url, username, password) => runUsingCredentials(url, username, password, async (page) => {
  await page.waitForSelector('input.curpoi');
  const modeKey = await page.evaluate(() => {
    const input = window.document.querySelector('input.curpoi');
    return input.getAttribute('value');
  });
  const mode = keyToMode(modeKey);
  if (mode === undefined) {
    throw new Error('Unrecognized mode key: ' + modeKey);
  }
  return mode;
});
