import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editUser: function() {
      this.transitionToRoute("user.edit", this.get('model'));
    }
  }
});
