import Ember from "ember";

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "bXNSlVbask5hvw9sSgoaJYAiqvaf5h2SYF7QNIOU",
      "X-Parse-REST-API-Key": "Z7sME6CGYsuD8Yxh5G6hy9EEZs0Mqy4OavqNQmR2"
    }
  });
};

export default {
  name: 'parse-keys',
  initialize: initialize
};
