import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application, recipeData;

Ember.Test.registerAsyncHelper('fillInRecipeForm',
  function(app, data, context) {
    fillIn('.newRecipe_name', data.name); 
    fillIn('.newRecipe_author', data.author);
    fillIn('.newRecipe_type', data.type);
    fillIn('.newRecipe_timePrep', data.timePrep);
    fillIn('.newRecipe_timeCook', data.timeCook);
    fillIn('.newRecipe_temp', data.temp);
    fillIn('.newRecipe_tempUnits', data.tempUnits);
    fillIn('.newRecipe_yieldQty', data.yieldQty);
    fillIn('.newRecipe_yieldName', data.yieldName);

    data.steps.forEach(function(step) {
      fillIn('.newRecipe_stepText', step); 
    });
  }
);

module('Acceptance: CreateARecipe', {
  beforeEach: function() {
    application = startApp();
    recipeData = {
      name: "Test Cake",
      author: "GLADoS",
      type: "Dessert",
      timePrep: "30",
      timeCook: "45",
      temp: "350",
      tempUnits: "F",
      steps: ["Cut a hole in the cake", "Put your junk in that cake", "Make her open the cake"],
      yieldQty: "1",
      yieldName: "Delicious Cake"
    };
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /create-a-recipe', function(assert) {
  visit('/recipe/new');

  andThen(function() {
    assert.equal(currentPath(), 'recipe.new');
  });
});

