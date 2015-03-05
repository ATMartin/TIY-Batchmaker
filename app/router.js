import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('user', { path: '/user' }, function() {
    this.route('login');
    this.route('profile', { path: '/:user_id' });
    this.route('edit', { path: '/edit/:user_id' });
  });
  this.resource('recipe', { path: '/recipe' }, function() {
    this.route('new');
    this.route('view', { path: '/view/:recipe_id' });
  });
});

export default Router;
