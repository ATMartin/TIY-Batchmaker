import Ember from 'ember';

export default Ember.Controller.extend({
  recipeTypes: ["Breakfast", "Lunch", "Dinner", "Dessert"],
  ingredientUnits: ["Cups", "(Item)", "Ounces", "Tablespoons", "Teaspoons"],
  tempUnits: ['F', 'C'],
  recipe: {
    steps: [],
    ingredients: [],
    isPublic: false
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
      newIngredient.id = Math.floor(Math.random() * 10000);
      this.get('recipe.ingredients').pushObject(newIngredient);
      this.set('ingredient', {});
    },

    removeIngredient: function(ingId) {
      var ings = this.get('recipe.ingredients');
      var newings = ings.filter(function(i) { if (i.id !== ingId) { return i; } });
      this.set('recipe.ingredients', newings);
    },
    
    makeRecipe: function() {
    //Grab all our inputs
      //  We're doing this dynamically using the "recipe" object above
    //Wrap our input values in an object
      //  Again, dynamic. Thanks, Ember! 
    //Send that object to Parse
      // clear the ids off our ingredients - not needed in our DB.
      var newings = this.get('recipe.ingredients').map(function(i) {
        delete i.id;
        return i;  
      });
      this.set('recipe.ingredients', newings);
      this.parse.push("Recipe", this.get('recipe'));
    //Transition to recipe view
      //  Until we implement the recipe.view template, 
      //  we'll just reset our controller from here:
      this.set('recipe', { steps: [], ingredients: [] });
    }
  }
});

