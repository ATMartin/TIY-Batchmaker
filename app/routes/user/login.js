import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.controllerFor("user").get("currentUser");
  },
  actions: {
    reload: function() {
      this.refresh();
    }
  }
});
