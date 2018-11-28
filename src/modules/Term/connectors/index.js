'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var Terms = _ref.Terms;

  return {
    getTerm: (0, _getTerm2.default)(Terms)
  };
};

var _getTerm = require('./getTerm');

var _getTerm2 = _interopRequireDefault(_getTerm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }