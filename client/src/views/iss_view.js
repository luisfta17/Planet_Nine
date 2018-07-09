const PubSub = require('../helpers/pub_sub');
// const ApodInfoView = require('./apod_info_view');

const IssView = function(container){
  this.container = container;
};

IssView.prototype.bindEvents = function () {
  PubSub.subscribe('ISS:data-loaded', (evt) => {
    console.log(evt.detail);
     // this.renderInitialInfo(evt.detail);
  });

};

// IssView.prototype.renderInitialInfo = function (apod) {
//   this.container.innerHTML = '';
//   const apodInfoView = new ApodInfoView(this.container);
//   apodInfoView.initialRender(apod);
// };

module.exports = IssView;
