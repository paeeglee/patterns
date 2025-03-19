import Boleto from "./Boleto";
import Boleto10Dias from "./Boleto10Dias";
import Boleto30Dias from "./Boleto30Dias";
import Boleto60Dias from "./Boleto60Dias";
import BoletoSimpleFactory from "./BoletoSimpleFactory";

export default class Banco {
  private simpleFactory: BoletoSimpleFactory;

  constructor(factory: BoletoSimpleFactory) {
    this.simpleFactory = factory;
  }

  gerarBoleto(vencimento: number, valor: number): Boleto {
    const boleto = this.simpleFactory.gerarBoleto(vencimento, valor);

    console.log(`Boleto gerado com sucesso no valor de R$ ${valor}`)
    console.log(`Vencimento: ${vencimento} dias`)
    console.log(`Valor Juros: R$ ${boleto.calcularJuros()}`)
    console.log(`Valor Desconto: R$ ${boleto.calcularDesconto()}`)
    console.log(`Valor Multa: R$ ${boleto.calcularMulta()}`)
    console.log("----------------------------------------")

    return boleto;
  }
}
