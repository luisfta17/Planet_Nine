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

    const dropdown = document.querySelectorAll('.dropdown');
    for (planet of dropdown) {
      planet.addEventListener('click', (evt) =>{
        console.log(evt.target.id);
        const planetInfoView = new PlanetInfoView(this.container);
        planetInfoView.initialRender(this.planets, evt.target.id);
      })
    }
};


PlanetView.prototype.renderInitialInfo = function (planets) {
  this.container.innerHTML = '';
  const planetInfoView = new PlanetInfoView(this.container);
  planetInfoView.initialRender(this.planets, 0)
};

module.exports = PlanetView;
