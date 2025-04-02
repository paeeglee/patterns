import GeradorPDF from "./GeradorPDF";

export default interface BuilderGeradorPDF {
    getGeradorPDF(): GeradorPDF;
    setPageConfiguration(): void;
    setHeader(): void;
    setFooter(): void;
    setMargin(): void;
}