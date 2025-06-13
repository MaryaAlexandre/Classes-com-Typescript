
import { Carro } from '../src/interface/carro';
import { Bicicleta } from '../src/interface/bicicleta';

describe('Teste da interface Veiculo', () => {
  test('Carro deve mover e alterar velocidade', () => {
    const carro = new Carro('Fiat', 80);
    carro.setVelocidade(100);
    expect(carro.mover()).toBe('Fiat está se movendo a 100 km/h');
  });

  test('Bicicleta deve mover e alterar velocidade', () => {
    const bicicleta = new Bicicleta('montanha', 20);
    bicicleta.setVelocidade(25);
    expect(bicicleta.mover()).toBe('A bicicleta do tipo montanha está se movendo a 25 km/h');
  });
});
