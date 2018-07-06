const Planets = require('./models/planets');
const PlanetView = require('./views/planet_view');

document.addEventListener('DOMContentLoaded', () => {
console.log("JS loaded");

const planets = new Planets('http://localhost:3000/api/planets');
planets.getData();




});
