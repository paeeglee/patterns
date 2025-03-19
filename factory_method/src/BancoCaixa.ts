import Banco from "./Banco";
import Boleto from "./Boleto";
import BoletoCaixa10Dias from "./caixa/BoletoCaixa10Dias";
import BoletoCaixa30Dias from "./caixa/BoletoCaixa30Dias";
import BoletoCaixa60Dias from "./caixa/BoletoCaixa60Dias";

export default class BancoCaixa extends Banco {
  protected criarBoleto(vencimento: number, valor: number): Boleto {
    let boleto: Boleto;

    switch (vencimento) {
      case 10:
        boleto = new BoletoCaixa10Dias(valor, vencimento);
        break;
      case 30:
        boleto = new BoletoCaixa30Dias(valor, vencimento);
        break;
      case 60:
        boleto = new BoletoCaixa60Dias(valor, vencimento);
        break;
      default:
        throw new Error("vencimento invalido");
    }

    return boleto;
  }
}