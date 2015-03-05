import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateUser: function() {
      this.parse.update("_User", this.get('model'));
      this.transitionToRoute("user.profile", this.get('model'));
    }
  }
});
