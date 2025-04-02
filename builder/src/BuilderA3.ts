import BuilderGeradorPDF from "./BuilderGeradorPDF";
import GeradorPDF from "./GeradorPDF";

export default class BuilderA3 implements BuilderGeradorPDF {
    private pdf: GeradorPDF;

    constructor() {
        this.pdf = new GeradorPDF();
    }

    setMargin(): void {
            this.pdf.setMarginTop(60);
            this.pdf.setMarginRight(40);
            this.pdf.setMarginBottom(60);
            this.pdf.setMarginLeft(40);
        }
    
        getGeradorPDF(): GeradorPDF {
            return this.pdf;
        }
    
        setPageConfiguration(): void {
            this.pdf.setPageOrientation('portrait');
            this.pdf.setUnit('mm');
            this.pdf.setPageSizeX(297);
            this.pdf.setPageSizeY(420);
        }
    
        setHeader(): void {
            this.pdf.setHasHeader(false);
            this.pdf.setHeaderHight(0)
    
        }
    
        setFooter(): void {
            this.pdf.setHasFooter(false);
            this.pdf.setFooterHight(0)
        }
}
