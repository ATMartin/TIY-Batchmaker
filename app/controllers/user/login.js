import Ember from 'ember';

export default Ember.ObjectController.extend({
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
      alert("login");
    },
    newUser: function() {
      return Ember.$.ajax({
        url: "https://api.parse.com/1/users",
        type: "POST",
        data: JSON.stringify(this.get('userObject')) 
      }).then(function(data) { 
        console.log(data); 
        Ember.$.ajaxSetup({
          headers: {
            "X-Parse-Session-Token": data.sessionToken
          }
        });
      });
    }
  }

});
