const PubSub = require('../helpers/pub_sub');

const PlanetView = function(container){
  this.container;
};

PlanetView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:data-loaded', (evt) => {

  });

};

module.exports = PlanetView;
