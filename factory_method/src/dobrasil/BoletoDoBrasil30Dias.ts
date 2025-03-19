import Boleto from "../Boleto";

export default class BoletoDoBrasil30Dias extends Boleto {
    constructor(valor: number, vencimento: number) {
        super(valor, vencimento);

        this.juros = 0.05;
        this.desconto = 0.02;
        this.multa = 0.05;
    }
}
