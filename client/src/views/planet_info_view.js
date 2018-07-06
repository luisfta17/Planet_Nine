const PlanetInfoView = function(container){
  this.container = container;
  this.currentPlanet = 0;
};

PlanetInfoView.prototype.initialRender = function (planets) {
    const planetImage = document.createElement('img');
    planetImage.src = planets[this.currentPlanet].picture;
    this.container.appendChild(planetImage);
};

module.exports = PlanetInfoView;
