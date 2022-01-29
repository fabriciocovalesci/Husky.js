
import { assert } from 'chai';
import { Soma } from '../index.js'


describe('Teste - Adição', function(){
    it('deve retornar soma entre dois numeros inteiros', function(done){
        assert.deepEqual(Soma(4, 4), 8);
        done()
    });

    it('verificar tipagem recebida na assinatura do metodo', function(done){
        assert.deepEqual(Soma(2, '2'), 4);
        done()
    });
});