/* global ENV, ReconnectingWebSocket */

import Ember from 'ember';
import BitcoinPriceModel from '../models/bitcoin-price';
import TramScheduleModel from '../models/tram-schedule';
import WeatherModel from '../models/weather';
import RainForecastModel from '../models/rain-forecast';
import CurrentlyPlayingModel from '../models/currently-playing';
import GiphyTrendingModel from '../models/giphy-trending';
import NetworkConnectivityModel from '../models/network-connectivity';
import PowerConsumptionModel from '../models/power-consumption';

import ENV from '../config/environment';

var
  STATUS_CONNECTING = 'status-connecting',
  STATUS_CONNECTED = 'status-connected',
  STATUS_DISCONNECTED = 'status-disconnected';

export default Ember.Route.extend({

  defaultHost: 'localhost',
  defaultPort: 80,

  enabledWidgets: {
    'clock': null,
    'tram-schedule': TramScheduleModel,
    'bitcoin-price': BitcoinPriceModel,
    'weather': WeatherModel,
    'rain-forecast': RainForecastModel,
    'currently-playing': CurrentlyPlayingModel,
    'giphy-trending': GiphyTrendingModel,
    'network-connectivity': NetworkConnectivityModel,
    'power-consumption': PowerConsumptionModel,
  },

  setConnectionStatus: function (status) {
    this.controllerFor('connection-status').set('model', Ember.Object.create({
      status: status
    }));
  },

  setupController: function () {
    var host, port, self = this;

    self.setConnectionStatus(STATUS_DISCONNECTED);

    function establishSocketConnection(host, port) {

      function connect () {
        var ws, url;

        url = 'ws://%@:%@'.fmt(host || 'localhost', port || 80);
        Ember.debug('Trying to connect to %@'.fmt(url));
        ws = new ReconnectingWebSocket(url);

        ws.onconnecting = function () {
          self.setConnectionStatus(STATUS_CONNECTING);
        };

        ws.onopen = function () {
          Ember.Logger.info('Connected to %@'.fmt(url));
          self.setConnectionStatus(STATUS_CONNECTED);
        };

        ws.onclose = function () {
          self.setConnectionStatus(STATUS_DISCONNECTED);
        };

        ws.onmessage = function (evt) {
          var data;

          try {
            data = JSON.parse(evt.data);
          } catch (e) {
            Ember.Logger.error('Failed to parse message: ', evt.data);
          }

          if (data) {
            update(data);
          }
        };

      }

      connect();
    }

    function update (payload) {
      var widgetName, modelClass, controller, data;

      if (payload && payload.widget && 'string' === typeof payload.widget.name) {

        widgetName = payload.widget.name.dasherize();

        if (modelClass = self.enabledWidgets[widgetName]) {
          Ember.debug('Updating %@'.fmt(widgetName));

          controller = self.controllerFor(widgetName);
          data = payload.widget.data;

          if (controller.get('model')) {
            // update existing model
            controller.get('model').set('sourceData', data);
          } else {
            // create new model
            controller.set('model', modelClass.create({ sourceData: data }));
          }
        }
      }
    }

    if (ENV && ENV.BACKEND) {
      host = ENV.BACKEND.HOST;
      port = ENV.BACKEND.PORT;
    } else if (window.ENV && window.ENV.BACKEND) {
      host = window.ENV.BACKEND.HOST;
      port = window.ENV.BACKEND.PORT;
    }

    establishSocketConnection(
      host || this.get('defaultHost'),
      port || this.get('defaultPort')
    );
  },

  renderTemplate: function () {
    var self, widgets, name;

    self = this;

    self.render('connection-status', {
        into: 'application',
        outlet: 'connection-status',
        controller: 'connection-status'
      });

    widgets = self.enabledWidgets;

    for (name in widgets) {
      if (widgets.hasOwnProperty(name)) {
        self.render(name, {
          into: 'application',
          outlet: name,
          controller: name
        });
      }
    }

  }
});
