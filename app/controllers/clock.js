import Ember from 'ember';

export default Ember.Controller.extend({

	model: Ember.Object.create({
		currentDate: new Date()
	}),

	init: function () {
		var self = this;
		window.setInterval(function () {
			self.set('model.currentDate', new Date());
		}, 500);
		return this._super();
	}
});
