import Ember from 'ember';

export default Ember.Controller.extend({
	init: function () {
		var self = this;
		window.setInterval(function () {
			self.set('model.currentDate', new Date());
		}, 1000);
		return this._super();
	}
});
