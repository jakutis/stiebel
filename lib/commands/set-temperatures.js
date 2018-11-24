const runUsingCredentials = require('../run-using-credentials');
const { stringify } = require('../temperature');

const waitForConfirmAndReload = async (page) => {
  await page.waitForFunction(() => {
    const iframe = document.querySelector('#TB_window iframe#TB_iframeContent');
    if (!iframe || !iframe.contentDocument) {
      return false;
    }
    const button = iframe.contentDocument.querySelector('#confirm .button3.right');
    if (!button) {
      return false;
    }
    return true;
  });

  await page.reload();
};

const setTemperatures = async (page, url, comfortField, economyField, comfortValue, economyValue) => {
  await page.goto(url);
  await page.evaluate((field, value) => document.querySelector('#val' + field).value = value, comfortField, stringify(comfortValue));
  await page.evaluate((field, value) => document.querySelector('#val' + field).value = value, economyField, stringify(economyValue));
  await page.evaluate(() => document.forms['werte'].onsubmit());
  await waitForConfirmAndReload(page);
};

module.exports = async (url, username, password, cr, chw, er, ehw) => {
  await runUsingCredentials(url, username, password, async (page) => {
    await setTemperatures(page, url + '?s=4,0', '16', '17', parseFloat(cr), parseFloat(er));
    await setTemperatures(page, url + '?s=4,1', '22', '23', parseFloat(chw), parseFloat(ehw));
  });
};
