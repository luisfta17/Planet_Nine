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
  if (apod.media_type === "video") {
    this.createVideo(apod.url)
  } else {
    this.createImage(apod.hdurl);
  }
  this.createDate(apod.date);
  this.createDiv("text-template");
  const textTemplateSelector = document.querySelector("#text-template")
  textTemplateSelector.classList.add("container")
  this.createExplanation(apod.explanation, textTemplateSelector);


  const footer = document.createElement('a');
  const footerLink = "https://apod.nasa.gov/apod/astropix.html";
  const footerWording = `Information provided by NASA API`;
  footer.textContent = footerWording;
  footer.href = footerLink;
  this.container.appendChild(footer);

  const goBackButton = this.createButton("Go back");
  goBackButton.classList.add("back-button");
  goBackButton.classList.add("block-middle");
  goBackButton.addEventListener('click', () => {
  window.location = "http://localhost:3000/universe";
  });
  this.container.appendChild(goBackButton);

};

ApodInfoView.prototype.createDiv = function (id) {
  const div= document.createElement('div');
  div.id = id;
  this.container.appendChild(div);
};

ApodInfoView.prototype.createVideo = function (src) {
  const iframe= document.createElement('iframe');
  iframe.width = "1080";
  iframe.height = "600";
  iframe.src = src;
  iframe.scrolling = "no";
  iframe.style = "border: 0 none transparent;";
  iframe.frameborder = "0";
  iframe.setAttribute('allowFullScreen', '');
  this.container.appendChild(iframe);
};

ApodInfoView.prototype.createImage = function (src) {
  const image = document.createElement('img');
  image.src = src;
  image.id = "apod-picture"
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

ApodInfoView.prototype.createExplanation = function (text, container) {
  const explanation = document.createElement('p');
  explanation.textContent = text;
  container.appendChild(explanation);
};

ApodInfoView.prototype.createButton = function (text) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add("block");
    button.classList.add("center");
    return button;
  };


module.exports = ApodInfoView;
