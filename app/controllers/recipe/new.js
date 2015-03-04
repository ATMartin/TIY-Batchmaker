import Ember from 'ember';

export default Ember.Controller.extend({
  recipeTypes: ["Breakfast", "Lunch", "Dinner", "Dessert"],
  ingredientUnits: ["Cups", "(Item)", "Ounces", "Tablespoons", "Teaspoons"],
  tempUnits: ['F', 'C'],
  recipe: {
    steps: [],
    ingredients: []
  },
  ingredient: {},
  actions: {
    addStep: function() {
      //  Not sure why I couldn't use this instead of 
      //  explicitly setting the steps prop above. :( 
      //this.recipe.steps = this.get('recipe.steps') || [];
      var newStep = this.get('recipe.stepText');
      this.get('recipe.steps').pushObject(newStep);
      this.set('recipe.stepText', '');
    },

    addIngredient: function() {
      var newIngredient = this.get('ingredient');
      // Flag the ingredient if it doesn't require a unit identifier
      // Ex:    Egg.isItem  == true   ("I need one egg")
      //        Milk.isItem == false  ("I need one GALLON OF milk")
      if (newIngredient.units === "(Item)") {
        newIngredient.isItem = true;
      }
      this.get('recipe.ingredients').pushObject(newIngredient);
      this.set('ingredient', {});
    },
    
    makeRecipe: function() {
    //Grab all our inputs
      //  We're doing this dynamically using the "recipe" object above
    //Wrap our input values in an object
      //  Again, dynamic. Thanks, Ember! 
    //Send that object to Parse
      this.parse.push("Recipe", this.get('recipe'));
    //Transition to recipe view
      //  Until we implement the recipe.view template, 
      //  we'll just reset our controller from here:
      this.set('recipe', { steps: [], ingredients: [] });
    }
  }
});

