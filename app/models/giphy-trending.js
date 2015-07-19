import Ember from 'ember';

export default Ember.Object.extend({

  currentIndex: -1,
  currentItem: null,

  sourceData: null,

  isImage: function () {
    var s = this.get('sourceData');
    return s && s.format === 'gif' || s.format === 'webp';
  }.property('sourceData'),

  isVideo: function () {
    var s = this.get('sourceData');
    return s && s.format === 'mp4';
  }.property('sourceData'),

  currentIndexDidChange: function (sender, key) {
    if (!this.get('sourceData') || !this.get('sourceData')['items']) {
      return;
    }
    this.set('currentItem', Ember.Object.create(
      this.get('sourceData')['items'][sender.get(key)]));
  }.observes('currentIndex')
});
