"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Terms, TermRelationships, settings) {
  var wp_prefix = settings.privateSettings.wp_prefix;


  return function (postId) {
    return TermRelationships.findAll({
      where: {
        object_id: postId
      },
      include: [{
        model: Terms
      }]
    }).then(function (relationships) {
      return relationships.map(function (r) {
        return r.dataValues[wp_prefix + "term"];
      });
    });
  };
};