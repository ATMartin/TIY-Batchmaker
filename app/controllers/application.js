import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['user'],
  model: Ember.computed.alias('controllers.user.currentUser'),
  actions: { 
    logout: function() {
      this.set('model', null);
      Ember.$.ajaxSetup({
        headers: {
          "X-Parse-Session-Token": null
        }  
      });
      console.log("Logged out!");
    },
  }
});
