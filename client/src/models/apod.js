const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');


const APOD = function(url){
  this.url = url;
};

APOD.prototype.getData = function () {
  const request = new Request(this.url);

  request.get().then((apod) => {
        PubSub.publish('APOD:data-loaded', apod);
      })
      .catch(console.error);


  };

module.exports = APOD;
