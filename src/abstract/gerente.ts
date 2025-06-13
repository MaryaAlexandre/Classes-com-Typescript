
import { Funcionario } from './funcionario';

export class Gerente extends Funcionario {
  private salarioFixo: number;

  constructor(nome: string, horasTrabalhadas: number, salarioFixo: number) {
    super(nome, horasTrabalhadas);
    this.salarioFixo = salarioFixo;
  }

  setSalarioFixo(novoSalario: number) {
    this.salarioFixo = novoSalario;
  }

  calcularSalario(): number {
    return this.salarioFixo;
  }
}
