const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.initialRender = function (planets, value) {
    let planetValue = value;
    this.container.innerHTML = ' ';
    console.log(value);
    const planetName = document.createElement('h3');
    planetName.textContent = planets[value].name;
    this.container.appendChild(planetName);

    const planetImage = document.createElement('img');
    planetImage.src = planets[value].picture;
    this.container.appendChild(planetImage);

    const previousButton = document.createElement('button');
    previousButton.textContent = "Previous";
    previousButton.addEventListener('click', () => {
      if (planetValue <= 0) {
        planetValue = planets.length -1
      } else {
        planetValue = planetValue - 1
      }
      this.initialRender(planets, planetValue)
    });
    this.container.appendChild(previousButton);

    const moreInfoButton = document.createElement('button');
    moreInfoButton.textContent = "More Info";
    this.container.appendChild(moreInfoButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = "Next";
    nextButton.addEventListener('click', () => {
      if (value >= planets.length -1) {
        planetValue = 0
      } else {
        planetValue = planetValue + 1
      }
      this.initialRender(planets, planetValue)
    });

    this.container.appendChild(nextButton);

};

module.exports = PlanetInfoView;
