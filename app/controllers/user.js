import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: null,
  userCreatedAt: function() {
    console.log("New created at!");
    return new Date();
  }.property('currentUser'),
  timeSinceCreation: function() {
    return Date.now() - this.get('userCreatedAt');
  }

});
