import Ember from 'ember';
import BitcoinPriceModel from '../models/bitcoin-price';
import TramSchedule from '../models/tram-schedule';
import WeatherModel from '../models/weather';
import RainForecastModel from '../models/rain-forecast';
import CurrentlyPlayingModel from '../models/currently-playing';

export default Ember.Route.extend({

  default_endpoint: 'http://localhost:4567',
  refresh_interval: 5000,

  setupController: function () {
    var endpoint, dashboard, self = this;

    if (window['CLIENT_CONFIG'] && window['CLIENT_CONFIG']['SERVER']) {
      endpoint = window['CLIENT_CONFIG']['SERVER'];
    } else {
      endpoint = this.get('default_endpoint');
    }

    function updateDashboard () {
      Ember.$.getJSON(endpoint + '/dashboard').then(function (response) {
        if (!(dashboard = response.dashboard)) {
          return;
        }

        self.controllerFor('tram').set('model', TramSchedule.create({
          sourceData: dashboard.items.tram_schedule
        }));

        self.controllerFor('bitcoin').set('model', BitcoinPriceModel.create({
          sourceData: dashboard.items.bitcoin_price
        }));

        self.controllerFor('weather').set('model', WeatherModel.create({
          sourceData: dashboard.items.weather
        }));

        self.controllerFor('rain-forecast').set('model', RainForecastModel.create({
          sourceData: dashboard.items.rain_forecast
        }));

        self.controllerFor('currently-playing').set('model', CurrentlyPlayingModel.create({
          sourceData: dashboard.items.currently_playing
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

    this.render('weather', {
      into: 'application',
      outlet: 'weather',
      controller: 'weather'
    });

    this.render('rain-forecast', {
      into: 'application',
      outlet: 'rain-forecast',
      controller: 'rain-forecast'
    });

    this.render('currently-playing', {
      into: 'application',
      outlet: 'currently-playing',
      controller: 'currently-playing'
    });
  }
});
