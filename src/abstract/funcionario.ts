
export abstract class Funcionario {
  constructor(protected nome: string, protected horasTrabalhadas: number) {}

  abstract calcularSalario(): number;

  static calcularPagamentoMedio(funcionarios: Funcionario[]): number {
    const total = funcionarios.reduce((acc, f) => acc + f.calcularSalario(), 0);
    return funcionarios.length === 0 ? 0 : total / funcionarios.length;
  }
}

