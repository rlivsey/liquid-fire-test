import Ember from 'ember';

export default Ember.Controller.extend({
  foo: false,

  actions: {
    launch: function() {
      this.toggleProperty("foo");
    }
  }
});