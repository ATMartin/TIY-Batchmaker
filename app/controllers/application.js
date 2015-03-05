import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['user'],
  model: Ember.computed.alias('controllers.user.currentUser'),
});
