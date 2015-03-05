import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['user'],
  isAuth: Ember.computed.alias('controllers.user.currentUser'),
  username: '',
  password: '',
  userObject: function() {
    return {
      username: this.get('username'),
      password: this.get('password') 
    };
  }.property('username', 'password'),
  actions: {
    resetInputs: function() {
      this.set('username', '');
      this.set('password', '');
    },
    login: function() {
      var self = this;
      return Ember.$.ajax({
        url: "https://api.parse.com/1/login",
        type: "GET",
        data: this.get('userObject')  
      }).then(function(data) {
        self.set("isAuth", data);
        Ember.$.ajaxSetup({
          headers: {
            "X-Parse-Session-Token": data.sessionToken
          }
        });
        console.log("Logged in!");
        data.id = data.objectId;
        delete data.objectId;
        self.set('username', '');
        self.set('password', '');
        self.send('reload');
        self.transitionToRoute("user.profile", data);
      });
    },
    logout: function() {
      this.set("isAuth", null);
      Ember.$.ajaxSetup({
        headers: {
          "X-Parse-Session-Token": null
        }  
      });
      console.log("Logged out!");
      this.set('username', '');
      this.set('password', '');
      this.send("reload"); 
    },
    newUser: function() {
      return Ember.$.ajax({
        url: "https://api.parse.com/1/users",
        type: "POST",
        data: JSON.stringify(this.get('userObject')) 
      }).then(function(data) { 
        console.log(data); 
        });
      }
  }
});
