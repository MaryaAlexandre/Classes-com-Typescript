import { Vehicle } from './Vehicle';
export class Car implements Vehicle {
    constructor(private model: string, private speed: number) {}
    move(): string {
        return `${this.model} is moving at ${this.speed} km/h`; 
    }
   setSpeed(speed: number) {
    this.speed = speed;
  } 
}