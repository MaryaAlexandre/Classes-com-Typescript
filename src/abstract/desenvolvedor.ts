
import { Funcionario } from './funcionario';

export class Desenvolvedor extends Funcionario {
  private valorHora: number;

  constructor(nome: string, horasTrabalhadas: number, valorHora: number) {
    super(nome, horasTrabalhadas);
    this.valorHora = valorHora;
  }

  setValorHora(novoValor: number) {
    this.valorHora = novoValor;
  }

  calcularSalario(): number {
    return this.horasTrabalhadas * this.valorHora;
  }
}
