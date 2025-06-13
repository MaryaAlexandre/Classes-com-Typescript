import { Employee } from './Employee';

export class Developer extends Employee {
  constructor(private hourlyRate: number, private hoursWorked: number) {
    super();
  }

  calculateSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }

  setHours(hours: number) {
    this.hoursWorked = hours;
  }
}
