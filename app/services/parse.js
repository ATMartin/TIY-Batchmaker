import Ember from 'ember';

export default Ember.Object.extend({
  find: function(context, id) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.find(context, id);
  },

  findAll: function(context) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.findAll(context);
  },

  push: function(context, object) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.push(context, object);
  },

  update: function(context, object) {
    var adapter = this.container.lookup('adapter:' + context);
    return adapter.update(context, object);
  }

});
