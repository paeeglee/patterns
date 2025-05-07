import Calculador from "./Calculador";
import { Pedido } from "./Pedido";

export default class Pontos70Reais extends Calculador {
  calcularPontos(pedido: Pedido): number {
    if (pedido.getValor() >= 70) {
      return Math.floor(pedido.getValor() / 5);
    }

    return this.proximo.calcularPontos(pedido);
  }
}
