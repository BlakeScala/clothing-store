import Ember from 'ember';

export function productPopularity(params/*, hash*/) {
  var product = params[0];


  if(product.get('comments').get('length') >=5) {
    return Ember.String.htmlSafe('<span id="glyphicon" class="glyphicon glyphicon-fire"></span>');
  }
}
export default Ember.Helper.helper(productPopularity);
