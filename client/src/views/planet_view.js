const PubSub = require('../helpers/pub_sub');
const PlanetInfoView = require('./planet_info_view');

const PlanetView = function(container, planets){
  this.container = container;
  this.planets = planets;
};

PlanetView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:data-loaded', (evt) => {
    this.planets = evt.detail;
     this.renderInitialInfo(this.planets);
  });
};


PlanetView.prototype.renderInitialInfo = function (planets) {
  this.container.innerHTML = '';
  const planetInfoView = new PlanetInfoView(this.container);
  planetInfoView.initialRender(planets, 0)
};

module.exports = PlanetView;
