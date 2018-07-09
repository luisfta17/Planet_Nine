const IssInfoView = function(container){
  this.container = container;
};

IssInfoView.prototype.initialRender = function (iss) {
  this.createTemplate();

  const returnButton = this.createButton("Return to Main Page");
  returnButton.addEventListener('click', () => {
    window.location.href = "/";
  });
  this.container.appendChild(returnButton);
};



IssInfoView.prototype.createImage = function (src) {
  const image = document.createElement('img');
  image.src = src;
  this.container.appendChild(image);
};

IssInfoView.prototype.createParagraph = function (text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  this.container.appendChild(paragraph);
};

IssInfoView.prototype.createSubtitle = function (text) {
  const subtitle = document.createElement('h3');
  subtitle.textContent = text;
  this.container.appendChild(subtitle);
};

IssInfoView.prototype.createSmallSubtitle = function (text) {
  const subtitle = document.createElement('h4');
  subtitle.textContent = text;
  this.container.appendChild(subtitle);
};

IssInfoView.prototype.createTitle = function (text) {
  const title = document.createElement('h1');
  title.textContent = text;
  this.container.appendChild(title);
};

IssInfoView.prototype.createButton = function (text) {
  const button = document.createElement('button');
  button.textContent = text;
  return button;
};


IssInfoView.prototype.createTemplate = function () {
  this.createTitle("ISS TRACKER");
  // this.createParagraph("The Hubble Space Telescope is a large telescope in space. It was launched into orbit by space shuttle Discovery on April 24, 1990. Hubble orbits about 547 kilometers (340 miles) above Earth. It is the length of a large school bus and weighs as much as two adult elephants. Hubble travels about 5 miles per second: That is like traveling from the eastern coast of the United States to the western coast in 10 minutes. Hubble is solar-powered. Hubble takes sharp pictures of objects in the sky such as planets, stars and galaxies. Hubble has made more than one million observations. These include detailed pictures of the birth and death of stars, galaxies billions of light years away, and comet pieces crashing into Jupiter's atmosphere. Scientists have learned a lot about the universe from these pictures. Many of them are beautiful to look at.")
  // this.createSubtitle("What Are Hubble's Most Important Discoveries?");
  // this.createParagraph("Images taken by Hubble have helped scientists estimate the age and size of the universe. Scientists believe the universe is almost 14 billion years old. Hubble has helped scientists understand how planets and galaxies form. An image called 'Hubble Ultra Deep Field' shows the farthest galaxies ever seen. Hubble has detected black holes, which suck in everything around them, including light. The telescope has played a key role in the discovery of dark energy, a mysterious force that causes the universe to expand faster and faster as time goes on. And it has revealed details of gamma-ray bursts -- powerful explosions of energy that occur when massive stars collapse. Hubble has also studied the atmospheres of planets revolving around stars similar to Earth’s sun.")
  // this.createSubtitle("Random picture taken from Hubble Space Telescope, powered by NASA - HubbleSite.org ")
};


module.exports = IssInfoView;
