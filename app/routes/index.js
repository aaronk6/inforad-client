import Ember from 'ember';
import BitcoinPriceModel from '../models/bitcoin-price';
import TramSchedule from '../models/tram-schedule';

export default Ember.Route.extend({

  refresh_interval: 5000,

  setupController: function () {
    var dashboard, self = this;

    function updateDashboard () {
      Ember.$.getJSON('http://10.0.2.195:4567/dashboard').then(function (response) {
        if (!(dashboard = response.dashboard)) {
          return;
        }

        self.controllerFor('tram').set('model', TramSchedule.create({
          sourceData: dashboard.items.tram_schedule
        }));

        self.controllerFor('bitcoin').set('model', BitcoinPriceModel.create({
          sourceData: dashboard.items.bitcoin_price
        }));
      });
    }

    updateDashboard();
    window.setInterval(updateDashboard, 30000);
  },

  renderTemplate: function () {

    this.render('bitcoin', {
      into: 'application',
      outlet: 'bitcoin',
      controller: 'bitcoin'
    });

    this.render('tram', {
      into: 'application',
      outlet: 'tram',
      controller: 'tram'
    });

    this.render('clock', {
      into: 'application',
      outlet: 'clock',
      controller: 'clock'
    });
  }
});
