import Calculador from "./Calculador";
import { Pedido } from "./Pedido";

export default class Pontos40Reais extends Calculador {
  calcularPontos(pedido: Pedido): number {
    if (pedido.getValor() >= 40) {
      return Math.floor(pedido.getValor() / 7);
    }

    return this.proximo.calcularPontos(pedido);
  }
}
