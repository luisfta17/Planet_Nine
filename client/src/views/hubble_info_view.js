const Hubble = require("../models/hubble.js");
const HubbleInfoView = function(container){
  this.container = container;
};

HubbleInfoView.prototype.initialRender = function (picture) {
  this.createDiv("text-template");
  const textTemplateSelector = document.querySelector("#text-template");
  textTemplateSelector.classList.add("container");

  this.createTemplate(textTemplateSelector);

  this.generateRandomPic(picture);

  this.createDiv("picture-template");
  const pictureTemplateSelector = document.querySelector("#picture-template");
  pictureTemplateSelector.classList.add("container");

  if (picture.description) {
    this.createParagraph(picture.description, pictureTemplateSelector);
  }

  const randomButton = this.createButton("Other pic");
  randomButton.addEventListener('click', () => {
    this.requestNewData();
  });
  this.container.appendChild(randomButton);


  const returnButton = this.createButton("Return to Main Page");
  returnButton.addEventListener('click', () => {
    window.location.href = "/universe";
  });
  this.container.appendChild(returnButton);
};

HubbleInfoView.prototype.createDiv = function (id) {
  const div= document.createElement('div');
  div.id = id;
  this.container.appendChild(div);
};

HubbleInfoView.prototype.generateRandomPic = function (picture) {
  this.createSmallSubtitle(picture.name);
  this.findPngOrJpg(picture, 1);
};

HubbleInfoView.prototype.createImage = function (src) {
  const image = document.createElement('img');
  image.src = src;
  image.id = "hubble-picture";
  image.classList.add("block");
  this.container.appendChild(image);
};

HubbleInfoView.prototype.createParagraph = function (text, container) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  container.appendChild(paragraph);
};

HubbleInfoView.prototype.createSubtitle = function (text, container) {
  const subtitle = document.createElement('h3');
  subtitle.textContent = text;
  container.appendChild(subtitle);
};

HubbleInfoView.prototype.createSmallSubtitle = function (text) {
  const subtitle = document.createElement('h4');
  subtitle.textContent = text;
  this.container.appendChild(subtitle);
};

HubbleInfoView.prototype.createTitle = function (text, container) {
  const title = document.createElement('h1');
  title.textContent = text;
  container.appendChild(title);
};

HubbleInfoView.prototype.createButton = function (text) {
  const button = document.createElement('button');
  button.textContent = text;
  return button;
};

HubbleInfoView.prototype.findPngOrJpg = function (picture, startPoint) {
  const lastLink = picture.image_files[picture.image_files.length - startPoint].file_url;
  if (this.isPicture(lastLink)) {
    this.createImage(lastLink);
  } else {
    startPoint ++;
    this.findPngOrJpg(picture, startPoint);
  }
};

HubbleInfoView.prototype.isPicture = function (link) {
  const linkSplitted = link.split('');
  return linkSplitted[linkSplitted.length - 1] === "g";
};

HubbleInfoView.prototype.requestNewData = function () {
  const hubble = new Hubble('http://localhost:3000/api/hubble');
  hubble.getData();
};

HubbleInfoView.prototype.createTemplate = function (container) {
  this.createTitle("What Is the Hubble Space Telescope?", container);
  this.createParagraph("As the name suggests, the Hubble Space Telescope is a large telescope in space. Launched into orbit by space shuttle Discovery on April 24, 1990, Hubble orbits about 547 kilometers (340 miles) above Earth, travelling about 5 miles per second. Hubble is solar-powered and takes sharp pictures of objects in the sky such as planets, stars and galaxies. Included in Hubble's more than one million observations are detailed pictures of the birth and death of stars, galaxies billions of light years away, and comet pieces crashing into Jupiter's atmosphere. Scientists have learned a lot about the universe from these pictures, and many of them are beautiful to look at.", container);
  this.createSubtitle("What Are Hubble's Most Important Discoveries?", container);
  this.createParagraph("Images taken by Hubble have helped scientists estimate the age and size of the universe, and have helped scientists understand how planets and galaxies form. It is believed the universe is almost 14 billion years old. An image called 'Hubble Ultra Deep Field' shows the farthest galaxies ever seen. Hubble has detected black holes, which suck in everything around them, including light. The telescope has played a key role in the discovery of dark energy, a mysterious force that causes the universe to expand faster and faster as time goes on. And it has revealed details of gamma-ray bursts -- powerful explosions of energy that occur when massive stars collapse. Hubble has also studied the atmospheres of planets revolving around stars similar to Earth’s sun.", container);
  this.createSubtitle("Random picture taken from Hubble Space Telescope, powered by NASA - HubbleSite.org ", container);
};


module.exports = HubbleInfoView;
