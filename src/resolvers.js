"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = WordExpressResolvers;
function WordExpressResolvers(Connectors, publicSettings) {
  var Resolvers = {
    Query: {
      settings: function settings() {
        return publicSettings;
    },
    Category: {
      posts: function posts(category, args) {
        return Connectors.getTermPosts(category.term_id, args);
      }
    },
    Post: {
      layout: function layout(post) {
        return Connectors.getPostLayout(post.id);
      },
      post_meta: function post_meta(post, keys) {
        return Connectors.getPostmeta(post.id, keys);
      },
      thumbnail: function thumbnail(post) {
        return Connectors.getPostThumbnail(post.id);
      },
      author: function author(post) {
        return Connectors.getUser({ userId: post.post_author });
      },
      categories: function categories(post) {
        return Connectors.getPostTerms(post.id);
      }
    },
    Postmeta: {
      connecting_post: function connecting_post(postmeta) {
        return Connectors.getPost(postmeta.meta_value);
      }
    },
    Menu: {
      items: function items(menu) {
        return menu.items;
      }
    },
    MenuItem: {
      navitem: function navitem(menuItem) {
        return Connectors.getPost(menuItem.linkedId);
      },
      children: function children(menuItem) {
        return menuItem.children;
      }
    },
    User: {
      posts: function posts(user, args) {
        var a = _extends({}, args, {
          userId: user.id
        });
        return Connectors.getPosts(a);
      }
    }
  };

  return Resolvers;
}