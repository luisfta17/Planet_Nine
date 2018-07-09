const PubSub = require('../helpers/pub_sub');
const HubbleInfoView = require('./hubble_info_view');

const HubbleView = function(container){
  this.container = container;
};

HubbleView.prototype.bindEvents = function () {
  PubSub.subscribe('Hubble:data-loaded', (evt) => {
    this.renderInfo(evt.detail);
  });

};

HubbleView.prototype.renderInfo = function (randomPicture) {
  this.container.innerHTML = '';
  const hubbleInfoView = new HubbleInfoView(this.container);
  hubbleInfoView.initialRender(randomPicture)
};

module.exports = HubbleView;
