const PubSub = require('../helpers/pub_sub');
const PlanetInfoView = require('./planet_info_view');

const PlanetView = function(container){
  this.container;
};

PlanetView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:data-loaded', (evt) => {
     this.renderInitialInfo(evt.detail);
  });

};

PlanetView.prototype.renderInitialInfo = function (planets) {

  // const name = this.createName(planet.species);
  // sightingContainer.appendChild(species);
  //
  // const location = this.createDetail('Location', sighting.species);
  // sightingContainer.appendChild(location);
  //
  // const date = this.createDetail('Date', sighting.date);
  // sightingContainer.appendChild(date);
  //
  // const deleteButton = this.createDeleteButton(sighting._id);
  // sightingContainer.appendChild(deleteButton);
  //
  // this.container.appendChild(sightingContainer);
};

module.exports = PlanetView;
