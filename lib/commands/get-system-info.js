const runUsingCredentials = require('../run-using-credentials');
const { keyToMode } = require('../mode-map');
const { parse } = require('../temperature');

module.exports = async (url, username, password) => {
  await runUsingCredentials(url, username, password, async (page) => {
    await page.goto(url + '?s=1,0');
    await page.waitForSelector('table.info');
    const {keys, values} = await page.evaluate(() => ({
      keys: Array.from(document.querySelectorAll('td.key')).map(n => n.innerText.trim()),
      values: Array.from(document.querySelectorAll('td.value')).map(n => n.innerText.trim())
    }));
    const info = keys.reduce((info, key, i) => {
      const [value, unit] = values[i].split(' ');
      info[key] = {
        unit: unit.trim(),
        value: parse(value)
      };
      return info;
    }, {});

    console.log(JSON.stringify(info, null, 2));
  });
};
