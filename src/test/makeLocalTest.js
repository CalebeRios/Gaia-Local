/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const chai = require('chai');

const should = chai.should();
const makeLocal = require('../server/models/makeLocal.js');


describe('makeLocalTest', () => {
  it('makeLocal', (done) => {
    const name = makeLocal.makeLocal('turquia');
    name.then((value) => {
      should.equal(value.name, 'turquia');
      done();
    });
  });
});
