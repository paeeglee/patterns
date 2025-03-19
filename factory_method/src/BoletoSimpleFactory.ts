import Boleto from "./Boleto";
import Boleto10Dias from "./Boleto10Dias";
import Boleto30Dias from "./Boleto30Dias";
import Boleto60Dias from "./Boleto60Dias";

export default class BoletoSimpleFactory {
  gerarBoleto(vencimento: number, valor: number): Boleto {
    let boleto: Boleto;

    switch (vencimento) {
      case 10:
        boleto = new Boleto10Dias(valor);
        break;
      case 30:
        boleto = new Boleto30Dias(valor);
        break;
      case 60:
        boleto = new Boleto60Dias(valor);
        break;
      default:
        throw new Error("vencimento invalido");
    }

    return boleto;
  }
}