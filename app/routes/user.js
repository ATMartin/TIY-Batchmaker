import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {};
  },
  afterModel: function() {
    if (this.controllerFor('user').get("currentUser") === null) {
      this.transitionTo("user.login");
    }
  }
});
