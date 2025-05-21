import { Pedido } from "./Pedido";
import { State } from "./State";

export class PagoState implements State {
  private pedido: Pedido;

  constructor(p: Pedido) {
    this.pedido = p;
  }

  pagar(): void {
    throw new Error("Operação não permitida");
  }

  cancelar(): void {
    this.pedido.setEstadoAtual(this.pedido.cancelado);
  }

  despachar(): void {
    this.pedido.setEstadoAtual(this.pedido.enviado);
  }
}