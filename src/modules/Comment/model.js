'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Conn, prefix) {
  return Conn.define(prefix + 'comments', {
    comment_ID: { type: _sequelize2.default.INTEGER, primaryKey: true, field: 'comment_ID' },
    comment_post_ID: { type: _sequelize2.default.INTEGER },
    comment_author: { type: _sequelize2.default.STRING },
    comment_date: { type: _sequelize2.default.STRING },
    comment_content: { type: _sequelize2.default.STRING },
    user_id: { type: _sequelize2.default.INTEGER },
  }); 
};

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }