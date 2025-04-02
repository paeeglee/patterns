import BuilderGeradorPDF from "./BuilderGeradorPDF";

export default class GeradorPDFDiretor {
    private builder: BuilderGeradorPDF;

    constructor(builder: BuilderGeradorPDF) {
        this.builder = builder;
    }

    setBuilder(builder: BuilderGeradorPDF): void {
        this.builder = builder;
    }

    criarGeradorPdf(): void {
        this.builder.setPageConfiguration();
        this.builder.setMargin();
        this.builder.setFooter();
        this.builder.setHeader();
    }

    criarGeradorPdfSemHeader(): void {
        this.builder.setPageConfiguration();
        this.builder.setMargin();
        this.builder.setFooter();
    }

    criarGeradorPdfSemHeaderSemFooter(): void {
        this.builder.setPageConfiguration();
        this.builder.setMargin();
        this.builder.getGeradorPDF().setHasHeader(false);
        this.builder.getGeradorPDF().setHasFooter(false);
        this.builder.getGeradorPDF().setHeaderHight(0);
        this.builder.getGeradorPDF().setFooterHight(0);
    }
}
