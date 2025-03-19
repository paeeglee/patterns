import Banco from "./Banco";
import BoletoSimpleFactory from "./BoletoSimpleFactory";

const banco = new Banco(new BoletoSimpleFactory());

banco.gerarBoleto(10, 100);

banco.gerarBoleto(30, 100);

banco.gerarBoleto(60, 100);
