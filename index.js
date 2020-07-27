"use strict";
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/tutor", function(req, res) {
    res.render("./partials/tutor");
  });
};
