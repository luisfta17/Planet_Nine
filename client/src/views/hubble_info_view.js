const HubbleInfoView = function(container){
  this.container = container;
};

HubbleInfoView.prototype.initialRender = function (picture) {
  console.log(picture);
  this.createSubtitle(picture.name);
  this.findPngOrJpg(picture, 1);
  if (picture.description) {
    this.createParagraph(picture.description)
  }
};

HubbleInfoView.prototype.createImage = function (src) {
  const image = document.createElement('img');
  image.src = src;
  this.container.appendChild(image);
};

HubbleInfoView.prototype.createParagraph = function (text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  this.container.appendChild(paragraph);
};

HubbleInfoView.prototype.createSubtitle = function (text) {
  const subtitle = document.createElement('h3');
  subtitle.textContent = text;
  this.container.appendChild(subtitle);
};

HubbleInfoView.prototype.createTitle = function (text) {
  const title = document.createElement('h2');
  title.textContent = text;
  this.container.appendChild(title);
};


HubbleInfoView.prototype.findPngOrJpg = function (picture, startPoint) {
  const lastLink = picture.image_files[picture.image_files.length - startPoint].file_url;
  if (this.isPicture(lastLink)) {
    console.log(lastLink);
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


module.exports = HubbleInfoView;
