const runUsingCredentials = require('../run-using-credentials');
const { modeToKey } = require('../mode-map');

module.exports = async (url, username, password, mode) => {
  await runUsingCredentials(url, username, password, async (page) => {
    await page.waitForSelector('#val1edit .edit');
    await page.click('#val1edit .edit');
    await page.waitForSelector('#val1edit label');
    await page.evaluate(key => {
      const labels = [...document.querySelectorAll('#val1edit label')];
      const i = labels.findIndex(e => e.textContent === key)
      labels[i].click();
      document.querySelector('.save_black_middle').click();
    }, modeToKey(mode));
    await page.waitForSelector('#TB_iframeContent');
  });
};
