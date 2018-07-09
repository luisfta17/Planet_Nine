const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');


const ISS = function(url){
  this.url = url;
};

ISS.prototype.getData = function () {
  const request = new Request(this.url);

  request.get().then((iss) => {
    PubSub.publish('ISS:data-loaded', iss);
  })
  .catch(console.error);
};

ISS.prototype.getCurrentData = function () {
  const request = new Request(this.url);

  request.get().then((iss) => {
    PubSub.publish('ISS:current-data-loaded', iss);
  })
  .catch(console.error);
};


module.exports = ISS;
