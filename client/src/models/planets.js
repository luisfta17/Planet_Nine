const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');


const Planets = function(url){
  this.url = url;
};

Planets.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
      .then((planets) => {
        PubSub.publish('Planets:data-loaded', planets);
      })
      .catch(console.error);
  };



module.exports = Planets;
