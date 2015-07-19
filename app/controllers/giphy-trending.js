import Ember from 'ember';

export default Ember.Controller.extend({

  SLIDE_INTERVAL: 15, // TODO: make configurable
  _currentInterval: null,

  modelDidChange: function (sender, key) {

    var self = this,
      model, items;

    model = sender.get(key);

    if (this.get('_currentInterval')) {
      window.clearInterval(this.get('_currentInterval'));
    }

    if (!model || !(items = model.get('sourceData.items'))) {
      return;
    }

    function updateCurrentItem () {
      if (model.get('currentIndex') < items.length - 1) {
        model.incrementProperty('currentIndex');
      } else {
        model.set('currentIndex', 0);
      }
    }

    this.set('_currentInterval', window.setInterval(function () {
      updateCurrentItem();
    }, self.SLIDE_INTERVAL * 1000));

    updateCurrentItem();

  }.observes('model')
});
