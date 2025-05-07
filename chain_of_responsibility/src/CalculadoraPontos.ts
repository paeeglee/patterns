import NenhumaPonto from "./NenhumaPonto";
import { Pedido } from "./Pedido";
import Pontos20Reais from "./Pontos20Reais";
import Pontos40Reais from "./Pontos40Reais";
import Pontos70Reais from "./Pontos70Reais";

export class CalculadoraPontos {
  calcularPontos(p: Pedido, dia: number): number {
    const pontos70Reais = new Pontos70Reais();
    const pontos40Reais = new Pontos40Reais();
    const pontos20Reais = new Pontos20Reais();
    const nenhumaPonto = new NenhumaPonto();

    pontos70Reais.setProximo(pontos40Reais);
    pontos40Reais.setProximo(pontos20Reais);
    pontos20Reais.setProximo(nenhumaPonto);

    const pontos = pontos70Reais.calcularPontos(p);

    if (dia >= 16 && dia <= 31) {
      return pontos * 2;
    }

    return pontos;
  }
}
