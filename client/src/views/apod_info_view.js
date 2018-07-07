const ApodInfoView = function(container){
  this.container = container;
};

ApodInfoView.prototype.initialRender = function (apod) {
  this.container.innerHTML = " ";
  const heading = document.createElement('h2');
  heading.textContent = "Astronomy Picture of the Day";
  this.container.appendChild(heading);

  this.createTitle(apod.title);
  this.createImage(apod.hdurl);
  this.createDate(apod.date);
  this.createExplanation(apod.explanation);
};

ApodInfoView.prototype.createImage = function (src) {
  const image = document.createElement('img');
  image.src = src;
  this.container.appendChild(image);
};




module.exports = ApodInfoView;
// this.createTitle(planets[value].name)

// this.createParagraph(`Distance from Earth: ${distanceFromEarth}`);
// this.createParagraph(`Age: ${age}`);
// PlanetInfoView.prototype.createSubtitle = function (text) {
//   const subtitle = document.createElement('h3');
//   subtitle.textContent = text;
//   this.container.appendChild(subtitle);
// };
//
// PlanetInfoView.prototype.createTitle = function (text) {
//   const title = document.createElement('h2');
//   title.textContent = text;
//   this.container.appendChild(title);
// };
//
// PlanetInfoView.prototype.createImage = function (src) {
//   const image = document.createElement('img');
//   image.src = src;
//   this.container.appendChild(image);
// };
