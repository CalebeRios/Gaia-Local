/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const chai = require('chai');

const should = chai.should();
const controller = require('../server/controllers/controller.js');


describe('controllerTest', () => {
  it('makeLocal', (done) => {
    const name = controller.makeLocal('name');

    name.then((value) => {
      should.equal(value.name, 'name');
      done();
    });
  });
});
