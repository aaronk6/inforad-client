import Ember from 'ember';

export default Ember.Object.extend({

  currentDate: new Date(),
  sourceData: null,
  maxItems: 9,

  schedule: function () {
    var sourceData, schedule, item, now, departure, timeLeft, minutesLeft;

    if (!(sourceData = this.get('sourceData.schedule'))) {
      return null;
    }

    schedule = [];
    now = new Date();

    for (var i = 0; i < Math.min(sourceData.length, this.get('maxItems')); i++) {

      item = sourceData[i];
      departure = new Date(item.departure);
      timeLeft = departure.getTime() - now.getTime();
      if (timeLeft + item.delay * 1000 * 60 < 0) {
        continue;
      }
      minutesLeft = Math.max(0, Math.round(timeLeft / 1000 / 60));

      schedule.push({
        train: item.train,
        minutesLeft: minutesLeft,
        departure: departure,
        longTimeAway: minutesLeft > 90,
        delay: item.delay,
        delayed: item.delay > 0,
        destination: item.destination
      });
    }

    return schedule;

  }.property('sourceData', 'currentDate')
});
