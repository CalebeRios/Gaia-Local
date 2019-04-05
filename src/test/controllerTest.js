const controller = require('../controllers/controller.js');
const assert = require('chai').assert;

describe('controllerTest', () => {
    it('makeLocal', (done) => {
        let nome = controller.makeLocal('nome');

        nome.then((value) => {
            assert.equal(value.nome, 'nome');
            done();
        })
    })
})