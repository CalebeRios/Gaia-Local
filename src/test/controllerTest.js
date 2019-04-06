const assert = require('chai').assert;
const controller = require('../server/controllers/controller.js');


describe('controllerTest', () => {
  it('makeLocal', (done) => {
    const name = controller.makeLocal('name');

    name.then((value) => {
      assert.equal(value.name, 'name');
      done();
    });
  });
});
