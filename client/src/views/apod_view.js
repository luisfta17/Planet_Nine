const PubSub = require('../helpers/pub_sub');
const ApodInfoView = require('./apod_info_view');

const ApodView = function(container){
  this.container = container;
};

ApodView.prototype.bindEvents = function () {
  PubSub.subscribe('APOD:data-loaded', (evt) => {
     this.renderInitialInfo(evt.detail);
  });

};

ApodView.prototype.renderInitialInfo = function (apod) {
  this.container.innerHTML = '';
  const apodInfoView = new ApodInfoView(this.container);
  apodInfoView.initialRender(apod);
};

module.exports =ApodView;
