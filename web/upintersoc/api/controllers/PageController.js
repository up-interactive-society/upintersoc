/**
 * PageController
 *
 * @description :: Server-side logic for managing Pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  home:  function(req, res) {
    res.view('homepage');
  },

  login:  function(req, res) {
    res.view('login');
  },

  logout:  function(req, res) {
    res.view('logout');
  },

  signup:  function(req, res) {
    res.view('signup');
  }
};

