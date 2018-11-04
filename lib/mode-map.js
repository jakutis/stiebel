const keyToMode = {
  'PROGRAMMED OPERATION': 'programmed',
  'COMFORT MODE': 'comfort',
  'ECO MODE': 'economy',
  'DHW MODE': 'domestic-hot-water',
  'EMERGENCY OPERATION': 'emergency',
  'STANDBY MODE': 'standby'
};
const modeToKey = Object.keys(keyToMode).reduce((modeToKey, key) => {
  modeToKey[keyToMode[key]] = key;
  return modeToKey;
}, {});

exports.keyToMode = (key) => {
  return keyToMode[key];
};

exports.modeToKey = (mode) => {
  return modeToKey[mode];
};
