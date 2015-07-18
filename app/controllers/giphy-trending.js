import Ember from 'ember';

export default Ember.Controller.extend({
	init: function () {
		var self = this,
			model, items;
		window.setInterval(function () {
			model = self.get('model');
			if (!model || !(items = model.get('sourceData.items'))) {
				return;
			}
			if (model.get('currentIndex') < items.length - 1) {
				model.incrementProperty('currentIndex');
			} else {
				model.set('currentIndex', 0);
			}
		}, 15000); // FIXME: Don't hardcode
		return this._super();
	}
});
