var path = require('path');

module.exports = function (fox) {
  fox.load(path.join(__dirname, '/lib'));
};
