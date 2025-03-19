import Banco from "./Banco";
import Boleto from "./Boleto";
import BoletoDoBrasil10Dias from "./dobrasil/BoletoDoBrasil10Dias";
import BoletoDoBrasil30Dias from "./dobrasil/BoletoDoBrasil30Dias";
import BoletoDoBrasil60Dias from "./dobrasil/BoletoDoBrasil60Dias";

export default class BancoDoBrasil extends Banco {
  protected criarBoleto(vencimento: number, valor: number): Boleto {
    let boleto: Boleto;

    switch (vencimento) {
      case 10:
        boleto = new BoletoDoBrasil10Dias(valor, vencimento);
        break;
      case 30:
        boleto = new BoletoDoBrasil30Dias(valor, vencimento);
        break;
      case 60:
        boleto = new BoletoDoBrasil60Dias(valor, vencimento);
        break;
      default:
        throw new Error("vencimento invalido");
    }

    return boleto;
  }
}