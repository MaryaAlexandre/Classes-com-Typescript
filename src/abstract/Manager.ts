import { Employee } from './Employee';

export class Manager extends Employee {
  constructor(private baseSalary: number, private bonus: number) {
    super();
  }

  calculateSalary(): number {
    return this.baseSalary + this.bonus;
  }

  setBonus(bonus: number) {
    this.bonus = bonus;
  }
}
