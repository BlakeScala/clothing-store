import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,

  actions: {
    showCommentForm() {
      this.set('addNewComment', true);
    },

    cancel() {
      this.set('addNewComment', false);
    },

    addReview() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        rating: this.get('rating'),
        product: this.get('product')
      };
      console.log(params);
      this.set('addNewComment', false);
      this.sendAction('addReview', params);
    }
  }
});
