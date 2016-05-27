import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  sections: Ember.computed(function() {
    return this.get('store').findAll('section');
  }),
});
