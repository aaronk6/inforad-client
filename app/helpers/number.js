import Ember from 'ember';

export function number(params) {
  var value, unit, decimals;

  value = params[0];
  unit = params[1] || '';
  decimals = typeof params[2] === 'number' ? params[2] : 2;

  if (!value) {
  	return '–';
  }

  return (Math.round(value * 100) / 100).toLocaleString('en', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }) + (unit ? ' ' + unit : '');
}

export default Ember.HTMLBars.makeBoundHelper(number);
