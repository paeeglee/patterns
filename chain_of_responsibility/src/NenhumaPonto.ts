import Calculador from "./Calculador";
import { Pedido } from "./Pedido";

export default class NenhumaPonto extends Calculador {
  calcularPontos(pedido: Pedido): number {
    return 0;
  }

  setProximo(proximo: Calculador): void {
    throw new Error("Método não implementado");
  }
}
