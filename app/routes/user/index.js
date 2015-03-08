import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      var myUser = this.controllerFor('user').currentUser;
      //return this.parse.findAllByUser('Recipe', myUser);
      return this.parse.findAll('Recipe');
    }
});
