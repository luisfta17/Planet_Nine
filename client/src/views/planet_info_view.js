const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.initialRender = function (planets, value) {

    const planetName = document.createElement('h3');
    planetName.textContent = planets[value].name;
    this.container.appendChild(planetName);

    const planetImage = document.createElement('img');
    planetImage.src = planets[value].picture;
    this.container.appendChild(planetImage);

    const previousButton = document.createElement('button');
    previousButton.textContent = "Previous";
    if (value === 0) {
      previousButton.value = planets.length -1
    } else {
      previousButton.value = value - 1
    }
    this.container.appendChild(previousButton);

};

module.exports = PlanetInfoView;
