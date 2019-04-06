const assert = require('chai').assert;
const Local = require('../server/models/Local.js');

describe('criarLocal', () => {
    it('Criar Local', () => {
        let newLocal = new Local('nome');
        assert.equal(newLocal.nome, 'nome');
    })
})

describe('setLatitude', () => {
    it('set latitude', () => {
        let newLocal = new Local();
        newLocal.setLatitude('lat');
        assert.equal(newLocal.latitude, 'lat');
    })
})

describe('setLongitude', () => {
    it('set longitude', () => {
        let newLocal = new Local();
        newLocal.setLongitude('lng');
        assert.equal(newLocal.longitude, 'lng');
    })
})