const HubbleInfoView = function(container){
  this.container = container;
};

HubbleInfoView.prototype.initialRender = function (picture) {
  console.log(picture);
  this.createTemplate();
  this.generateRandomPic(picture);
};

HubbleInfoView.prototype.generateRandomPic = function (picture) {
  this.createSmallSubtitle(picture.name);
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

HubbleInfoView.prototype.createSmallSubtitle = function (text) {
  const subtitle = document.createElement('h4');
  subtitle.textContent = text;
  this.container.appendChild(subtitle);
};

HubbleInfoView.prototype.createTitle = function (text) {
  const title = document.createElement('h1');
  title.textContent = text;
  this.container.appendChild(title);
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

HubbleInfoView.prototype.createTemplate = function () {
  this.createTitle("What Is the Hubble Space Telescope?");
  this.createParagraph("The Hubble Space Telescope is a large telescope in space. It was launched into orbit by space shuttle Discovery on April 24, 1990. Hubble orbits about 547 kilometers (340 miles) above Earth. It is the length of a large school bus and weighs as much as two adult elephants. Hubble travels about 5 miles per second: That is like traveling from the eastern coast of the United States to the western coast in 10 minutes. Hubble is solar-powered. Hubble takes sharp pictures of objects in the sky such as planets, stars and galaxies. Hubble has made more than one million observations. These include detailed pictures of the birth and death of stars, galaxies billions of light years away, and comet pieces crashing into Jupiter's atmosphere. Scientists have learned a lot about the universe from these pictures. Many of them are beautiful to look at.")
  this.createSubtitle("What Are Hubble's Most Important Discoveries?");
  this.createParagraph("Images taken by Hubble have helped scientists estimate the age and size of the universe. Scientists believe the universe is almost 14 billion years old. Hubble has helped scientists understand how planets and galaxies form. An image called 'Hubble Ultra Deep Field' shows the farthest galaxies ever seen. Hubble has detected black holes, which suck in everything around them, including light. The telescope has played a key role in the discovery of dark energy, a mysterious force that causes the universe to expand faster and faster as time goes on. And it has revealed details of gamma-ray bursts -- powerful explosions of energy that occur when massive stars collapse. Hubble has also studied the atmospheres of planets revolving around stars similar to Earth’s sun.")
  this.createSubtitle("Random picture taken from Hubble Space Telescope, powered by NASA - HubbleSite.org ")
};


module.exports = HubbleInfoView;
