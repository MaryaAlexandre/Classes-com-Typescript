import { Vehicle } from './Vehicle';
export class Bicycle implements Vehicle {
  constructor(private gear: number) {}

  move(): string {
    return `Bicycle is moving with gear ${this.gear}`;
  }

  changeGear(gear: number) {
    this.gear = gear;
  }
}
