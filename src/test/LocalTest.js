const assert = require('chai').assert;
const Local = require('../server/models/Local.js');

describe('criarLocal', () => {
  it('Criar Local', () => {
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
