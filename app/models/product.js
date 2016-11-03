import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cost: DS.attr(),
  image: DS.attr(),
  category: DS.attr(),
  sales: DS.attr(),
  clearance: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
