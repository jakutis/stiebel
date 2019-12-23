const commands = require('./commands');

const main = async () => {
  try {
    const cmd = process.argv[2];
    const args = process.argv.slice(3);
    const command = commands[cmd];
    if (command === undefined) {
      throw new Error('Command "' + cmd + '" is not one of the recognized ones: ' + Object.keys(commands).join(', '));
    }

    await command(...args);
  } catch (err) {
    console.log('Failed with error:\n' + (err && err.stack || err));
    process.exit(1);
  }
};

module.exports = main;
