import Ember from 'ember';

export default Ember.Object.extend({
  sourceData: null,

  valueEurBinding: Ember.Binding.oneWay('sourceData.value_eur'),

  lastUpdate: function () {
    return new Date(this.get('sourceData.last_update'));
  }.property('sourceData')
});
