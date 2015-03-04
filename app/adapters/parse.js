import Ember from "ember";
import ajax from "ic-ajax";


export default Ember.Object.extend({
  find: function(name, id) {
    return ajax("https://api.parse.com/1/classes/" + name + "/" + id)
          .then(function(data) {
            return data.results.map(function(obj) {
              // Convert "objectId" to "id" to play better with Ember
              obj.id = obj.objectId;
              delete obj.objectId;
              return obj;
            });
          });
  },

  findAll: function(name) {
    return ajax("https://api.parse.com/1/classes/" + name + "/")
          .then(function(data) {
            return data.results.map(function(obj) {
              obj.id = obj.objectId;
              delete obj.objectId;
              return obj;  
            });  
          });
  }

});
