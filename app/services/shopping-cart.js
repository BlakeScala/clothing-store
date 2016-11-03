import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  cartTotal: 0,

  add(product) {
    this.get('products').pushObject(product);
    var newTotal = this.get('cartTotal') + parseFloat(product.get('cost'));
    this.set('cartTotal', newTotal);
  }

});
