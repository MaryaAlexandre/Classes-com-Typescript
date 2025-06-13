
import { Desenvolvedor } from '../src/abstract/desenvolvedor';
import { Gerente } from '../src/abstract/gerente';
import { Funcionario } from '../src/abstract/funcionario';

describe('Teste das subclasses de Funcionario', () => {
  test('Desenvolvedor calcula salário corretamente', () => {
    const dev = new Desenvolvedor('Ana', 160, 50);
    expect(dev.calcularSalario()).toBe(8000);
    dev.setValorHora(60);
    expect(dev.calcularSalario()).toBe(9600);
  });

  test('Gerente calcula salário corretamente', () => {
    const gerente = new Gerente('Carlos', 160, 10000);
    expect(gerente.calcularSalario()).toBe(10000);
    gerente.setSalarioFixo(12000);
    expect(gerente.calcularSalario()).toBe(12000);
  });

  test('FuncFuncionario calcularPagamentoMedio está correto', () => {
    const dev = new Desenvolvedor('Ana', 160, 50);
    const gerente = new Gerente('Carlos', 160, 10000);
    const media = Funcionario.calcularPagamentoMedio([dev, gerente]);
    expect(media).toBe((dev.calcularSalario() + gerente.calcularSalario()) / 2);
  });
});
