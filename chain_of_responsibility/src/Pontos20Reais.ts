import Calculador from "./Calculador";
import { Pedido } from "./Pedido";

export default class Pontos20Reais extends Calculador {
  calcularPontos(pedido: Pedido): number {
    if (pedido.getValor() >= 20) {
      return Math.floor(pedido.getValor() / 10);
    }

    return this.proximo.calcularPontos(pedido);
  }
}
