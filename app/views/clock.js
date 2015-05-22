import Ember from 'ember';

export default Ember.View.extend({

	classNames: 'clock-view dashboard-item',

	elements: {},

	currentDateDidChange: function (sender, key) {
		var curdate, el, hour_as_degree, minute_as_degree, second_as_degree;

		curdate = sender.get(key);
		el = this.get('elements');

		hour_as_degree = (curdate.getHours() + curdate.getMinutes() / 60) / 12 * 360;
		minute_as_degree = curdate.getMinutes() / 60 * 360;
		second_as_degree = curdate.getSeconds() / 60 * 360;

		el.hour.css({transform: 'rotate(' + hour_as_degree + 'deg)' });
		el.minute.css({transform: 'rotate(' + minute_as_degree + 'deg)' });
		el.second.css({transform: 'rotate(' + second_as_degree + 'deg)' });

	}.observes('controller.model.currentDate'),

	didInsertElement: function () {
		// cache elements
		this.set('elements', {
			hour: this.$('.inner_face .hour'),
			minute: this.$('.inner_face .minute'),
			second: this.$('.inner_face .second')
		});
	}
});
