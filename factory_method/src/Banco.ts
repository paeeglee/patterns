import Boleto from "./Boleto";

export default abstract class Banco {
    gerarBoleto(vencimento: number, valor: number): Boleto {
        return this.criarBoleto(vencimento, valor);
    }

    protected abstract criarBoleto(vencimento: number, valor: number): Boleto;
    
    /*gerarBoleto(vencimento: number, valor: number): Boleto {
        let boleto: Boleto;

        switch(vencimento) {
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

        console.log(`Boleto gerado com sucesso no valor de R$ ${valor}`)
        console.log(`Vencimento: ${vencimento} dias`)
        console.log(`Valor Juros: R$ ${boleto.calcularJuros()}`)
        console.log(`Valor Desconto: R$ ${boleto.calcularDesconto()}`)
        console.log(`Valor Multa: R$ ${boleto.calcularMulta()}`)
        console.log("----------------------------------------")

        return boleto;
    }*/
}
