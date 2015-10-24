import Ember from 'ember';

export function number(value) {
  if (!value[0]) {
  	return '–';
  }
  return (Math.round(value[0] * 100) / 100).toFixed(2) +
  	(value[1] ? ' ' + value[1] : '');
}

export default Ember.HTMLBars.makeBoundHelper(number);
