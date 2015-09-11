'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (fox) {
  fox.add(function (res) {
    if (res.text === 'hello') res.reply('world');
  });
};

module.exports = exports['default'];