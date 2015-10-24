import Ember from 'ember';

export default Ember.Object.extend({
  sourceData: null,

  protocols: function () {

    if (!this.get('sourceData')) {
      return null;
    }

    var res = [
      {
        name: "IPv4",
        data: this.get('sourceData').ipv4
      },
      {
        name: "IPv6",
        data: this.get('sourceData').ipv6
      }
    ];

    return res;

  }.property('sourceData')

});
