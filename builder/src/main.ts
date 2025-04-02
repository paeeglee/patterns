import BuilderA3 from "./BuilderA3";
import BuilderA4 from "./BuilderA4";
import GeradorPDF from "./GeradorPDF";
import GeradorPDFDiretor from "./GeradorPDFDiretor";


const builderA4 = new BuilderA4();
const diretor = new GeradorPDFDiretor(builderA4);

diretor.criarGeradorPdfSemHeader();

const builderA3 = new BuilderA3();

console.log("## Criação objeto A4");
const pdfA4 = builderA4.getGeradorPDF()

console.log(pdfA4.toString());

console.log("## Criação objeto A3");
diretor.setBuilder(builderA3);
diretor.criarGeradorPdfSemHeaderSemFooter();

const pdfA3 = builderA3.getGeradorPDF();

console.log(pdfA3.toString());
