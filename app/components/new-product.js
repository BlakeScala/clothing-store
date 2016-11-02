import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,

  actions: {
    showProductForm() {
      this.set('addNewProduct', true);
    },

    cancel() {
      this.set('addNewProduct', false);
    },

    saveProduct() {
      var params = {
        name: this.get('name'),
        cost: this.get('cost'),
        image: this.get('image'),
        category: this.get('category'),
        clearance: this.get('clearance'),
        sales: 0,
      };
      if ((Ember.isEmpty(this.get('name'))) || (Ember.isEmpty(this.get('cost'))) || (Ember.isEmpty(this.get('image'))) || (Ember.isEmpty(this.get('category'))) ||
      (Ember.isEmpty(this.get('clearance'))))
      {
        alert("You must complete this form!");
      } else {
        this.set('addNewProduct', false);
        this.sendAction('saveProduct', params);
      }
    }
  }
});
