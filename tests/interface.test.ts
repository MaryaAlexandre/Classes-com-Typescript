// tests/interface.test.ts

import { Car } from '../src/interface/Car';
import { Bicycle } from '../src/interface/Bicycle';

describe('Testes para classes que implementam a interface Vehicle', () => {
  test('Car move() retorna mensagem correta após alterar velocidade', () => {
    const car = new Car('Toyota Corolla', 100);
    car.setSpeed(120);
    expect(car.move()).toBe('Toyota Corolla is moving at 120 km/h');
  });

  test('Bicycle move() retorna mensagem correta após alterar marcha', () => {
    const bike = new Bicycle(3);
    bike.changeGear(5);
    expect(bike.move()).toBe('Bicycle is moving with gear 5');
  });
});
