import Ember from 'ember';
import config from './config/environment';

console.log(config);

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
});

export default Router;
