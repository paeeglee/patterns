import { Pedido } from "./Pedido";
import { State } from "./State";

export class AguardandoPagamentoState implements State {
  private pedido: Pedido;

  constructor(p: Pedido) {
    this.pedido = p;
  }

  pagar(): void {
    this.pedido.setEstadoAtual(this.pedido.pago);
  }

  cancelar(): void {
    this.pedido.setEstadoAtual(this.pedido.cancelado);
  }

  despachar(): void {
    throw new Error("Operação não permitida");
  }
}