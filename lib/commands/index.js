const getHeatingMode = require('./get-heating-mode');
const setHeatingMode = require('./set-heating-mode');
const getSystemInfo = require('./get-system-info');
const setTemperatures = require('./set-temperatures');
const getTemperatures = require('./get-temperatures');

exports['get-system-info'] = getSystemInfo;
exports['get-heating-mode'] = getHeatingMode;
exports['set-heating-mode'] = setHeatingMode;
exports['set-temperatures'] = setTemperatures;
exports['get-temperatures'] = getTemperatures;
