import Boleto from "../Boleto";

export default class BoletoCaixa10Dias extends Boleto {
    constructor(valor: number, vencimento: number) {
        super(valor, vencimento);

        this.juros = 0.02;
        this.desconto = 0.10;
        this.multa = 0.05;
    }
}
