
import { Veiculo } from './veiculo';

export class Carro implements Veiculo {
  constructor(private modelo: string, private velocidade: number) {}

  setVelocidade(novaVelocidade: number) {
    this.velocidade = novaVelocidade;
  }

  mover(): string {
    return `${this.modelo} está se movendo a ${this.velocidade} km/h`;
  }
}
