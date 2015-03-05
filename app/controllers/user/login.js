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
    login: function() {
      var self = this;
      return Ember.$.ajax({
        url: "https://api.parse.com/1/login",
        type: "GET",
        data: this.get('userObject')  
      }).then(function(data) {
        //console.log(data);
        self.set("isAuth", data);
        Ember.$.ajaxSetup({
          headers: {
            "X-Parse-Session-Token": data.sessionToken
          }
        });
      });
    },
    logout: function() {
      this.set("isAuth", null);
      Ember.$.ajaxSetup({
        headers: {
          "X-Parse-Session-Token": null
        }  
      });
      console.log(this.get('model'));
      console.log("Logged out!");
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
