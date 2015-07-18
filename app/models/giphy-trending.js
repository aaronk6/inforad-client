import Ember from 'ember';

export default Ember.Object.extend({
  currentIndex: -1,
  currentItem: null,
  sourceData: null,

  currentIndexDidChange: function (sender, key) {
  	if (!this.get('sourceData') || !this.get('sourceData')['items']) {
			return;
  	}
  	this.set('currentItem', this.get('sourceData')['items'][sender.get(key)]);
  }.observes('currentIndex')
});
