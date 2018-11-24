const runUsingCredentials = require('../run-using-credentials');
const { parse } = require('../temperature');

const getTemperatures = async (page, url, comfortField, economyField) => {
  await page.goto(url);
  return {
    comfort: parse(await page.evaluate(field => document.querySelector('#val' + field).value, comfortField)),
    economy: parse(await page.evaluate(field => document.querySelector('#val' + field).value, economyField))
  };
};

module.exports = async (url, username, password, cr, chw, er, ehw) => {
  await runUsingCredentials(url, username, password, async (page) => {
    console.log(JSON.stringify({
      room: await getTemperatures(page, url + '?s=4,0', '16', '17'),
      hotWater: await getTemperatures(page, url + '?s=4,1', '22', '23')
    }, null, 2));
  });
};
