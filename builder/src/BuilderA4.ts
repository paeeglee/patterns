import BuilderGeradorPDF from "./BuilderGeradorPDF";
import GeradorPDF from "./GeradorPDF";

export default class BuilderA4 implements BuilderGeradorPDF {
    private pdf: GeradorPDF;

    constructor() {
        this.pdf = new GeradorPDF();
    }

    setMargin(): void {
        this.pdf.setMarginTop(30);
        this.pdf.setMarginRight(20);
        this.pdf.setMarginBottom(30);
        this.pdf.setMarginLeft(20);
    }

    getGeradorPDF(): GeradorPDF {
        return this.pdf;
    }

    setPageConfiguration(): void {
        this.pdf.setPageOrientation('portrait');
        this.pdf.setUnit('mm');
        this.pdf.setPageSizeX(210);
        this.pdf.setPageSizeY(297);
    }

    setHeader(): void {
        this.pdf.setHasHeader(true);
        this.pdf.setHeaderHight(15)

    }

    setFooter(): void {
        this.pdf.setHasFooter(true);
        this.pdf.setFooterHight(15)
    }
}
