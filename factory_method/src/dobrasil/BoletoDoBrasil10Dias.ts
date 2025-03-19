import Boleto from "../Boleto";

export default class BoletoDoBrasil10Dias extends Boleto {
    constructor(valor: number, vencimento: number) {
        super(valor, vencimento);

        this.juros = 0.03;
        this.desconto = 0.05;
        this.multa = 0.02;
    }
}
