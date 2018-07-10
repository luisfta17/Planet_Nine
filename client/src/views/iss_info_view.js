const ISS = require("../models/iss.js");
const PubSub = require('../helpers/pub_sub');
const MAP_KEY = require('../helpers/map_key');

const IssInfoView = function(container){
  this.container = container;
};

IssInfoView.prototype.initialRender = function (iss) {
  this.createDiv("text-template");
  const textTemplateSelector = document.querySelector("#text-template")
  textTemplateSelector.classList.add("container")
  this.createTemplate(textTemplateSelector);
  this.createDiv("mapid");
  this.createMap(iss);

  this.createDiv("video-template");
  const videoTemplateSelector = document.querySelector("#video-template")
  videoTemplateSelector.classList.add("container")

  this.createVideoTemplate(videoTemplateSelector);

  const returnButton = this.createButton("Return to Main Page");
  returnButton.addEventListener('click', () => {
    window.location.href = "/universe";
  });
  this.container.appendChild(returnButton);
};



IssInfoView.prototype.createMap = function (iss) {
  console.log(iss);
  let latitude = iss.iss_position.latitude
  let longitude = iss.iss_position.longitude
  var mymap = L.map('mapid', { scrollWheelZoom:false }).setView([latitude, longitude], 3);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets-satellite',
    accessToken: MAP_KEY
  }).addTo(mymap);

  var issIcon = L.icon({
      iconUrl: 'https://i.imgur.com/BOM9ntO.png',
      iconSize: [40, 65]
  });

  var marker = L.marker([latitude, longitude], {icon: issIcon}).addTo(mymap);

  setInterval(function() {
    const iss = new ISS('http://api.open-notify.org/iss-now.json');
    iss.getCurrentData();
  }, 3000);

  PubSub.subscribe('ISS:current-data-loaded', (evt) => {
    var lat = (evt.detail.iss_position.latitude);
    var lng = (evt.detail.iss_position.longitude);
    var newLatLng = new L.LatLng(lat, lng);
    marker.setLatLng(newLatLng);
  });
};

IssInfoView.prototype.createMarker = function (iss) {
  let latitude = iss.iss_position.latitude
  let longitude = iss.iss_position.longitude
  var marker = L.marker([latitude, longitude], {icon: issIcon}).addTo(mymap);
};



IssInfoView.prototype.createImage = function (src, container) {
  const image = document.createElement('img');
  image.src = src;
  container.appendChild(image);
};

IssInfoView.prototype.createParagraph = function (text, container) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  container.appendChild(paragraph);
};

IssInfoView.prototype.createSubtitle = function (text, container) {
  const subtitle = document.createElement('h3');
  subtitle.textContent = text;
  container.appendChild(subtitle);
};

IssInfoView.prototype.createSmallSubtitle = function (text, container) {
  const subtitle = document.createElement('h4');
  subtitle.textContent = text;
  container.appendChild(subtitle);
};

IssInfoView.prototype.createTitle = function (text, container) {
  const title = document.createElement('h1');
  title.textContent = text;
  container.appendChild(title);
};

IssInfoView.prototype.createDiv = function (id) {
  const div= document.createElement('div');
  div.id = id;
  this.container.appendChild(div);
};

IssInfoView.prototype.addVideo = function () {
  const iframe= document.createElement('iframe');
  iframe.width = "1080";
  iframe.height = "600";
  iframe.src = "https://www.ustream.tv/embed/17074538?html5ui";
  iframe.scrolling = "no";
  iframe.style = "border: 0 none transparent;";
  iframe.frameborder = "0";
  iframe.classList.add("block");
  iframe.classList.add("center");
  iframe.allowfullscreen = true;
  iframe.webkitallowfullscreen = true;
  this.container.appendChild(iframe);
};


IssInfoView.prototype.createButton = function (text) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add("center");
  return button;
};

IssInfoView.prototype.createVideoTemplate = function (container) {
  this.createSubtitle("High Definition Earth-Viewing System (HDEV)", container);
  this.createParagraph("Below is a live view of Earth taken by a camera on the ISS. Without Earth’s atmosphere to protect us, people and equipment endure the full barrage of cosmic rays and solar radiation. The images are part of the NASA HDEV experiment that is looking at how fast these harmful rays damage equipment and degrade the image through camera. Sometimes the image is black because the Space Station does not have continuous radio contact with ground control. In that case, check back later.", container)
  this.createSubtitle("Live Video:", container)
  this.addVideo();
};


IssInfoView.prototype.createTemplate = function (container) {
  this.createTitle("International Space Station", container);
  this.createParagraph("The International Space Station (ISS) is the largest single structure humans have ever put into space. This multi-nation construction project was completed between 1998 and 2011, although the station continually evolves to include new missions and experiments. It has been continuously occupied since Nov. 2, 2000. As of January 2018, 230 individuals from 18 countries have visited the ISS, with top participating countries including the United States (145 people) and Russia (46 people). Astronaut and research time on the space station is allocated to space agencies according to how much money or resources (e.g. modules or robotics) that they contribute. The ISS includes contributions from 15 nations. NASA (United States), Roscosmos (Russia) and the European Space Agency are the major partners and contributors of funds to the space station; the other partners are the Japanese Aerospace Exploration Agency and the Canadian Space Agency. Current plans call for the space station to be operated through at least 2024, with a possible extension until 2028 currently in discussion. Afterwards, plans for the space station are not clearly laid out. It could be deorbited, or recycled for future space stations in orbit.", container);
  this.createSubtitle("How fast does it move?", container);
  this.createParagraph("The ISS flies 400 km high at speeds that defy gravity – literally. At 28,800 km/h it only takes 90 minutes to make a complete circuit of Earth. Astronauts working and living on the Station experience 16 sunrises and sunsets each day.", container)
  this.createSubtitle("ISS Live Location:", container)
};


module.exports = IssInfoView;
