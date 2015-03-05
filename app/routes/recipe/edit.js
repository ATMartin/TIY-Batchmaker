import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
  return this.parse.find("Recipe", params.recipe_id);
  }
});
