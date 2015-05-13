import Ember from 'ember';

export function currency(value) {
  if (!value[0]) {
  	return '–';
  }
  return Math.round(value[0] * 100) / 100 + (value[1] ? ' ' + value[1] : '');
}

export default Ember.HTMLBars.makeBoundHelper(currency);
