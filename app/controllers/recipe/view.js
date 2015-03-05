import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editRecipe: function(){
    this.transitionToRoute("recipe.edit", this.get('model'));
    }
  }
});
