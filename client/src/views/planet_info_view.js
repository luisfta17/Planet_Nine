const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.initialRender = function (planets, value) {
  let planetValue = value;
  this.container.innerHTML = ' ';

  const planetName = document.createElement('h2');
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
  moreInfoButton.addEventListener('click', () => {
    this.planetInfoRender(planets, planetValue)
  });
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


PlanetInfoView.prototype.planetInfoRender = function (planets, value) {
  this.container.innerHTML = " ";
  const planetName = document.createElement('h2');
  planetName.textContent = planets[value].name;
  this.container.appendChild(planetName);

  this.createParagraph(planets[value].summary);
  this.createSubtitle("Size and Distance");
  this.createParagraph(planets[value].sizeAndDistance);
  this.createSubtitle("Orbit and Rotation");
  this.createParagraph(planets[value].orbitAndRotation);
  this.createSubtitle("Formation");
  this.createParagraph(planets[value].formation);
  this.createSubtitle("Can have life?");
  this.createParagraph(planets[value].life);


};

PlanetInfoView.prototype.createParagraph = function (text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  this.container.appendChild(paragraph);
};

PlanetInfoView.prototype.createSubtitle = function (text) {
  const subtitle = document.createElement('h3');
  subtitle.textContent = text;
  this.container.appendChild(subtitle);
};


module.exports = PlanetInfoView;
