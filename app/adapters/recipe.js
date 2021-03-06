import Ember from "ember";
import ajax from "ic-ajax";


export default Ember.Object.extend({
  find: function(parseClass, id) {
    return ajax("https://api.parse.com/1/classes/" + parseClass + "/" + id)
          .then(function(data) {
              // Convert "objectId" to "id" to play better with Ember
              data.id = data.objectId;
              delete data.objectId;
              return data;
          });
  },

  findAll: function(parseClass) {
    return ajax("https://api.parse.com/1/classes/" + parseClass + "/")
          .then(function(data) {
            return data.results.map(function(obj) {
              obj.id = obj.objectId;
              delete obj.objectId;
              return obj;  
            });  
          });
  },

  findAllByUser: function(parseClass, user) {
    var request = {
      "$or": [
        { 'author': user.nickname },
        { 'isPublic' : true }
      ]
    };
    return ajax({
      url: "https://api.parse.com/1/classes/" + parseClass + "/",
      type: "GET",
      data: "where=" + JSON.stringify(request)
    })
    .then(function(data) {
       return data.results.map(function(obj) {
        obj.id = obj.objectId;
        delete obj.objectId;
        return obj;
       });
    });
  },

  push: function(parseClass, object) {
    return ajax({
            url: "https://api.parse.com/1/classes/" + parseClass + "/",
            type: "POST",
            data: JSON.stringify(object)
          })
          .then(function(data) {
            console.log(data);
            return data;
          });
  },

  update: function(parseClass, object) {
    return ajax({
        url: "https://api.parse.com/1/classes/" + parseClass + "/" + object.id,
        type: "PUT",
        data: JSON.stringify(object)
      })
      .then(function(data) {
        console.log(data);
        return data;  
      });
  }

});
