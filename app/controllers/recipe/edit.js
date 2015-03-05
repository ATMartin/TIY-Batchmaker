import Ember from 'ember';

export default Ember.Controller.extend({
  recipeTypes: ["Breakfast", "Lunch", "Dinner", "Dessert"],
  ingredientUnits: ["Cups", "(Item)", "Ounces", "Tablespoons", "Teaspoons"],
  tempUnits: ['F', 'C'],
  stepText: "",
  ingredient: {},
  actions: {
    addStep: function() {
      //  Not sure why I couldn't use this instead of
      //  explicitly setting the steps prop above. :(
      //this.recipe.steps = this.get('recipe.steps') || [];
      var newStep = this.get('stepText');
      this.get('model.steps').pushObject(newStep);
      this.set('stepText', '');
    },
    editRecipe: function(){
      this.parse.update("recipe", this.get('model'));
      console.log("update");
    }
  }
});
