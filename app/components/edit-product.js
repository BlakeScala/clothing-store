import Ember from 'ember';

export default Ember.Component.extend({
  editProduct: false,

  actions : {
    showEditForm() {
      this.set('editProduct', true);
    },

    updateProduct(product) {
      var params = {
        name: this.get('name'),
        cost: this.get('cost'),
        image: this.get('image'),
        category: this.get('category'),
        clearance: this.get('clearance')
      }
      this.set('editProduct', false);
      this.sendAction('updateProduct', product, params);
      this.set('name', null);
    }
  }

});
