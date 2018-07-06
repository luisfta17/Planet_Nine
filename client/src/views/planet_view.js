const PubSub = require('../helpers/pub_sub');
const PlanetInfoView = require('./planet_info_view');

const PlanetView = function(container){
  this.container = container;
};

PlanetView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:data-loaded', (evt) => {
     this.renderInitialInfo(evt.detail);
  });

};

PlanetView.prototype.renderInitialInfo = function (planets) {
  this.container.innerHTML = '';
  const planetInfoView = new PlanetInfoView(this.container);
  planetInfoView.initialRender(planets, 0)
};

module.exports = PlanetView;
