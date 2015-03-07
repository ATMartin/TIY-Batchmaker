import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['user'],
  myUser: Ember.computed.alias('controllers.user.currentUser'),
  recipesMine: function() {
    var self = this;
    return this.get('model').filter(function(recipe) {
      return recipe.author === self.get('myUser').nickname;
    });
  }.property('model'),
  recipesPublic: function() {
    return this.get('model').filter(function(recipe) {
      return recipe.isPublic;
    });
  }.property('model'),
  actions: {
    gotoView: function(model) {
      this.transitionToRoute("recipe.view", model);
    },
    gotoNew: function() {
      this.transitionToRoute("recipe.new");
    }
  }
});
