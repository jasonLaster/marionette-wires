var Marionette = require('backbone.marionette');
var Backbone = require('backbone');

module.exports = Marionette.Module.extend({
  constructor: function() {
    this.listenTo(Backbone.history, 'route', this._onHistoryRoute);
    Marionette.Module.apply(this, arguments);
  },

  initialize: function() {},

  _onHistoryRoute: function(router) {
    if (!this.router) {
      return;
    }

    if (this.router && this.router === router) {
      this.start();
    } else {
      this.stop();
    }
  }
});
