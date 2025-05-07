import { Pedido } from "./Pedido";

export default abstract class Calculador {
  protected proximo: Calculador;
  
  abstract calcularPontos(pedido: Pedido): number;

  setProximo(proximo: Calculador): void {
    this.proximo = proximo;
  }
}
