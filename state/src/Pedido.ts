import { AguardandoPagamentoState } from "./AguardandoPagamentoState";
import { CanceladoState } from "./CanceladoState";
import { EnviadoState } from "./EnviadoState";
import { PagoState } from "./PagoState";
import { State } from "./State";

export class Pedido {
  public aguardandoPagamento: State;
  public pago: State;
  public cancelado: State;
  public enviado: State;

  private estado: State;

  constructor() {
    this.aguardandoPagamento = new AguardandoPagamentoState(this);
    this.pago = new PagoState(this);
    this.cancelado = new CanceladoState(this);
    this.enviado = new EnviadoState(this);

    this.estado = this.aguardandoPagamento;
  }

  setEstadoAtual(s: State): void {
    this.estado = s;
  }

  realizarPagamento() {
    this.estado.pagar();
  }

  cancelarPedido() {
    this.estado.cancelar();
  }

  despacharPedido() {
    this.estado.despachar();
  }
}