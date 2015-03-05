import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //console.log(this.controllerFor("user").get("currentUser"));
    return this.controllerFor("user").get("currentUser");
  }
});
