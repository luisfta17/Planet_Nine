const assert = require('assert');
const HubbleInfoView = require('../hubble_info_view.js');

describe('HubbleInfoView', function () {

  beforeEach(function() {
    linkA = "someRandomPic.jpg"
    linkB = "notAPicture.pdf"
    linkC = "Picture.png"

    hubbleInfoView = new HubbleInfoView("emptyContainer");
  });

  it('should be able to detect picture', function () {
     const actual = hubbleInfoView.isPicture(linkA);
     assert.strictEqual(actual, true)
  });

  it('should be able to detect if is not a picture', function () {
     const actual = hubbleInfoView.isPicture(linkB);
     assert.strictEqual(actual, false)
  });

});

module.exports = HubbleInfoView;
