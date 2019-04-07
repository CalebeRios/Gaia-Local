/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const chai = require('chai');

const assert = chai.assert();
const Local = require('../server/models/Local.js');

describe('createLocation', () => {
  it('Create Location', () => {
    const newLocal = new Local('name');
    assert.equal(newLocal.name, 'name');
  });
});

describe('setLatitude', () => {
  it('set latitude', () => {
    const newLocal = new Local();
    newLocal.setLatitude('lat');
    assert.equal(newLocal.latitude, 'lat');
  });
});

describe('setLongitude', () => {
  it('set longitude', () => {
    const newLocal = new Local();
    newLocal.setLongitude('lng');
    assert.equal(newLocal.longitude, 'lng');
  });
});
