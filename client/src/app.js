const Planets = require('./models/planets');
const PlanetView = require('./views/planet_view');

document.addEventListener('DOMContentLoaded', () => {
const planetPicContainer = document.querySelector('#planet');

const planets = new Planets('http://localhost:3000/api/planets');
planets.getData();

const planetView = new PlanetView(planetPicContainer);
planetView.bindEvents();

});
