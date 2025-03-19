import Boleto from "../Boleto";

export default class BoletoDoBrasil60Dias extends Boleto {
    constructor(valor: number, vencimento: number) {
        super(valor, vencimento);

        this.juros = 0.10;
        this.desconto = 0;
        this.multa = 0.15;
    }
}
