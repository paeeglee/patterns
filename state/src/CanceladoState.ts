import { Pedido } from "./Pedido";
import { State } from "./State";

export class CanceladoState implements State {
  private pedido: Pedido;

  constructor(p: Pedido) {
    this.pedido = p;
  }

  pagar(): void {
    throw new Error("Operação não permitida");
  }

  cancelar(): void {
    throw new Error("Operação não permitida");
  }

  despachar(): void {
    throw new Error("Operação não permitida");
  }
}