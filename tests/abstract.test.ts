// tests/abstract.test.ts

import { Developer } from '../src/abstract/Developer';
import { Manager } from '../src/abstract/Manager';
import { Employee } from '../src/abstract/Employee';

describe('Testes para subclasses da classe abstrata Employee', () => {
  test('calculateSalary() de Developer e Manager retorna valores corretos', () => {
    const dev = new Developer(80, 160); // 80 * 160 = 12800
    const manager = new Manager(5000, 1000); // 5000 + 1000 = 6000

    expect(dev.calculateSalary()).toBe(12800);
    expect(manager.calculateSalary()).toBe(6000);
  });

  test('totalAnnualSalary() retorna soma dos salários calculados', () => {
    const dev = new Developer(100, 180); // 100 * 180 = 18000
    const manager = new Manager(7000, 2000); // 7000 + 2000 = 9000

    const total = Employee.totalAnnualSalary([dev, manager]);
    expect(total).toBe(27000);
  });
});
