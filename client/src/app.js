const Planets = require('./models/planets');
const APOD = require('./models/apod');
const Hubble = require('./models/hubble');
const PlanetView = require('./views/planet_view');
const ApodView = require('./views/apod_view');
const HubbleView = require('./views/hubble_view');

document.addEventListener('DOMContentLoaded', () => {
const displayContainer = document.querySelector('#display-container');
const apodSelector = document.querySelector('#apod');
const hubbleSelector = document.querySelector('#hubble');

const planets = new Planets('http://localhost:3000/api/planets');
planets.getData();

const planetView = new PlanetView(displayContainer);
planetView.bindEvents();

apodSelector.addEventListener('click', () => {
  const apod = new APOD('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  apod.getData();

  const apodView = new ApodView(displayContainer);
  apodView.bindEvents();
});
//
hubbleSelector.addEventListener('click', () => {
  const hubble = new Hubble('http://hubblesite.org/api/v3/image/');
  hubble.getData();
  const hubbleView = new HubbleView(displayContainer);
  hubbleView.bindEvents();
});


});
