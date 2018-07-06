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

    const moreInfoButton = document.createElement('button');
    moreInfoButton.textContent = "More Info";
    this.container.appendChild(moreInfoButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = "Next";
    if (value === planets.length -1) {
      nextButton.value = 0
    } else {
      nextButton.value = value + 1
    }
    this.container.appendChild(nextButton);

};

module.exports = PlanetInfoView;
