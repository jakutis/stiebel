module.exports = {
  stringify: temperature => temperature.toFixed(1).split('.').join(','),
  parse: temperature => parseFloat(temperature.trim().split(',').join('.'))
};
