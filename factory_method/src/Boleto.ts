export default abstract class Boleto {
    protected valor: number;
    protected juros: number = 0;
    protected desconto: number = 0;
    protected multa: number = 0;
    protected vencimento: number = 0;

    constructor(valor: number, vencimento: number) {
        this.valor = valor;
        this.vencimento = vencimento;
    }

    getVencimento(): number {
        return this.vencimento;
    }

    public getValor(): number {
        return this.valor;
    }

    public calcularJuros(): number {
        return this.valor * this.juros;
    }

    public calcularDesconto(): number {
        return this.valor * this.desconto;
    }

    public calcularMulta(): number {
        return this.valor * this.multa;
    }
}
