const PlantInfoView = require('./planet_info_view');

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
  // this.createButton("Go back");

  // const goBackButton = this.createButton("Go back");
  // goBackButton.addEventListener('click', () => {
  //   const plantInfoView = new PlantInfoView(planets, value)
  //   planetInfoView.initialRender(planets, value)
  // });
  // this.container.appendChild(goBackButton);
};

ApodInfoView.prototype.createImage = function (src) {
  const image = document.createElement('img');
  image.src = src;
  this.container.appendChild(image);
};

ApodInfoView.prototype.createTitle = function (text) {
  const title = document.createElement('h3');
  title.textContent = text;
  this.container.appendChild(title);
};

ApodInfoView.prototype.createDate = function (text) {
  const date = document.createElement('h3');
  date.textContent = text;
  this.container.appendChild(date);
};

ApodInfoView.prototype.createExplanation = function (text) {
  const explanation = document.createElement('p');
  explanation.textContent = text;
  this.container.appendChild(explanation);
};

ApodInfoView.prototype.createButton = function (text) {
    const button = document.createElement('button');
    button.textContent = text;
    this.container.appendChild(button);
  };


module.exports = ApodInfoView;
