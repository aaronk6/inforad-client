import Ember from 'ember';

export default Ember.View.extend({
	classNames: 'connection-status-view',
	classNameBindings: [ 'controller.model.status' ]
});
