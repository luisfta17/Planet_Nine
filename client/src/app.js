const Planets = require('./models/planets');
const APOD = require('./models/apod');
const Hubble = require('./models/hubble');
const ISS = require('./models/iss');
const PlanetView = require('./views/planet_view');
const ApodView = require('./views/apod_view');
const HubbleView = require('./views/hubble_view');


document.addEventListener('DOMContentLoaded', () => {
  const displayContainer = document.querySelector('#display-container');
  const apodSelector = document.querySelector('#apod');
  const hubbleSelector = document.querySelector('#hubble');
  const issSelector = document.querySelector('#iss');

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

  hubbleSelector.addEventListener('click', () => {
    const hubble = new Hubble('http://localhost:3000/api/hubble');
    hubble.getData();
    const hubbleView = new HubbleView(displayContainer);
    hubbleView.bindEvents();
  });

  issSelector.addEventListener('click', () => {
    const iss = new ISS('http://api.open-notify.org/iss-now.json');
    iss.getData();
  });

});
