import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      product: this.store.findRecord('product', params.product_id),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    addReview(params) {
      var newReview = this.store.createRecord('comment', params);
      console.log(params.product);
      var product = params.product;
      console.log(product);
      product.get('comments').addObject(newReview);
      newReview.save().then(function() {
        return product.save();
      });
      this.transitionTo('product', product);
    }
  }
});
