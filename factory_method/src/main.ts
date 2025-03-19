import Banco from "./Banco";
import BancoCaixa from "./BancoCaixa";
import BancoDoBrasil from "./BancoDoBrasil";
import Boleto from "./Boleto";

function imprimir(boleto: Boleto) {
  console.log(`Boleto gerado com sucesso no valor de R$ ${boleto.getValor()}`)
  console.log(`Vencimento: ${boleto.getVencimento()} dias`)
  console.log(`Valor Juros: R$ ${boleto.calcularJuros()}`)
  console.log(`Valor Desconto: R$ ${boleto.calcularDesconto()}`)
  console.log(`Valor Multa: R$ ${boleto.calcularMulta()}`)
  console.log("----------------------------------------")
}

const caixa = new BancoCaixa();
imprimir(caixa.gerarBoleto(10, 100));
imprimir(caixa.gerarBoleto(30, 100));
imprimir(caixa.gerarBoleto(60, 100));

const dobrasil = new BancoDoBrasil()
imprimir(dobrasil.gerarBoleto(10, 100));
imprimir(dobrasil.gerarBoleto(30, 100));
imprimir(dobrasil.gerarBoleto(60, 100));
