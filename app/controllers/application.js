import Ember from 'ember';

export default Ember.Controller.extend({
  foo: false,
  post: Ember.Object.create(),

  actions: {
    launch: function() {
      this.toggleProperty("foo");
    }
  }
});