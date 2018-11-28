'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (TermRelationships, Post, settings) {
  var wp_prefix = settings.privateSettings.wp_prefix;


  return function (termId, _ref) {
    var post_type = _ref.post_type,
        order = _ref.order,
        _ref$limit = _ref.limit,
        limit = _ref$limit === undefined ? 10 : _ref$limit,
        _ref$skip = _ref.skip,
        skip = _ref$skip === undefined ? 0 : _ref$skip;

    var orderBy = order ? [Post, order.orderBy, order.direction] : [Post, 'post_date', 'DESC'];
    return TermRelationships.findAll({
      attributes: [],
      include: [{
        model: Post,
        where: {
          post_type: post_type,
          post_status: 'publish'
        }
      }],
      where: {
        term_taxonomy_id: termId
      },
      order: [orderBy],
      limit: limit,
      offset: skip
    }).then(function (posts) {
      var p = (0, _lodash.map)(posts, function (post) {
        return post[wp_prefix + 'post'];
      });
      return p;
    });
  };
};

var _lodash = require('lodash');