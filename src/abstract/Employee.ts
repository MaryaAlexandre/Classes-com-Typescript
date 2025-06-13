export abstract class Employee {
  abstract calculateSalary(): number;

  static totalAnnualSalary(employees: Employee[]): number {
    return employees.reduce((acc, emp) => acc + emp.calculateSalary(), 0);
  }
}
