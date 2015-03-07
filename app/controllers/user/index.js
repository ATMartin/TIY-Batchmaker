import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['user'],
  myUser: Ember.computed.alias('controllers.user.currentUser'),
  actions: {
    gotoView: function(model) {
      this.transitionToRoute("recipe.view", model);
    }
  }
});
