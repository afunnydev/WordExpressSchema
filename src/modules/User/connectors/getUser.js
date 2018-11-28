"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (User) {
  return function (_ref) {
    // Change userId for id - AKIA. Also added an email field
    var userId = _ref.id,
        name = _ref.name,
        email = _ref.email;


    var where = {};

    if (userId) {
      where.ID = userId;
    }

    if (name) {
      where.user_nicename = name;
    }

    if (email) {
      where.user_email = email;
    }

    return User.findOne({
      where: where
    });
  };
};