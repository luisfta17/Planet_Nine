const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.initialRender = function (planets, value) {
  let planetValue = value;
  console.log(planetValue);
  let distanceFromEarth = planets[value].dfe;
  let radius = planets[value].radius;
  this.container.innerHTML = ' ';

  this.createTitle(planets[value].name)


  const previousButton = this.createButton("≺")
  previousButton.classList.add("arrow-left");
  previousButton.addEventListener('click', () => {
    if (planetValue <= 0) {
      planetValue = planets.length -1
    } else {
      planetValue = planetValue - 1
    }
    this.initialRender(planets, planetValue)
  });

  this.container.appendChild(previousButton);
  if (planets[value].gif) {
    this.createImage(planets[value].gif)
  }else {
    this.createImage(planets[value].picture)
  }

  const nextButton = this.createButton("≻")
  nextButton.classList.add("arrow-right");
  nextButton.addEventListener('click', () => {
    if (value >= planets.length -1) {
      planetValue = 0
    } else {
      planetValue = planetValue + 1
    }
    this.initialRender(planets, planetValue)
  });
    this.container.appendChild(nextButton);

    this.createParagraph(`Distance from Earth: ${distanceFromEarth}`);
    this.createParagraph(`Radius: ${radius}`);



  const moreInfoButton = this.createButton("More info");
  moreInfoButton.addEventListener('click', () => {
    this.planetInfoRender(planets, planetValue)
  });
  this.container.appendChild(moreInfoButton);

};


PlanetInfoView.prototype.planetInfoRender = function (planets, value) {
  this.container.innerHTML = " ";
  this.container.classList.add("container")
  this.createTitle(planets[value].name)
  this.createParagraph(planets[value].summary);
  this.createSubtitle("Orbit and Rotation");
  this.createParagraph(planets[value].orbitAndRotation);
  this.createSubtitle("Formation");
  this.createParagraph(planets[value].formation);
  this.createSubtitle("Can have life?");
  this.createParagraph(planets[value].life);

  const goBackButton = this.createButton("Go back");
  goBackButton.classList.add("back-button");
  goBackButton.addEventListener('click', () => {
    this.container.className = ""
    this.initialRender(planets, value)
  });
  this.container.appendChild(goBackButton);

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

PlanetInfoView.prototype.createTitle = function (text) {
  const title = document.createElement('h2');
  title.textContent = text;
  this.container.appendChild(title);
};

PlanetInfoView.prototype.createImage = function (src) {
  const image = document.createElement('img');
  image.src = src;
  image.id = "planet-picture"
  this.container.appendChild(image);
};

PlanetInfoView.prototype.createButton = function (text) {
  const button = document.createElement('button');
  button.textContent = text;
  return button;
};


module.exports = PlanetInfoView;
