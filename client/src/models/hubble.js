const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');


const Hubble = function(url){
  this.url = url;
};

Hubble.prototype.getData = function () {
  const request = new Request(this.url);
  request.get().then((picture) => {
    PubSub.publish('Hubble:data-loaded', picture);
  })
  .catch(console.error);
};



module.exports = Hubble;
