import Ember from 'ember';

export default Ember.Component.extend({
  description: Ember.computed('product.name', 'product.cost', function() {
    return this.get('product.name') + ' for ' + this.get('product.cost');
  })
});
