
import { Veiculo } from './veiculo';

export class Bicicleta implements Veiculo {
  constructor(private tipo: string, private velocidade: number) {}

  setVelocidade(novaVelocidade: number) {
    this.velocidade = novaVelocidade;
  }

  mover(): string {
    return `A bicicleta do tipo ${this.tipo} está se movendo a ${this.velocidade} km/h`;
  }
}


