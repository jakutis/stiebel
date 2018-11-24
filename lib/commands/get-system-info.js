const runUsingCredentials = require('../run-using-credentials');
const { keyToMode } = require('../mode-map');

module.exports = async (url, username, password) => {
  await runUsingCredentials(url, username, password, async (page) => {
    await page.goto(url + '?s=1,0');
    await page.waitForSelector('table.info');
    const info = await page.evaluate(() => {
      const keys = Array.from(document.querySelectorAll('td.key')).map(n => n.innerText);
      const values = Array.from(document.querySelectorAll('td.value')).map(n => n.innerText);
      return keys.reduce((info, key, i) => {
        const [value, unit] = values[i].split(' ');
        info[key.trim()] = {
          unit: unit.trim(),
          value: parseFloat(value.trim().split(',').join('.'))
        };
        return info;
      }, {});
    });
    console.log(JSON.stringify(info, null, 2));
  });
};
