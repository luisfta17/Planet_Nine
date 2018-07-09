const PubSub = require('../helpers/pub_sub');
const IssInfoView = require('./iss_info_view');

const IssView = function(container){
  this.container = container;
};

IssView.prototype.bindEvents = function () {
  PubSub.subscribe('ISS:data-loaded', (evt) => {
    this.renderInitialInfo(evt.detail);
  });

};

IssView.prototype.renderInitialInfo = function (iss) {
  this.container.innerHTML = '';
  const issInfoView = new IssInfoView(this.container);
  issInfoView.initialRender(iss);
};

module.exports = IssView;
